<template>
    <div>
        <div class="backlink">
            <a href="/">← Home</a>
        </div>
        <div class="content">
            <h1>{{ $page.frontmatter.title }}</h1>
            <Content />
        </div>
    </div>
</template>
<script>
export default {};
</script>