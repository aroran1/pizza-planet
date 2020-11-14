<template>
  <form>
    <h2>Add New Pizza to Menu</h2>

    <div class="form-group row">
      <label class="col-sm-3">Name</label> 
      <div class="col-sm-9">
        <input type="text" class="form-control" />
      </div>
    </div>

    <div class="form-group row">
      <label class="col-sm-3">Description</label> 
      <div class="col-sm-9">
        <textarea type="text" class="form-control" rows="5"></textarea>
      </div>
    </div>

    <p><strong>Option 1</strong></p>
    <div class="form-group row">
      <label class="col-sm-3">Size (")</label> 
      <div class="col-sm-9">
        <input type="text" class="form-control" />
      </div>
    </div>

    <div class="form-group row">
      <label class="col-sm-3">Price</label> 
      <div class="col-sm-9">
        <input type="text" class="form-control" />
      </div>
    </div>

    <p><strong>Option 2</strong></p>
    <div class="form-group row">
      <label class="col-sm-3">Size (")</label> 
      <div class="col-sm-9">
        <input type="text" class="form-control" />
      </div>
    </div>

    <div class="form-group row">
      <label class="col-sm-3">Price</label> 
      <div class="col-sm-9">
        <input type="text" class="form-control" />
      </div>
    </div>

    <div class="form-group row">
      <button type="button" class="btn btn-success btn-block">Add</button>
    </div>
  </form>
</template>

<script>
export default {
  
}
</script>

<style scoped>
h1 {
  font-size: 1.5em;
}
h2 {
  font-size: 1.2em;
}

</style>