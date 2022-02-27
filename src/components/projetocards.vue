<template>
  <div class="project col-lg-4 col-md-6 col-sm-6 col-12 mb-4">
    <div class="project-box">
      <router-link
        :to="{
          name: 'ProjectView',
          params: {
            id: id,
            title: title,
          },
        }"
      >
        <div class="project-image">
          <img :src="`${this.imgUrl}`" class="image" alt="" />
        </div>
      </router-link>
      <div class="project-content row">
        <div class="col-md-12 col-lg-9 project-title">
          <h3 class="title">
            <router-link
              :to="{
                name: 'ProjectView',
                params: {
                  id: id,
                  title: title,
                },
              }"
            >
              {{ short_title }}</router-link
            >
          </h3>
        </div>
        <div class="col-lg-3 d-none d-lg-block project-button">
          <router-link
            :to="{
              name: 'ProjectView',
              params: {
                id: id,
                title: title,
              },
            }"
          >
            <i class="fa fa-angle-right"> </i>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjetoCards",
  props: ["id", "title", "short_title", "imgUrl"],
};
</script>

<style lang="scss" scoped>
.button {
  padding: 10px 5px;
  border-radius: 3px;
  background-color: #dadada;
  color: black;
  font-weight: 600;
  border: none;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.15);
  transition: 0.8s cubic-bezier(0.2, 1, 0.2, 1);
  cursor: pointer;
}
.card {
  background-color: #f4f6f7;
  border: 2px solid #036365;
  box-shadow: 5x 5px 10px rgba(0, 0, 0, 0.2);
  margin: 5px;
}
.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.25);
}
button.button {
  padding: 10px 10px;
  font-size: 20px;
  color: #036365;
  background-color: #eee;
}
button.button:hover,
button.button:focus {
  color: white;
  background-color: #036365;
  transition: background 500ms;
}

.project {
  padding: 0 10px;
  .project-box {
    height: 100%;
    border-top: 0;
    margin-bottom: 0;
    background-color: #f4f6f7;
    border: 2px solid #036365;
    .project-image {
      aspect-ratio: auto 750/500;
      .image {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
    .project-content,
    .row {
      padding: 15px;
      margin: 0px;
      .project-title {
        padding: 0px;
        h3.title {
          font-size: 18px;
          font-weight: 600;
          margin: 0;
        }
      }
    }
    .project-button {
      width: 42px;
      height: 42px;
      border: 1px solid #036365;
      border-radius: 50%;
      line-height: 42px;
      text-align: center;
      font-size: 16px;
    }
  }
}
</style>
