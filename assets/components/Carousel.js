const Carousel = {
    template: `
        <div class="carousel-container">
            <div class="carousel" ref="carouselWrapper">
                <div class="carousel-wrapper" :style="{ transform: 'translateX(' + (-currentSlide * 100) + '%)' }">
                    <div class="carousel-slide" :class="{'active': currentSlide === 0, 'inactive': currentSlide !== 0}">
                        <div class="content">
                            <div class="text">
                                <h2>Til den søde tand...</h2>
                                <div><p>Kæmpe Choko Cookie</p><p>KR. 35,-</p></div>
                                <div><p>Skærekage</p><p>KR. 35,-</p></div>
                                <div><p>Gateau Marcel</p><p>KR. 45,-</p></div>
                                <div><p>Sæsonens Kage</p><p>Fra KR. 35,-</p></div>
                                <p>Vi har også daglige kage overraskelser! Se i kagemontren eller spørg betjeningen for at høre mere.</p>
                                <a href="#" class="btn">Se hele menukortet</a>
                            </div>
                            <img src="./assets/img/index/cake-outside.jpg" alt="Jorbærtoppe med torvet i baggrunden">
                        </div>
                    </div>

                    <div class="carousel-slide" :class="{'active': currentSlide === 1, 'inactive': currentSlide !== 1}">
                        <div class="content">
                            <div class="text">
                                <h2>For den studerende...</h2>
                                <div><p>Bolle med ost og syltetøj</p><p>KR. 40,-</p></div>
                                <div><p>Smootiebowl m. banan, mango, blå spirulina og havredrik</p><p>KR. 70,-</p></div>
                                <div><p>Nacho</p><p>KR. 95,-</p></div>
                                <div><p>Bryggerens Burger </p><p>KR. 165,-</p></div>
                                <div><p>Drunken Beer Pot  </p><p>KR. 195,-</p></div>
                                <a href="#" class="btn">Se hele menukortet</a>
                            </div>
                            <img src="./assets/img/index/burger.jpg" alt="Burger">
                        </div>
                    </div>

                    <div class="carousel-slide" :class="{'active': currentSlide === 2, 'inactive': currentSlide !== 2}">
                        <div class="content">
                            <div class="text">
                                <h2>For den ølglade...</h2>
                                <div><p>Testeren m. 6 smagsprøver á 4 cl</p><p>KR. 60,-</p></div>
                                <div><p>Drunken Beer Pot </p><p>KR. 195,-</p></div>
                                <div><p>Spareribs</p><p>KR. 245,-</p></div>
                                <div><p>Lille planke m. frit valg på 8 forskellige øl fra øltavlen</p><p>KR. 315,-</p></div>
                                <a href="#" class="btn">Se hele menukortet</a>
                            </div>
                            <img src="./assets/img/index/drunken-beer-pot.jpg" alt="Drunken Beer Pot med pomfritter til">
                        </div>
                    </div>
                    <div class="carousel-slide" :class="{'active': currentSlide === 3, 'inactive': currentSlide !== 3}">
                        <div class="content">
                            <div class="text ">
                                <h2>Sæsonens 3-retters menu</h2>
                                <p class="season">Oktober - November - December</p>
                                <p>1 ret, KR 275,- | 2 retter, KR 325,- | 3 retter, KR 355,- </p>
                                <div class="meal">
                                <p class="bold " >Forret</p>
                                <p>Cremet fiskesuppe - kulmule - fennikel crudité - urter</p>
                                </div>
                                <div class="meal">
                                <p class="bold meal" >Hovedret</p>
                                <p>Cremet Confiteret andelår </p>
                                <p>Rødvinsglace - pommes Anna - jordskok sauté af sæsonens grønt </p>
                                </div>
                                <div class="meal">
                                <p class="bold meal" >Dessert</p>
                                <p>Mandelkage - kirsebær - mørk chokolade</p>
                                </div>
                                <a href="#" class="btn">Se hele menukortet</a>
                            </div>
                            <img src="./assets/img/index/meat-and-potato.jpg" alt="Flot anrettet kød med pommes Anna til">
                        </div>
                    </div>
                </div>
            </div>
            <div class="carousel-controls">
                <button @click="prevSlide"><i class="fa-solid fa-chevron-left"></i></button>
                <button @click="nextSlide"><i class="fa-solid fa-chevron-right"></i></button>
            </div>
        </div>
    `,
    data() {
        return {
            currentSlide: 0
        };
    },
    methods: {
        nextSlide() {
            this.currentSlide = (this.currentSlide + 1) % 4;
        },
        prevSlide() {
            this.currentSlide = (this.currentSlide - 1 + 4) % 4;
        }
    }
};

export { Carousel };