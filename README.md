# nodejs-services-wallet-g3
carpeta principal en donde estaran contenidos los proyectos para proveer informacion a la wallet


Servicio NodeJs

Servicio financiero (Crypto)

EndPoints App


Consuma EndPoint de 3ros -> 1 o N

Primera vuelta 1 servicio!
Crypto -> valor de crypto, actual o dentro de una ventana de tiempo, restriccion de request a 3eros
							-> un valor en base, valor actual, tiene vida 1 hora
							-> llamar de manera syncrona al servicio de 3ero (problema) -> 1 solo servicio de 3ero
																						-> n servicios	
	   -> historial
	   -> cryptos aceptadas (no es un abm normal) -> manejar que cryptos quedan habilitadas


Valor dolar

Obten datos, servicio de 3eros:
	- Mediante Peticion			-> medicante cola de mensajes								-> 
	- Automatico, background	-> proceso automatico -> corre cada N tiempo (cada 30 min)
