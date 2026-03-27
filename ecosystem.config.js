module.exports = {
  apps : [
      {
          name:"cloud-sql-auth-proxy",
          script: "./cloud-sql-proxy dilini:asia-southeast1:db-logistic --private-ip",
          log_file: "./logs/cloud-sql-auth-proxy.log"
      },
      {
          name   : "customer-service",
          script : "java -jar ./customer-service/target/Customer-Service-1.0.0.jar ",
          log_file: "./logs/customer-service.log",
          instances : 2
      },
      {
          name   : "order-service",
          script : "java -jar ./order-service/target/Order-Service-1.0.0.jar ",
          log_file: "./logs/order-service.log",
          instances : 2
      }
  ]
}
