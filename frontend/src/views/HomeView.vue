<template>

    <div class="row">
    <div class="col-6">
        <div class="block1"></div>
    </div>
    <div class="col-3">
        <div class="blockyellow"></div>
    </div>
    <div class="col-3">
        <div class="blockgreen"></div>
    </div>
</div>
<div class="row">
    <div class="col-3">
        <div class="blockred"></div>
    </div>
    <div class="col-3">
        <div class="blockyellow"></div>
    </div>
    <div class="col-6">
        <div class="block2"></div>
    </div>
</div>


</template>

<script>

export default {

}
</script>

<style scoped>
.row{
    display: flex;
    justify-content: space-evenly;
    padding: 5px;
}
.block1{
    width: 100%;
    height: 200px;
    border-radius: 20px;
    background-color: #45A245;
}

.block2{
    width: 100%;
    height: 200px;
    border: 2px dotted #EE4823;
    border-radius: 20px;
    margin: 1px;
}

.blockgreen{
    width: 100%;
    height: 200px;
    border-radius: 20px;
    background-color: #45A245;
}

.blockyellow{
    width: 100%;
    height: 200px;
    border-radius: 20px;
    background-color: #F7BF3E;
}

.blockred{
    width: 100%;
    height: 200px;
    border-radius: 20px;
    background-color: #EE4823;
}
</style>
