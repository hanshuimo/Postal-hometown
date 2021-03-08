<template>
    <div ref="container" class="container">
      
    </div>
</template>
<style scoped>
.container{
  width: 100%;
  height: 100%;
}

</style>


<script>
  import * as THREE from "three";
  import {OBJLoader, MTLLoader} from 'three-obj-mtl-loader';
  import { OrbitControls } from "three-orbitcontrols";
  export default {
    name: "vue-three",
    data() {
      return {
        scene: null,
        light: null,
        camera: null,
        orbitControls: null,
        renderer: null,
        clock:null
      }
    },
    methods: {
      //初始化three.js相关内容
      init() {
        let container =this.$refs.container;

        this.scene = new THREE.Scene();
        this.scene.add(new THREE.AmbientLight(0x999999));//环境光
        this.light = new THREE.DirectionalLight(0xdfebff, 0.45);//从正上方（不是位置）照射过来的平行光，0.45的强度
        this.light.position.set(-500, 50, 500);
        this.light.position.multiplyScalar(0.3);
        this.scene.add(this.light);
        //初始化相机
        this.camera = new THREE.PerspectiveCamera(60, container.clientWidth/container.clientHeight, 1, 10000);
        this.camera.position.set(-20, 100, 230);
        this.camera.lookAt(15,70,0);

        
        //渲染
        this.renderer = new THREE.WebGLRenderer({
          alpha: true,
        });
        this.renderer.setClearColor(0xffffff,0.0);
        this.renderer.setPixelRatio(window.devicePixelRatio);//为了兼容高清屏幕
        this.renderer.setSize(container.clientWidth, container.clientHeight);

                //初始化控制器
        this.orbitControls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
        this.orbitControls.target = new THREE.Vector3(15, 20, 40);//控制焦点
        this.orbitControls.autoRotate = false;//将自动旋转关闭
        this.clock = new THREE.Clock();//用于更新轨道控制器


        
        container.appendChild(this.renderer.domElement);
        window.addEventListener('resize', this.onWindowResize, false);//添加窗口监听事件（resize-onresize即窗口或框架被重新调整大小）
      },
      
      //窗口监听函数
      onWindowResize() {
        let container =this.$refs.container;
        this.camera.aspect = container.clientWidth/container.clientHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(container.clientWidth,container.clientHeight);
      },
      animate() {
        requestAnimationFrame(this.animate);
        this.render();
      },
      render() {
        this.renderer.render(this.scene, this.camera);
      },
      //外部模型加载函数
      loadObj(number) {
        var name1='底.mtl',name2='底.obj';
        if(number===1){
          name1='博物馆.mtl';
          name2='博物馆.obj';
          //name1='底.mtl';
          //name2='底.obj';
        }else if(number===2){
          name1='墙体.mtl';
          name2='墙体.obj';
        }else if(number===3){
          name1='前屋檐.mtl';
          name2='前屋檐.obj';
        }else if(number===4){
          name1='木门+窗.mtl';
          name2='木门+窗.obj';
        }else if(number===5){
          name1='屋顶.mtl';
          name2='屋顶.obj';
        }else if(number===6){
          name1='屋脊.mtl';
          name2='屋脊.obj';
        }else if(number===7){
          name1='两端石雕.mtl';
          name2='两端石雕.obj';
        }else if(number===8){
          name1='瓦片.mtl';
          name2='瓦片.obj';
        }
        //包含材质
        new MTLLoader().setPath('/static/博物馆/').load(name1, materials => {
          console.log("materials", materials);
          materials.preload();
          new OBJLoader().setMaterials(materials).setPath('/static/博物馆/').load(name2, obj => {
            //obj.scale.set(1, 1, 1);
            //obj.position.set(0, 0, 0);
            this.scene.add(obj);
            console.log(this.scene)
          });
        });
        
      }
    },
    mounted() {
      this.init();
      var delta = this.clock.getDelta();//获取时间差
      this.orbitControls.update(delta);//更新时间
      this.animate();
    }
  }
</script>