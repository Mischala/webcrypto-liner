# WebCrypto-Liner Browser Support
Each browser supports a different set of cryptographic algorithms and capabilities. WebCrypto-Liner tries to mask these differences with Javascript implementations of the various algorithms and datastructures. 

There are a few things to keep in mind:
- Wherever possible the native implementations are used,
- Some features, such as non-exportable keys, can not be implemented in Javascript,
- Size is a concern so although it is possible to implement some export formats we have decided not to,
- The Javascript implementation of algorithms is notably slower than their native counterparts,
- Lack of promise support on some browsersrequires promise polyfills which have their own issues.

### Safari
![image](https://cloud.githubusercontent.com/assets/1619279/20992128/0d0fe3e6-bc97-11e6-81c4-ed3a4697835c.png)

### Chrome
![image](https://cloud.githubusercontent.com/assets/1619279/20986888/57d8f1d2-bc7f-11e6-95a0-ac6a16231543.png)

### Firefox
![image](https://cloud.githubusercontent.com/assets/1619279/20987087/1bdf91ee-bc80-11e6-9030-812ef9048bbf.png)

### Edge
![image](https://cloud.githubusercontent.com/assets/1619279/20992080/bec8b898-bc96-11e6-97ec-33b9948c722b.png)
![image](https://cloud.githubusercontent.com/assets/1619279/20993104/097ff58a-bc9d-11e6-958a-16ffd7e053cc.png)

<sup>* The JS implementation is very slow on Edge for some reason, for this reason we broke the tests into two chunks for the purpose of this document. Hopefully when not running a barage of tests the performance issue wont be a problem for users of this library.</sup>

### IE