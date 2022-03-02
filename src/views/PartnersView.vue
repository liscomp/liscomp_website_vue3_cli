<script>
// @ is an alias to @
import Pesquisador from "@/components/ResearcherPartnerCard.vue";
import Empresa from "@/components/CompanyCard.vue";
import { useLoadCompanys, useLoadResearcherPartners } from "@/firebase";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "PartnersView",
  components: {
    Pesquisador,
    Empresa,
  },
  setup() {
    const companys = useLoadCompanys();
    const researcherPartners = useLoadResearcherPartners();
    return {
      researcherPartners,
      companys,
    };
  },
  methods: {
    orderByName: (subject) => {
      return subject.sort(function (a, b) {
        if (a.nome > b.nome) {
          return 1;
        }
        if (a.nome < b.nome) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });
    },
  },
  computed: {
    orderResearcherPartners() {
      return this.orderByName(this.researcherPartners);
    },
    orderCompanys() {
      return this.orderByName(this.companys);
    },
  },
};
</script>

<template>
  <div id="parceiros">
    <div id="page-header" class="d-flex justify-content-center flex-column">
      <div>
        <h2 class="title">Parceiros</h2>
      </div>
    </div>
    <div class="container inner-pages">
      <h4 class="title position">Pesquisadores</h4>
      <div class="row box-positions">
        <Pesquisador
          v-for="researcher in orderResearcherPartners"
          v-bind:key="researcher.abbreviation"
          v-bind:abbreviation="researcher.abbreviation"
          v-bind:name="researcher.name"
          v-bind:institution="researcher.institution"
          v-bind:email="researcher.email"
          v-bind:lattes="researcher.lattes"
          v-bind:resume="researcher.resume"
          v-bind:imgUrl="researcher.imgUrl"
          v-bind:imgLogoUrl="researcher.imgLogoUrl"
        />
      </div>

      <h4 class="title position">Empresas</h4>
      <div class="row box-positions">
        <Empresa
          v-for="company in orderCompanys"
          v-bind:key="company.acronym"
          v-bind:name="company.name"
          v-bind:about="company.about"
          v-bind:acronym="company.acronym"
          v-bind:imgUrl="company.imgUrl"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.avatar-circle {
  border-radius: 10%;
}
.avatar {
  aspect-ratio: 1;
  width: 100%;
  object-fit: cover;
}

ul.network-icon {
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
}

.about {
  padding-left: 10px;
}

ul.ul-edu li .description p {
  margin: 0;
}

ul.ul-edu li .description p.institution {
  font-size: 0.9rem;
  color: rgba(0, 0, 0, 0.6);
}

.network-icon li {
  padding: 2.5px 5px;
}

.big-icon {
  font-size: 2.5rem;
}

.position {
  padding: 20px;
}
.box-positions {
  width: 100%;
  border-bottom: 4px solid #036365b6;
  border-top: 4px solid #036365b6;
  border-radius: 25px;
}
.name {
  padding: 2.5px;
}
</style>
