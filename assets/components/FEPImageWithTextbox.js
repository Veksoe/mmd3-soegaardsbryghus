const FEPImgWithText = {
    props: {
        imageUrl: {
            type: String,
            required: true
        },
        imageAlt: {
            type: String,
            default: ''
        },
        heading: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        linkText: {
            type: String,
            required: true
        },
        linkHref: {
            type: String,
            default: '#'
        },
        extraClasses: {
            type: String,
            default: ''
        }
    },
    template: `
      <section class="fep">
        <div class="imgContainer"><img :src="imageUrl" :alt="imageAlt"></div>
        <div class="textContainer">
          <h2>{{ heading }}</h2>
          <p>{{ description }}</p>
          <a :href="linkHref" :class="'btn ' + extraClasses">{{ linkText }}</a>
        </div>
      </section>
    `
};

export { FEPImgWithText };
