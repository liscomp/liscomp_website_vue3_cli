<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "CompanyCard",
  props: ["name", "acronym", "about", "imgUrl"],
};
</script>

<template>
  <div class="company col-12 col-md-6 col-lg-4 col-xl-3">
    <div class="profile">
      <div class="d-flex justify-content-center">
        <img class="avatar avatar-circle" v-bind:src="`${imgUrl}`" />
      </div>
      <div class="portrait-title text-center">
        <h5 class="title name">{{ name }}</h5>
      </div>
      <div class="resume">
        <div class="d-flex justify-content-center">
          <button
            type="button"
            class="resume-button"
            data-bs-toggle="modal"
            :data-bs-target="`#${acronym}`"
          >
            Saiba mais
          </button>
        </div>
        <div
          class="modal fade"
          :id="`${acronym}`"
          tabindex="-1"
          aria-labelledby="researcherModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="title name" id="researcherModalLabel">{{ name }}</h5>
                <h5 class="modal-title"></h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div class="row">
                  <div class="col-12">
                    <div class="about">{{ about }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.company {
  padding: 20px;
  .profile {
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    height: 100%;
    border-radius: 15px;
    padding: 10px;
  }
}
.resume-button {
  background-color: white;
  border: 2px solid #036365;
  border-radius: 15px;
  color: #036365;
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  padding: 16px 24px;
  text-align: center;
  width: 50%;
}

.resume-button:hover {
  color: white;
  background-color: #036365;
  transition: background 500ms;
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
}
</style>
