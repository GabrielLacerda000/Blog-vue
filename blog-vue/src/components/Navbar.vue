<script setup>
// import { RouterLink  } from 'vue-router'
</script>

<template>
    <nav>
      <div class="container mx-auto flex justify-between items-center">
        <div class="text-white text-lg font-bold">Blog</div>

        <div>
          <ul class="flex space-x-4">
            <li><RouterLink  to="/" class="text-white hover:text-gray-300" >Home</RouterLink ></li>
            <li><RouterLink  to="/create" class="text-white hover:text-gray-300" >Create post</RouterLink ></li>
            <li><RouterLink  to="/your-posts" class="text-white hover:text-gray-300" >Your posts</RouterLink ></li>
          </ul>
        </div>

        
      </div>
    </nav>
</template>
  