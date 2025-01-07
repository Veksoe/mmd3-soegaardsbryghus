const HeroComponent = {
    props: {
        imageUrl: {
            type: String,
            required: true
        },
        altText: {
            type: String,
            required: true
        }
    },
    template: `
        <section class="fullWidth hero">
            <div class="imgContainer">
                <img :src="imageUrl" :alt="altText" />
                <div class="overlay"></div>
            </div>
        </section>
    `
};

export { HeroComponent }; 
