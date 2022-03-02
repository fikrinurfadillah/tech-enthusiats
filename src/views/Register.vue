<template>
  <div>
    <NavBar />
    <h1 class="mt-5 mb-3 title">Register</h1>
    <div class="card">
      <form @submit.prevent="submitForm">
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
              <select class="form-control" id="pilih-program" v-model="person.program">
                
                  <option value disabled>Pilih Program</option>
                  <option v-if="cardButtonProgramSelected === 'bootcamp'">Full Stack JavaScript</option>
                  <!-- <option>2</option>
                  <option>3</option>
                  <option>4</option> -->

                  <option v-if="cardButtonProgramSelected === 'professionalDev'">KOTLIN Android Develper</option>
                  <!-- <option>2</option>
                  <option>3</option>
                  <option>4</option>                 -->
                
              </select>
            </div>
            <div class="col-lg-6 col-md-6 col-lg-6">
              <label for="pilih-batch">Pilih Batch</label>
              <select class="form-control" id="pilih-batch" v-model="person.batch">
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
                :value="person.metodePembayaran"
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
                :value="person.metodePembayaran"
              >
                <span>Cicilan</span>
              </div>
            </div>
            <!-- <div class="col-lg-4 col-md-4 col-sm-4">
              <div
                class="card-button"
                role="button"
                @click="selectedCardPembayaran('isa')"
                :class="{
                  cardButtonActive: cardButtonPembayaranSelected === 'isa',
                }"
              >
                <span>ISA</span>
              </div>
            </div> -->
          </div>
        </div>
        <div class="form-group mt-4">
          <h2>Tentang Calon Siswa</h2>
          <div class="row mt-2">
            <div class="col-lg-6 col-md-6 col-sm-6">
              <label for="firstName">Nama Depan</label>
              <input
                type="text"
                placeholder="Nama Depan"
                id="firstName"
                class="form-control"
                v-model="person.firstName"
              />
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6">
              <label for="lastName">Nama Belakang</label>
              <input
                type="text"
                placeholder="Nama Belakang"
                id="lastName"
                class="form-control"
                v-model="person.lastName"
              />
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-lg-12 col-md-12 col-sm-12">
              <label for="enail">Email</label>
              <input
                type="email"
                placeholder="email"
                class="form-control"
                id="email"
                v-model="person.email"
              />
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-lg-6 col-md-6 col-sm-6">
              <label for="jenisKelamin">Jenis Kelamin</label>
              <select class="form-control" id="jenisKelamin" v-model="person.jenisKelamin">
                <option value disabled>Pilih Salah Satu</option>
                <option>Laki-Laki</option>
                <option>Perempuan</option>
              </select>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6">
              <label for="tanggalLahit">Tanggal Lahir</label>
              <input
                type="date"
                placeholder="dd/mm/yy"
                id="tanggalLahir"
                class="form-control"
                v-model="person.tanggalLahir"
              />
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-lg-12 col-md-12 col-sm-12">
              <label for="pendidikanTerakhir">Pendidikan Terakhir</label>
              <select class="form-control" id="pendidikanTerakhir" v-model="person.pendidikanTerakhir">
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
              <label for="alamatLengkap">Alamat Lengkap</label>
              <textarea
                id="alamatLengkap"
                cols="10"
                rows="5"
                class="form-control"
                placeholder="Alamat Lengkap Calon Siswa"
                v-model="person.alamatLengkap"
              ></textarea>
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-lg-12 col-md-12 col-sm-12">
              <label for="nomorHandphone">Nomor Handphone</label>
              <input
                type="number"
                class="form-control"
                placeholder="+62"
                id="nomorHandphone"
                v-model="person.nomorHandphone"
              />
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-lg-12 col-md-12 col-sm-12">
              <label for="kodeReferral">Kode Referral (Jika Ada)</label>
              <input
                type="text"
                class="form-control"
                placeholder="Kode Referal"
                id="kodeReferral"
                v-model="person.kodeReferral"
              />
            </div>
          </div>

          <button type="submit" class="mt-4">Kirim Formulir</button>
        </div>
        <!-- <div class="form-group">
          <label for="exampleFormControlInput1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">Example select</label>
          <select class="form-control" id="exampleFormControlSelect1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect2">Example multiple select</label>
          <select multiple class="form-control" id="exampleFormControlSelect2">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Example textarea</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div> -->
      </form>
    </div>
    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import axios from "axios";
export default {
  components: {
    NavBar,
    Footer,
  },
  data() {
    return {
      cardButtonProgramSelected: null,
      cardButtonPembayaranSelected: null,
      // id: null,
      // firstName: '',
      // lastName: '',
      person: {
        id: null,
        firstName: '',
        lastName: '',
        email: '',
        jenisKelamin: '',
        tanggalLahir: '',
        pendidikanTerakhir: '',
        alamatLengkap: '',
        nomorHandphone: '',
        program: '',
        kodeReferral: '',
        metodePembayaran: ''
      }
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

      this.person.metodePembayaran = this.cardButtonPembayaranSelected
      console.log(this.person.metodePembayaran);
    },
    submitForm() {
      // console.log('username: ' + this.firstName + ' ' + this.lastName)
      this.person.id += 1;

      let person = {
        id: this.person.id,
        nama_depan: this.person.firstName,
        nama_belakang: this.person.lastName,
        email: this.person.email,
        tanggal_lahir: this.person.tanggalLahir,
        jenis_kelamin: this.person.jenisKelamin,
        pendidikan: this.person.pendidikanTerakhir,
        alamat: this.person.alamatLengkap,
        no_handphone: this.person.nomorHandphone,
        program_yang_dipilih: this.person.program,
        batch: this.person.batch,
        kode_referral: this.person.kodeReferral,
        metode_pembayaran: this.person.metodePembayaran
      }

      let savePerson = {
        data: [
          person
        ]
      }

      axios.post('http://localhost:8080/api/v1/53kzawawvhit9', savePerson)
      .catch(error => {
        console.log(error)
        this.error = 'Something went wrong - try again later!'
      })
      // fetch('http://sheetdb.io/api/v1/53kzawawvhit9', {
      //   method: 'POST',
      //   headers: {
      //     'Content-type': 'application/data'
      //   },
      //   body: {
      //     savePerson
      //   }
      // })
    }
  },
  mounted() {
    axios.get('http://localhost:8080/api/v1/53kzawawvhit9/count').then((response) =>{
      // this.id = response.data.rows
      
      console.log(response.data.rows)
    })
    axios.get('http://localhost:8080/api/v1/53kzawawvhit9').then((response) =>{
      // this.id = response.data.rows
      
      console.log(response.data)
    })

    // console.log(this.id)
  }
};
</script>

<style scoped>
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


</style>