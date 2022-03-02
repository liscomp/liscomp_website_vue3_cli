<script>
/* eslint-disable vue/no-unused-components */

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "ResearcherPartnerCard",
  props: [
    "abbreviation",
    "name",
    "institution",
    "email",
    "lattes",
    "resume",
    "imgUrl",
    "imgLogoUrl",
  ],
  data: function () {
    return {
      email_completo: "mailto:%20" + this.contato.email,
    };
  },
};
</script>

<template>
  <div class="pesquisador col-12 col-md-6 col-lg-4 col-xl-3">
    <div class="profile">
      <div class="d-flex justify-content-center">
        <img class="avatar avatar-circle" v-bind:src="`${imgUrl}`" />
      </div>
      <div class="portrait-title text-center">
        <h5 class="title name">{{ name }}</h5>
      </div>
      <ul class="network-icon d-flex justify-content-center" aria-hidden="true">
        <li>
          <a :href="email_completo">
            <i class="fa-solid fa-envelope fa fa-2x"></i>
          </a>
        </li>
        <li>
          <a :href="lattes" target="_blank" rel="noopener">
            <i class="ai ai-lattes fa-2x"></i>
          </a>
        </li>
      </ul>
      <div class="resume">
        <div class="d-flex justify-content-center">
          <button
            type="button"
            class="resume-button"
            data-bs-toggle="modal"
            :data-bs-target="`#${abbreviation}`"
          >
            Resumo
          </button>
        </div>
        <div
          class="modal fade"
          :id="`${abbreviation}`"
          tabindex="-1"
          aria-labelledby="researcherModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="title name" id="researcherModalLabel">{{ nome }}</h5>
                <h5 class="modal-title"></h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div class="row about">
                  <div class="col-md-4">
                    <div class="d-flex justify-content-center">
                      <img
                        class="avatar avatar-circle"
                        v-bind:src="`${imgLogoUrl}`"
                      />
                    </div>
                    <h5 class="title name">{{ institution }}</h5>
                  </div>
                  <div class="col-md-7">
                    <h6 class="title name">Resumo</h6>
                    <div>{{ resume }}</div>
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
.pesquisador {
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
