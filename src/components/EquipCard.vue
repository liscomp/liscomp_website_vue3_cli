<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Equipamento",
  props: ["nome", "foto", "descricao"],
  data: function () {
    return {
      abbreviation: this.foto.split(".")[0],
    };
  },
};
</script>

<template>
  <div class="col-12 col-md-6 col-lg-4 equipamento">
    <div class="profile">
      <div class="d-flex justify-content-center">
        <img
          class="avatar avatar-circle"
          v-bind:src="require(`@/assets/equipamentos/${foto}`)"
        />
      </div>
      <div class="portrait-title text-center">
        <h5 class="title name">{{ nome }}</h5>
      </div>
      <div class="details">
        <div class="d-flex justify-content-center">
          <button
            type="button"
            class="details-button"
            data-bs-toggle="modal"
            :data-bs-target="`#${abbreviation}`"
          >
            Detalhes
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
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div class="row about">
                  <div class="col-12">
                    <ul class="equipamento-descricao">
                      <li
                        v-for="info in descricao.split(';')"
                        v-bind:key="info"
                        class="m-0"
                      >
                        {{ info }};
                      </li>
                    </ul>
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
.equipamento {
  padding: 20px;
  .profile {
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    height: 100%;
    border-radius: 15px;
    padding: 10px;
  }
}
.details-button {
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

.details-button:hover {
  color: white;
  background-color: #036365;
  transition: background 500ms;
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
}
.avatar-circle {
  border-radius: 10%;
}
.avatar {
  aspect-ratio: 1;
  width: 100%;
  object-fit: cover;
}
h5.name {
  padding: 5px;
}
</style>
