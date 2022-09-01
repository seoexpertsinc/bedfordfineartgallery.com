<template>
    <div>
        <div class="container primary">
            <section class="wrapper clearfix">
                <div class="artwork_header">
                    <h1>
                        <span class="artistTitle">Eugene Alonzo Poole (American 1841 – 1912)</span> River Landscape in
                        Early Autumn
                    </h1>
                    <p class="dimensions">Oil on canvas, 13.5 x 19.5 inches/Signed lower right</p>
                    <span class="hr"></span>
                </div>

                <div class="col_40 artwork">
                    <a id="btn" href="#"
                        ><nuxt-picture
                            class="art_detail"
                            alt="Eugene Alonzo Poole (American 1841 – 1912)
\"
                            height="910"
                            src="poole_river_small.jpg"
                            width="1139"
                        />
                        <p class="zoom">Click image to zoom</p></a
                    >
                </div>

                <div class="col_60 artwork_details">
                    <p>
                        Eugene Poole was southwestern Pennsylvania landscape painter—one of the Scalp Level artists who
                        painted alongside George Hetzel, founder of the Scalp Level School. Poole was born in
                        Poolesville, Maryland and studied at the Pennsylvania Academy of Fine Arts. Poole later traveled
                        to Paris where he attended the Ecole de Beaux Arts and studied with French portrait painter,
                        Leon Bonnat. After returning to the United States, he gained recognitions for his sculpted busts
                        of Robert E. Lee, General Stonewall Jackson, and General Joseph E. Johnson. Given his Paris
                        training, Poole also painted numerous portraits, some of which hung in the Corcoran Gallery in
                        Washington, D.C. Poole arrived in Pittsburgh in 1887 where he made the acquaintance of George
                        Hetzel. Poole painted autumnal landscape scenes in the French Barbizon manner, a style embraced
                        by the Scalp Level artists. Poole was skilled in capturing on canvas, the fleeting atmospheric
                        mood of his natural surroundings. He was appointed to the jury of awards for the Carnegie
                        International and served as Director of the Associated Artists of Pittsburgh.
                    </p>
                </div>
                <div class="breadcrumb"><a href="javascript:window.history.back();">Back to Gallery</a></div>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'ipad',
}
</script>

<style scoped>
body {
    background-color: #f9f9f2;
}
.compliment {
    display: none;
}
.breadcrumb {
    clear: both;
    text-align: center;
    position: absolute;
    top: 10px;
    left: 10px;
}
.breadcrumb a {
    border: none;
    background-color: #742924;
    padding: 8px 12px;
    color: #f9f9f2;
    text-transform: uppercase;
    font-size: 15px;
    border-radius: 4px;
    cursor: pointer;
    text-decoration: none;
    display: block;
}
</style>

<router>
  {
    path: '/ipad_template.html',
    caseSensitive: true,
  }
</router>
