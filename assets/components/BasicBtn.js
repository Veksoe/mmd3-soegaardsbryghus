// Definer knap-komponenten

const Btn = {
    template: `
      <a :href="link" class="btn">{{ label }}</a>
    `,
    props: {
        label: {
            type: String,
            default: 'Klik her'
        },
        link: {
            type: String,
            default: '#'
        }
    }
};

export { Btn };