<template>
  <div>
    <NavBar />
    <h1 class="mt-5 mb-3 title">Register</h1>
    <base-dialog v-if="inputIsValid" title="Konfirmasi Pendaftaran">
      <template #default>
        <h3>Pastikan form sudah sesuai</h3>
        <div class="form-confirmation">
          <h5>Nama :</h5>
          <p>{{ form.first_name }} {{ form.last_name }}</p>
        </div>
        <div class="form-confirmation">
          <h5>Jenis Kelamin :</h5>
          <p>{{ form.gender }}</p>
        </div>
        <div class="form-confirmation">
          <h5>Tanggal Lahir :</h5>
          <p>{{ form.date_birth }}</p>
        </div>
        <div class="form-confirmation">
          <h5>Nomor Handphone :</h5>
          <p>{{ form.handphone }}</p>
        </div>
        <div class="form-confirmation">
          <h5>Pendidikan Terakhir :</h5>
          <p>{{ form.last_education }}</p>
        </div>
        <div class="form-confirmation">
          <h5>Alamat :</h5>
          <p>{{ form.address }}</p>
        </div>
        <div class="form-confirmation">
          <h5>Program yang di ambil :</h5>
          <p>{{ form.program }}</p>
        </div>
        <div class="form-confirmation">
          <h5>Batch :</h5>
          <p>{{ form.batch }}</p>
        </div>
        <div class="form-confirmation">
          <h5>Metode Pembayaran :</h5>
          <p>{{ form.payment_method }}</p>
        </div>

        <!-- <p>Please check all input</p> -->
      </template>
      <template #actions>
        <button @click="notConfirmForm" id="back-button">back</button>
        <button @click="confirmForm" id="submit-button">Submit</button>
      </template>
    </base-dialog>
    <div class="card">
      <form @submit.prevent="submitForm" method="POST">
        <div class="form-group">
          <h2>Pilih Program</h2>
          <div class="row">
            <label for="program">Pilih Progran Yang Ingin Diambil</label>
            <div class="col-lg-6 col-md-6 col-lg-6">
              <div
                class="card-button"
                role="button"
                @click="selectedCardProgram('bootcamp')"
                :class="{
                  cardButtonActive: cardButtonProgramSelected === 'bootcamp',
                }"
              >
                <p>Bootcamp</p>
                <p>Kuasai skill pemrograman dalam waktu singkat</p>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-lg-6">
              <div
                class="card-button"
                role="button"
                @click="selectedCardProgram('professionalDev')"
                :class="{
                  cardButtonActive:
                    cardButtonProgramSelected === 'professionalDev',
                }"
              >
                <p>Professional Development</p>
                <p>Kuasai skill pemrograman dalam waktu singkat</p>
              </div>
            </div>
          </div>
          <div class="row mb-3 mt-3">
            <div class="col-lg-6 col-md-6 col-lg-6">
              <label for="pilih-program">Pilih Program</label>
              <select
                class="form-control"
                id="pilih-program"
                v-model="form.program"
                required
              >
                <option value disabled>Pilih Program</option>
                <option v-if="cardButtonProgramSelected === 'bootcamp'">
                  Full Stack JavaScript
                </option>
                <!-- <option>2</option>
                  <option>3</option>
                  <option>4</option> -->

                <option v-if="cardButtonProgramSelected === 'professionalDev'">
                  KOTLIN Android Develper
                </option>
                <!-- <option>2</option>
                  <option>3</option>
                  <option>4</option>                 -->
              </select>
            </div>
            <div class="col-lg-6 col-md-6 col-lg-6">
              <label for="pilih-batch">Pilih Batch</label>
              <select
                class="form-control"
                id="pilih-batch"
                v-model="form.batch"
                required
              >
                <option value disabled>Pilih Batch</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
          </div>
        </div>

        <div class="form-group">
          <h2>Metode Pembayaran</h2>
          <div class="row">
            <label for="metode-pembayaran">Metode Pembayaran</label>
            <div class="col-lg-4 col-md-4 col-sm-4">
              <div
                class="card-button"
                role="button"
                @click="selectedCardPembayaran('upfront')"
                :class="{
                  cardButtonActive: cardButtonPembayaranSelected === 'upfront',
                }"
                :value="form.payment_method"
              >
                <span>Upfront</span>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4">
              <div
                class="card-button cicilan"
                role="button"
                :class="{
                  cardButtonActive: cardButtonPembayaranSelected === 'cicilan',
                }"
                :value="form.payment_method"
              >
                <span>Cicilan</span>
              </div>
            </div>
          </div>
        </div>
        <div class="form-group mt-4">
          <h2>Tentang Calon Siswa</h2>
          <div class="row mt-2">
            <div class="col-lg-6 col-md-6 col-sm-6">
              <label for="first_name">Nama Depan</label>
              <input
                type="text"
                placeholder="Nama Depan"
                id="first_name"
                class="form-control"
                v-model.trim="form.first_name"
                required
              />
              <!-- <p v-if="inputValidity === 'invalid'">
                Please enter a valid name!
              </p> -->
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6">
              <label for="last_name">Nama Belakang</label>
              <input
                type="text"
                placeholder="Nama Belakang"
                id="last_name"
                class="form-control"
                v-model.trim="form.last_name"
                required
              />
              <!-- <p v-if="inputValidity === 'invalid'">
                Please enter a valid name!
              </p> -->
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-lg-12 col-md-12 col-sm-12">
              <label for="email">Email</label>
              <input
                type="email"
                placeholder="email"
                class="form-control"
                id="email"
                v-model="form.email"
                required
              />
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-lg-6 col-md-6 col-sm-6">
              <label for="gender">Jenis Kelamin</label>
              <select
                class="form-control"
                id="gender"
                v-model="form.gender"
                required
              >
                <option value disabled>Pilih Salah Satu</option>
                <option>Laki-Laki</option>
                <option>Perempuan</option>
              </select>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6">
              <label for="date_birth">Tanggal Lahir</label>
              <input
                type="date"
                placeholder="dd/mm/yy"
                id="date_birth"
                class="form-control"
                v-model="form.date_birth"
                required
              />
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-lg-12 col-md-12 col-sm-12">
              <label for="last_education">Pendidikan Terakhir</label>
              <select
                class="form-control"
                id="last_education"
                v-model="form.last_education"
                required
              >
                <option value disabled>Pilih Salah Satu</option>
                <option>SD</option>
                <option>SMP</option>
                <option>SMA</option>
                <option>Diploma</option>
                <option>Strata 1 (S1)</option>
                <option>Strata 2 (S2)</option>
                <option>Strata 3 (S3)</option>
              </select>
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-lg-12 col-md-12 col-sm-12">
              <label for="address">Alamat Lengkap</label>
              <textarea
                id="address"
                cols="10"
                rows="5"
                class="form-control"
                placeholder="Alamat Lengkap Calon Siswa"
                v-model="form.address"
                required
              ></textarea>
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-lg-12 col-md-12 col-sm-12">
              <label for="handphone">Nomor Handphone</label>
              <input
                type="number"
                class="form-control"
                placeholder="+62"
                id="handphone"
                v-model="form.handphone"
                required
              />
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-lg-12 col-md-12 col-sm-12">
              <label for="referral_code">Kode Referral (Jika Ada)</label>
              <input
                type="text"
                class="form-control"
                placeholder="Kode Referal"
                id="referral_code"
                v-model="form.referral_code"
                required
              />
            </div>
          </div>

          <button type="submit" class="mt-4">Kirim Formulir</button>
        </div>
      </form>
    </div>
    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import BaseDialog from "@/components/BaseDialog.vue";

import axios from "axios";
export default {
  components: {
    NavBar,
    Footer,
    BaseDialog,
  },
  data() {
    return {
      cardButtonProgramSelected: null,
      cardButtonPembayaranSelected: null,
      form: {
        id: 0,
        first_name: "",
        last_name: "",
        email: "",
        gender: "",
        date_birth: "",
        last_education: "",
        address: "",
        handphone: "",
        referral_code: "",
        program: "",
        batch: "",
        payment_method: "",
      },
      inputValidity: "pending",
      inputIsValid: false,
    };
  },

  methods: {
    selectedCardProgram(card) {
      if (card === "bootcamp") {
        this.cardButtonProgramSelected = "bootcamp";
      } else if (card === "professionalDev") {
        this.cardButtonProgramSelected = "professionalDev";
      }
    },
    selectedCardPembayaran(card) {
      if (card == "upfront") {
        this.cardButtonPembayaranSelected = "upfront";
      } else if (card === "cicilan") {
        this.cardButtonPembayaranSelected = "cicilan";
      } else if (card === "isa") {
        this.cardButtonPembayaranSelected = "isa";
      }

      this.form.payment_method = this.cardButtonPembayaranSelected;
      console.log(this.form.payment_method);
    },
    submitForm() {
      // console.log('username: ' + this.first_name + ' ' + this.last_name)
      // this.form.id += 1;
      // console.log(this.form)
      // let newForm = {
      //   id: this.form.id++,
      //   first_name: this.form.first_name,
      //   last_name: this.form.last_name,
      //   email: this.form.email,
      //   gender: this.form.gender,
      //   date_birth: this.form.date_birth,
      //   last_education: this.form.last_education,
      //   address: this.form.address,
      //   handphone: this.form.handphone,
      //   referral_code: this.form.referral_code,
      //   program: this.form.program,
      //   batch: this.form.batch,
      //   payment_method: this.form.payment_method,
      // };

      // let saveform = {
      //   data: [
      //     newForm
      //   ]
      // }
      this.inputIsValid = true;
      // if (
      //   this.form.first_name === "" ||
      //   this.form.last_name === "" ||
      //   this.form.email === "" ||
      //   this.form.gender === "" ||
      //   this.form.date_birth === "" ||
      //   this.form.last_education === "" ||
      //   this.form.address === "" ||
      //   this.form.handphone === "" ||
      //   this.form.referral_code === "" ||
      //   this.form.program === "" ||
      //   this.form.batch === "" ||
      //   this.form.payment_method === ""
      // ) {
      //   this.inputIsValid = true
      //   return
      // }

      // axios.post("https://sheetdb.io/api/v1/7m7268nbeod45", newForm);
    },
    // validateInput() {
    //   if (this.form.first_name === "") {
    //     this.inputValidity = "invalid";
    //   } else {
    //     this.inputValidity = "valid";
    //   }
    // },
    confirmForm() {
      let newForm = {
        id: this.form.id++,
        first_name: this.form.first_name,
        last_name: this.form.last_name,
        email: this.form.email,
        gender: this.form.gender,
        date_birth: this.form.date_birth,
        last_education: this.form.last_education,
        address: this.form.address,
        handphone: this.form.handphone,
        referral_code: this.form.referral_code,
        program: this.form.program,
        batch: this.form.batch,
        payment_method: this.form.payment_method,
      };

      // fetch("https://script.google.com/macros/s/AKfycbwEK0UDuf5_tQ2YLogtRTfRZNPPMeS5lxuNaHaFY0pdbVjhFVvOFGSn7lrkmMCC_WITog/exec", 
      // { method: 'POST', body: newForm})
      // .then(response => console.log('Success!', response))
      // .catch(error => console.error('Error!', error.message))
      
      // axios.post("https://script.google.com/macros/s/AKfycbxJgWX18yVKjp982jAMnc7SPYGz4-2cwEpQD8Pq1fxRwzqlamFOiEkqWjMXKVZbJ0u1fg/exec", newForm)
      // .then(() => {
      //     this.$toast.success("Sukses Mengirim Form", {
      //       type: "success",
      //       position: "top-right",
      //       duration: 3000,
      //       dismissible: true,
      //     });
      //   });

      axios
        .post("https://sheetdb.io/api/v1/7m7268nbeod45", newForm)
        .then(() => {
          this.$toast.success("Sukses Mengirim Form", {
            type: "success",
            position: "top-right",
            duration: 3000,
            dismissible: true,
          });
        });

      this.form.first_name = "";
      this.form.last_name = "";
      this.form.email = "";
      this.form.gender = "";
      this.form.date_birth = "";
      this.form.last_education = "";
      this.form.address = "";
      this.form.handphone === "";
      this.form.referral_code = "";
      this.form.program = "";
      this.form.batch = "";
      this.form.payment_method = "";
      (this.cardButtonPembayaranSelected = null), (this.inputIsValid = false);
    },
    notConfirmForm() {
      this.inputIsValid = false;
    },
  },
};
</script>

<style scoped>
.form-confirmation h5 {
  display: inline-block;
  font-size: 1rem;
  font-weight: bold;
}

.form-confirmation p {
  display: inline-block;
  font-size: 1rem;
}

#back-button {
  padding: 5px 10px;
  height: 40px;
  border-radius: 100px;
  font-weight: 700;
  border: 1px solid green;
  background-color: green;
  box-shadow: 0px 3px 30px #0000000d;
  text-transform: capitalize;
  font-size: 12px;
  color: #fff;
}

#submit-button {
  padding: 5px 10px;
  height: 40px;
  border-radius: 100px;
  font-weight: 700;
  border: 1px solid green;
  background-color: green;
  box-shadow: 0px 3px 30px #0000000d;
  text-transform: capitalize;
  font-size: 12px;
  color: #fff;
}

.card {
  text-align: left;
  width: 60%;
  margin: auto;
  padding: 2rem 2.5rem;
  border-radius: 15px;
}

.title {
  font-weight: bold;
  color: black;
}

.card h2 {
  color: #383838;
  font-weight: 700;
  font-size: 18px;
}

.card label {
  font-size: 14px;
}

.card select,
.card input,
.card textarea {
  padding: 8px 12px;
  border: 0.5px solid #e1e1e1;
  border-radius: 8px;
  background-color: #f8f8f8;
  font-size: 14px;
}

.card-button {
  box-shadow: rgb(0 0 0 / 8%) 0px 1px 4px;
  border: 2px solid transparent;
  border-radius: 12px;
  background-color: rgb(255, 253, 253);
  cursor: pointer;
  transition: all 0.2s ease-in-out 0s;
  overflow: hidden;
  padding: 1rem;
}

.card-button span {
  font-weight: 600;
  font-size: 14px;
}

.card-button p {
  font-size: 14px;
}

.cicilan {
  background: #dddddd;
}

.cardButtonActive {
  border: 2px solid green;
}

.cardButtonActive p:first-of-type {
  color: green;
  font-weight: 700;
}

.cardButtonActive span {
  color: green;
  font-weight: 700;
}

.card button {
  padding: 5px 10px;
  height: 40px;
  border-radius: 100px;
  font-weight: 700;
  border: 1px solid green;
  background-color: green;
  box-shadow: 0px 3px 30px #0000000d;
  text-transform: capitalize;
  font-size: 12px;
  color: #fff;
}

.invalid input {
  border-color: red;
}

.invalid label {
  color: red;
}
</style>