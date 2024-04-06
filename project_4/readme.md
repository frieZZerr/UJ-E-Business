# Go Online Shop

This is a Go project for managing products using the Echo framework.

## Getting Started

### Prerequisites
- Go (v1.18 or later)
- Echo framework

### Installation
1. Navigate to the project directory:

    ```bash
    cd project_4
    ```

2. Install dependencies:

    ```bash
    go mod tidy
    ```

3. Build the project:

    ```bash
    go build
    ```

## Usage
1. Run the compiled binary:

    ```bash
    ./project_4
    ```

2. Access the endpoints to manage products:

    - GET /products: Retrieve all products
    - GET /products/:id: Retrieve a specific product by ID
    - POST /products: Create a new product
    - PUT /products/:id: Update an existing product
    - DELETE /products/:id: Delete a product by ID

3. Access the endpoints to manage carts:

    - GET /carts: Retrieve all carts
    - GET /carts/:id: Retrieve a specific cart by ID
    - POST /carts: Create a new cart
    - PUT /carts/:id: Update an existing cart
    - DELETE /carts/:id: Delete a cart by ID

4. Access the endpoints to manage categories:

    - GET /categories: Retrieve all categories
    - GET /categories/:id: Retrieve a specific category by ID
    - POST /categories: Create a new category
    - PUT /categories/:id: Update an existing category
    - DELETE /categories/:id: Delete a category by ID
