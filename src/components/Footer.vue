<script lang="ts" setup>

</script>

<template>
   <div class="bg-[#ECECEC] h-[170px] px-[250px] mb-20 flex flex-col justify-end wrapper">
      <div class="pb-10 flex items-center justify-between">
         <div class="flex items-center gap-20">
            <img src="/footer/logo1.png" alt="logo">
            <img class="logo-left" src="/footer/logo2.png" alt="logo">
         </div>
         <div class="flex items-center gap-5 logo-center">
            <img src="/footer/vk.png" alt="vk">
            <img src="/footer/vk.png" alt="vk">
            <img src="/footer/vk.png" alt="vk">
            <img src="/footer/vk.png" alt="vk">
           
         </div>
         <div>
            <img class="logo-right"src="/footer/logo3.png" alt="logo">
         </div>
      </div>
   </div>
</template>


<style scoped>

@media screen and (max-width: 1250px) {
   .wrapper {
      padding: 0 100px;
   }
		.logo-right {
			display: none;
		}
	}
@media screen and (max-width: 700px) {
   .wrapper {
      padding: 0 50px;
   }
   .logo-left {
      display: none;
   }
	}
@media screen and (max-width: 450px) {
   .logo-center {
      display: none;
   }
   .wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100px; 
      padding-top: 40px;
   }
	}

</style>