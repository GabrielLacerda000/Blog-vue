<template>
    <div class="min-h-screen flex flex-col font-notoSans">
      <!-- Header Slot -->
      <header class="bg-black text-white p-4">
        <slot name="header"></slot>
      </header>
  
      <!-- Main Content Slot -->
      <main class="flex-grow p-4">
        <slot name="content"></slot>
      </main>
  
      <!-- Footer Slot -->
      <footer class="bg-black text-white p-4">
        <slot name="footer"></slot>
      </footer>
    </div>
</template>