<template>
     <div class="topic-icon">
        <div class="icon1"><div class="content" style="color: white;">主题</div></div>
        <div class="icon2"><div class="content" style="color: brown;">地点</div></div>
    </div>
</template>
<style>
.topic-icon{
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    height: 10%;
    width: 60%;
    border: 3px solid #bd3124;
 
    border-radius: 20px;
   
 
  
}
.icon1{
    background-color: #bd3124;
    border-radius: 20px 0 0 20px;
    display: flex;
    width: 50%;
}
.icon2{
    background-color: white;
    border-radius: 0px 20px 20px 0px;
    display: flex;
    width: 50%;
}
.content{
display:flex ;

align-items: center;
margin: 0 auto;
font-weight: bold ;
font-size: 20px;

}

</style>