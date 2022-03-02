// Import the functions you need from the SDKs you need
import firebase from "firebase";
import { ref, onUnmounted } from "vue";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyqa3qOohY8gnTifUqaC1dYTqbvaSoq90",
  authDomain: "liscompwebsite.firebaseapp.com",
  projectId: "liscompwebsite",
  storageBucket: "liscompwebsite.appspot.com",
  messagingSenderId: "683343928402",
  appId: "1:683343928402:web:e62e629b716f731594138b",
  measurementId: "G-FWNYLJRM5C",
};

export const adminLogin = (login) => {
  return firebaseApp
    .auth()
    .signInWithEmailAndPassword(login.email, login.password)
    .then(() => console.log("Logged in"))
    .catch((err) => alert(err.message));
};

export const adminLogout = () => {
  firebaseApp
    .auth()
    .signOut()
    .then(() => console.log("Signed out"))
    .catch((err) => alert(err.message));
};
// Initialize Firebase
// eslint-disable-next-line
export const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const articlesCollection = db.collection("articles");

export const createArticle = (id, article) => {
  return articlesCollection.doc(id).set(article);
};

export const getArticle = async (id) => {
  const article = await articlesCollection.doc(id).get();
  return article.exists ? article.data() : null;
};

export const updateArticle = (id, article) => {
  return articlesCollection.doc(id).update(article);
};

export const deleteArticle = (id) => {
  return articlesCollection.doc(id).delete();
};

export const useLoadArticles = () => {
  const articles = ref([]);
  const close = articlesCollection.onSnapshot((snapshot) => {
    articles.value = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  });
  onUnmounted(close);
  return articles;
};

const studentsCollection = db.collection("students");

export const createStudent = (id, student) => {
  return studentsCollection.doc(id).set(student);
};

export const getStudent = async (id) => {
  const student = await studentsCollection.doc(id).get();
  return student.exists ? student.data() : null;
};

export const updateStudent = (id, student) => {
  return studentsCollection.doc(id).update(student);
};

export const deleteStudent = (id) => {
  return studentsCollection.doc(id).delete();
};

export const useLoadStudents = () => {
  const students = ref([]);
  const close = studentsCollection.onSnapshot((snapshot) => {
    students.value = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  });
  onUnmounted(close);
  return students;
};

const projectsCollection = db.collection("projects");

export const createProject = (id, project) => {
  return projectsCollection.doc(id).set(project);
};

export const getProject = async (id) => {
  const project = await projectsCollection.doc(id).get();
  return project.exists ? project.data() : null;
};

export const updateProject = (id, project) => {
  return projectsCollection.doc(id).update(project);
};

export const deleteProject = (id) => {
  return projectsCollection.doc(id).delete();
};

export const useLoadProjects = () => {
  const projects = ref([]);
  const close = projectsCollection.onSnapshot((snapshot) => {
    projects.value = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  });
  onUnmounted(close);
  return projects;
};

const researcherPartnersCollection = db.collection("researcherPartners");

export const createResearcherPartner = (id, researcherPartner) => {
  return researcherPartnersCollection.doc(id).set(researcherPartner);
};

export const getResearcherPartner = async (id) => {
  const researcherPartner = await researcherPartnersCollection.doc(id).get();
  return researcherPartner.exists ? researcherPartner.data() : null;
};

export const updateResearcherPartner = (id, researcherPartner) => {
  return researcherPartnersCollection.doc(id).update(researcherPartner);
};

export const deleteResearcherPartner = (id) => {
  return researcherPartnersCollection.doc(id).delete();
};

export const useLoadResearcherPartners = () => {
  const researcherPartners = ref([]);
  const close = researcherPartnersCollection.onSnapshot((snapshot) => {
    researcherPartners.value = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  });
  onUnmounted(close);
  return researcherPartners;
};

const companysCollection = db.collection("companys");

export const createCompany = (id, company) => {
  return companysCollection.doc(id).set(company);
};

export const getCompany = async (id) => {
  const company = await companysCollection.doc(id).get();
  return company.exists ? company.data() : null;
};

export const updateCompany = (id, company) => {
  return companysCollection.doc(id).update(company);
};

export const deleteCompany = (id) => {
  return companysCollection.doc(id).delete();
};

export const useLoadCompanys = () => {
  const companys = ref([]);
  const close = companysCollection.onSnapshot((snapshot) => {
    companys.value = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  });
  onUnmounted(close);
  return companys;
};
