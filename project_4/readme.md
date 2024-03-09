# Go Online Shop

This is a Go project for managing products using the Echo framework.

## Getting Started

### Prerequisites
- Go (v1.18 or later)
- Echo framework

### Installation
1. Clone the repository:

    ```bash
    git clone <repository-url>
    ```

2. Navigate to the project directory:

    ```bash
    cd project_4
    ```

3. Install dependencies:

    ```bash
    go mod tidy
    ```

4. Build the project:

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
