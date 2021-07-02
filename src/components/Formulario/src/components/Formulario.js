
export default {
    name: "src-componentes-formulario",
    components: {},
    props: [],
    
    data() {
      return {
        formData: this.getInicialData(),
        formState: {},
        nombreLengthMin: 3,
        nombreLengthMax: 15,
        importeMin: 0,
        gastos: [],
        gastoTotal: 0,
        colorDeFondo : this.colorCondicional(),
        gastoBajo: 1000,
        gastoMedio: 5000,
        gastoAlto: 5001,
        presupuesto: 10000,
      };
    },
    computed: {},
    mounted() {},
    methods: {
      getInicialData() {
        return {
          nombre: "",
          descripcion: "",
          gasto: "",
        };
      },
  
      enviar() {
        console.log({ ...this.formData });
        this.formState._reset();
        this.insertarGasto({...this.formData});
        this.formData = this.getInicialData();
      },
      
      

      insertarGasto(data){
          console.log(data)
          let gasto =  { 
              nombre: data.nombre,
              descripcion: data.descripcion,
              importe: data.importe,
              dia: this.obtenerFecha().getDay(),
              mes: this.obtenerFecha().getMonth(),
              anio: this.obtenerFecha().getFullYear(),
              horas: this.obtenerFecha().getHours(),
              minutos: this.obtenerFecha().getMinutes(),
              segundos: this.obtenerFecha().getMinutes(),
          }
          console.log(gasto.fecha)
          this.gastoTotal += gasto.importe
          this.gastos.push(gasto)

      },
      
      obtenerFecha(){
        var currentdate = new Date()
        return currentdate
      },

      getEstilos() {
        return {
          'background-color': this.colorDeFondo,
          color : this.gastoTotal >= this.presupuesto ? 'red' : 'white'
        }
      },

      colorCondicional() {
        var color;
        if (this.gastoTotal < this.gastoBajo) {
          color = 'green'
        } else if (this.gastoTotal < this.gastoAlto && this.gastoTotal >= this.gastoBajo ) {
          color = 'magenta'
        } else if (this.gastoTotal > this.gastoMedio) {
          color = 'orange'
        }
        return color
      },

      
      
    },
  };

