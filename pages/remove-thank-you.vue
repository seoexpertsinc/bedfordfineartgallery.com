<template>
    <div>


<div class="container primary">
<section class="wrapper clearfix">
<div class="artwork_header">
  <h1>Unsubscribe</h1>
  <span class="hr"></span></div>


<div class="lead_callout" style="margin-bottom:200px;">
<p style="text-align:center; color: #222;">Your email address has been removed.</p>

<p><a style="display:block; max-width:300px; background:#222222; color:#f2f2f2; text-decoration:none; padding: 12px; margin: auto; margin-top: 12px; text-align:center;" href="Artists--Bios.html">VIEW OUR GALLERY</a></p>
</div>








</section>
</div>
    </div>
</template>

<style scoped>
.flex {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.flex > div {
    width: 32%;
}
.flex img {
    width: 100%;
    height: auto;
}

@media screen and (max-width: 860px) {
    .flex > div {
        width: 100%;
    }
    .mobile_1 {
        order: -1;
    }
    .flex img {
        max-width: 350px;
        margin: 15px auto;
        display: block;
    }
}
</style>

<router>
    {
      path: '/remove_thank_you.htm',
      caseSensitive: true,
    }
  </router>
