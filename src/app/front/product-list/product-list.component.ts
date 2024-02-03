import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/Product';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productList: any[] = [
    {
      idProduct: 101,
      nomProduct: "UltraHD 4K Smart TV",
      description: "43-inch UltraHD Smart TV with 4K resolution, HDR, and smart streaming capabilities.",
      reference: "UHD4KTV43",
      prixProduct: 399.99,
      category: { id: 1, name: "Electronics" },
      supplier: { id: 201, name: "TechGiant Electronics" },
      varieties: [
          { id: 301, name: "43 inch" },
          { id: 302, name: "50 inch" }
      ],
      imgs: ["img/tv1.jpg", "img/tv2.jpg"],
      quantity: 150
  },
  {
      idProduct: 102,
      nomProduct: "Bluetooth Headphones",
      description: "Noise-cancelling over-ear Bluetooth headphones with 20-hour battery life.",
      reference: "BTHP2024",
      prixProduct: 89.99,
      category: { id: 2, name: "Audio" },
      supplier: { id: 202, name: "SoundMaster" },
      varieties: [
          { id: 303, name: "Black" },
          { id: 304, name: "White" }
      ],
      imgs: ["img/headphone1.jpg", "img/headphone2.jpg"],
      quantity: 200
  },
  {
      idProduct: 103,
      nomProduct: "Running Shoes",
      description: "Lightweight and durable running shoes with advanced cushioning technology.",
      reference: "RUNFAST1000",
      prixProduct: 120.00,
      category: { id: 3, name: "Sportswear" },
      supplier: { id: 203, name: "FastTrack Sports" },
      varieties: [
          { id: 305, name: "Size 9" },
          { id: 306, name: "Size 10" }
      ],
      imgs: ["img/shoe1.jpg", "img/shoe2.jpg"],
      quantity: 80
  },
  {
      idProduct: 104,
      nomProduct: "Stainless Steel Water Bottle",
      description: "Insulated stainless steel water bottle, 1L capacity, keeps drinks cold for 24 hours.",
      reference: "SSWB1001",
      prixProduct: 25.99,
      category: { id: 4, name: "Outdoor" },
      supplier: { id: 204, name: "EcoBottles" },
      varieties: [
          { id: 307, name: "Blue" },
          { id: 308, name: "Green" }
      ],
      imgs: ["img/bottle1.jpg", "img/bottle2.jpg"],
      quantity: 300
  },
  {
      idProduct: 105,
      nomProduct: "Organic Green Tea",
      description: "Premium organic green tea, rich in antioxidants, 100 tea bags.",
      reference: "ORGTEA2024",
      prixProduct: 15.99,
      category: { id: 5, name: "Beverages" },
      supplier: { id: 205, name: "Healthy Brews" },
      varieties: [
          { id: 309, name: "Regular" },
          { id: 310, name: "Lemon Flavor" }
      ],
      imgs: ["img/tea1.jpg", "img/tea2.jpg"],
      quantity: 500
  }
  ];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    // this.productService.fetchProducts().subscribe(
    //   data => this.productList = data
    // )
  
  }

}
