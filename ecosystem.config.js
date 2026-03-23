module.exports = {
  apps : [
      {
        name   : "customer-service",
        script : "java -jar ./customer-service/target/Customer-Service-1.0.0.jar ",
        instances : 2
      },
      {
        name   : "order-service",
        script : "java -jar ./order-service/target/Order-Service-1.0.0.jar ",
        instances : 2
      }
  ]
}
