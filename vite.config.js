export default {
    base: './', // Ensures relative paths for assets
    build: {
        rollupOptions: {
            input: './index.html', // Ensures the correct entry point
        },
    },
};