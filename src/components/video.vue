<template>
    <div>
        <el-form-item label="视频" prop="video" class="video">
          <div class="whole">
            <video :src="video" controls="controls"></video>
          </div>
        </el-form-item>
    </div>
</template>
<style scoped>
.video{
    widows: 100%;
    height: 100%;
}
</style>
<script>
export default {
    
}
</script>