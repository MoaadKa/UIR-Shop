export interface Product {
    idProduct: number
    nomProduct: any
    description: string
    reference: string
    prixProduct: number
    quantity: number
    category: Category
    supplier: Supplier
    etiquettes: any[]
    varieties: Variety[]
    imgs: string[]
  }
  
  export interface Category {
    idCategory: number
    nomCategory: string
  }
  
  export interface Supplier {
    idSupplier: number
    nomSupplier: string
    mail: string
    rib: string
    phoneNumber: string
  }
  
  export interface Variety {
    idVariety: number
    varietyName: string
    varietyValue: string
    quantity: number
  }
  