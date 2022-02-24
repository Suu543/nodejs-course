# HTTP

1. Localhost는 무엇인가?
2. HTTP는 어떻게 동작하는가?
3. HTTP 서버를 만들 때 Localhost는 어떤 의미를 가지는가?
4. HTTP Header + Body의 구조는 어떤가?
5. HTTP Port 번호는 어떤 의미를 가지는가?

## What is localhost?

`Computer Networking`에서 `Localhost`는 이 자기 자신의 컴퓨터를 의미한다. `Localhost`는 `loopback address network`를 사용해 현재 사용중인 컴퓨터에 연결시 기본값으로 설정되는 이름이다. 

`Loopback address`는 기본값으로 (127.0.0.1) IP 값을 가진다. 이 IP 주소를 사용하면 인터넷 혹은 브라우저에 별도로 요청을 보내지 않아도된다. 현재 사용중인 컴퓨터가 화면 + 서버 역할을 동시에 해준다. 이 방식은 인터넷에 호스팅 하기에 준비되지 않은 앱을 테스트하는데 유용하게 사용할 수 있다.

## What is 127.0.0.1 and a loopback address?

IP 주소처럼, `google.com`을 브라우저에 입력하면,

`google.com` ==> `google IP 주소로 변환` ==> `.com 도메인을 다루는 라우터에 전달` ==> `google 홈페이지 정보를 가져옴` ==> `현재 사용  중인 컴퓨터에 구글 홈페이지 출력`

다른 웹사이트 도메인처럼, `Localhost` 또한 IP 주소를 가지고 있다. 이 주소는 `127.0.0.0` ~ `127.255.255.255`중 하나가 될 수 있다. 하지만 일반적으로 `127.0.0.1`이 할당된다. `IPv4` 연결에서  `127.0.0.1` 주소에 연결을 시도하면 `loopback (현재 사용 중인 컴퓨터를 서버로 간주함)`이 발생한다.

IP 주소의 `127`은 `Loopback`의 목적으로 할당된다. `TCP/IP`는 `127`을 확인하고, 현재 사용 중인 컴퓨터에 연결하고 싶음을 인지한다. 이러한 이유 때문에 테스트 목적으로 사용하는 자신의 컴퓨터를 제외하고, 다른 호스팅된 웹사이트의 IP 주소가 `127`로 시작하지 않는 이유다.

## What is localhost used for?

`Localhost`를 간단하게 언급했지만, `loopback`은 세 가지의 장점을 제공한다.

1. **Program or Web Application Test**

- Localhost는 주로 개발자들이 사용한다. 특히 웹과 관련한 앱이나 프로그램처럼 인터넷 연결을 요하는 경우에 유용하게 사용할 수 있다. 현재 사용 중인 컴퓨터에서 동작하기 때문에, 해당 컴퓨터에 존재하는 여러 파일 혹은 프로그램을 이용할 수 있다.

2. **Site Blocking**

- Loopback을 이용함으로써, 당신이 접속하길 원하지 않는 웹사이트의 접속을 차단할 수 있다. 

3. **Speed Test**

- 네트워크 관리자로써, TCP/IP, 여러 장비 등이 잘 동작함을 확인할 수 있다. 
  - 서버와 정상적으로 연결되었는가?
  - localhost에 ping 요청을 정상적으로 보냈는가?
- Cmd 혹은 Terminal을 열어서 `ping localhost` or `ping 127.0.0.1`을 입력하면 테스트를 진행할 수 있다. `Localhost Test`는 (보냄, 받음, 손실) 데이터 패킷의 숫자로부터 모든 것이 정상적으로 수행되고 있는지를 보여준다.

## HTTP는 어떻게 동작하는가?

HTTP는 TCP/IP 프로토콜 중 하나다. HTTP는 WWW(World Wide Web)를 동작하게 만드는 큰 축 중에 하나다. `Remote Server`와 `Host Web Page` 사이의 통신을 가능하게 해준다. HTTP was first standardized in 1991, as a result of the work that Tim Berners-Lee did at CERN, the European Center of Nuclear Research, since 1989. HTTP는 초기에 대학에서 논문에 명시된 링크(Hyperlinks)를 쉽게 교환하고 접근하기 위해 구현됐다. 인터넷은 초기에 FTP(the File Transfer Protocol), Email and Usenet (newsgroups, 오늘날 거의 버려짐)에 의해 동작했다.

하나만 기억하자, HTTP는 떨어져 있는 서버 간의 의사소통의 목적으로 구현되었다. 



1. 브라우저에 URL을 입력하고, 엔터를 누르면, 내부에는 요청을 보낸 IP 주소로 요청을 보낸다.

```
GET /a-page
```

2. HTTP Method(Verb)를 확인한다

- GET
- POST
- DELETE
- PUT
- 등

3. HTTP Headers를 구성한다

- Header는 Key: Value 방식으로 구성된다. 이 정보를 통해 서버는 사전에 정의된 요청에 관한 세부사항을 파악한다.
  - 원하는 파일 타입 등
  - https://flaviocopes.com/http-request-headers/

## HTTP Client/Server Communication

HTTP는 `Stateless Protocol`이다.

서버는 현재 클라이언트가 어떤 상태에 있는지 알 수 없고, 관심도 없다. 서버가 관심있는 것은 요청을 받았고, 그 요청을 이행했는지에 대한 여부다. 

이런 맥락에서 이전 요청은 의미가 없고, 이를 통해 웹 서비시는 처리 시간이 줄어들기 때문에 속도가 매우 빠르며, 동시에 많은 요청을 처리할 수 있는 대역폭을 제공할 수 있다.

HTTP는 또한 크기가 작고, 오버헤드 측면에서 통신 속도가 매우 빠르다. 이는 HTTP가 도입되었을 때 가장 많이 사용되었던 프로토콜과 대조된다 (TCP / POP/ SMPT). 이전의 프로토콜은 수신부에서 많은 검증 절차가 발생해 HTTP와 같은 방식으로 요청을 처리할 수 없었다.



메세지는 HTTP Method로 시작한 다음 리소스 상대 경로와 프로토콜 버전을 포함하는 행으로 구성된다.

```
GET /a-page HTTP/1.1
```

그런 다음 HTTP 요청 헤더를 추가해야 한다. 위에서 언급한 것처럼 헤더는 많지는 필수 헤더는 `Host`다.

```
GET /a-page HTTP/1.1
Host: flaviocopes.com
```

아래와 같이 작성하면 간단하게 결과를 확인할 수 있다.

- `-i` include protocol response headers in output

```
curl -i https://flaviocopes.com/axios
```

**Output**

```
HTTP/1.1 301 Moved Permanently
Cache-Control: public, max-age=0, must-revalidate
Content-Type: text/html; charset=UTF-8
Date: Mon, 12 Apr 2021 09:45:17 GMT
Etag: "dc43f8f649a97629bdbed75682056f50-ssl"
Strict-Transport-Security: max-age=31536000
Age: 0
Transfer-Encoding: chunked
Connection: keep-alive
Server: Netlify

Redirecting to https://flaviocopes.com/axios/

<!DOCTYPE html>
<html prefix="og: http://ogp.me/ns#" lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>HTTP requests using Axios</title>
....
```

서버에서 받은 HTTP 응답이 301 (Moved Permanently) 인 것을 확인할 수 있다. 이것은 기본적으로 리소스가 다른 위치로 영구적으로 이동되었음을 알려준다.

그 이유는 HTTP의 기본 포트 80에 연결되었지만, 서버에서 HTTPS로 자동 리다이렉션을 설정했기 때문이다. 새 위치는 HTTP 응답 헤더에 지정된다.  요청과 응답 모두에서 빈 행은 Request Header & Request Body를 구분한다. HTTP 서버는 HTML 파일만 전송하는 것이 아니라, 일반적으로 CSS, JS, SVG, PNG, JPG 등 다양한 파일도 제공한다. 이것은 구성에 따라 달라진다. 어떤 파일을 전달하든, 파일 형식을 명시해 주면 브라우저는 그것에 맞게 파일을 해석한다. 이것이 바로 웹이 동작하는 방식이다. 브라우저에서 HTML 페이지를 검색할 때 해석되며, 속성을 표시하는 데 필요한 다른 리소스도 해석되고, 필요에 따라 추가 요청을 보낸다.

## HTTP Port 번호는 어떤 의미를 가지는가?

HTTP 요청을 생성할 때, IP 주소 혹은 Port 번호를 이용한다.

**What is a port, exactly?**

Port는 여러 앱들이 동일한 컴퓨터 혹은 프로토콜에서 응답할 수 있도록 하기 위해 도입된 기술이다.

예를 들면, 내 컴퓨터에서 하나의 웹 서비스가 동작하고 있는 중인데, 이 상태에서 두번째 웹 서비스를 동작시키고 싶은 경우, 다른 port를 이용할 수 있다.

첫 번째 서비스는 HTTP 프로토콜에서 기본값으로 사용하는 웹 서버인 80번 포트를 사용하고 있다면, 두번째 웹 서비스는 이미 사용된 80번 포트를 제외하고, 81, 82, 8080, etc 포트를 이용해 서비스를 동작시킬 수 있다.

**Tips:** 

	- HTTP: 80
	- HTTPS: 443

모든 프로토콜은 서로 다른 기본 포트를 가지고 있다. 하지만 해당 프로토콜을 사용한다고 해서 꼭 기본 포트를 사용해야하는 것은 아니다. 1 ~ 65535 (16bits unsigned = 2^16) 중 사용되지 않는 포트를 사용하면된다.

아래 링크에서 각 프로토콜마다 기본값으로 설정된 포트 번호를 확인할 수 있다. 

https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers

Between the protocols User Datagram Protocol (UDP) and Transmission Control Protocol (TCP), there are **65,535** ports available for communication between devices. Among this impressive number are three classes of ports:

1. Ports 0 through 1023 are considered well-known ports. There ports are used for specific network services and should be considered the only ports allowed to transmit traffic through a firewall.
2. User Ports range from 1024 to 49,151
3. Dynamic/Private ports range from 49,152 to 65,535

https://www.sciencedirect.com/topics/computer-science/registered-port#:~:text=Between%20the%20protocols%20User%20Datagram,ports%3A%20Range%20from%200%E2%80%931%2C023

https://flaviocopes.com/http/













