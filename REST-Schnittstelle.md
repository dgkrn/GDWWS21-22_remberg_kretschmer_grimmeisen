
# Definition der REST Verben:  
|Verb|	Bedeutung|
|---|---|
|GET|	Rufe Information ab (Caching möglich)|
|PUT|	Aktualisiere oder Erzeuge Information zu einer bekannten Entität|
|POST|	Erstelle eine Entität, die einer bekannten Entität untergeordnet ist| 
|DELETE|Entferne eine Entität|

# Beisiegel der angewandten Definitionen:		

## /Route
|Verb|URI or template|Use|
|---|---|---|
|POST|/route|Create a new route, and upon success, receive a Location header specifying the new route URI.(Code 201)|
|GET |/route/{routeID}|	Request the current state of the route specified by the URI.|
|PUT |/route/{routeID}|Update a route at the given URI with new information, providing the full representation(Code 200/201)|
|DELETE|/route/{rotueID}|Logically remove the route identified by the given URI.(Code 200/204)|

## /User
|Verb	|URI or template|	Use|
|---|---|---|
|POST|/User|Create a new User, and upon success, receive a Location header specifying the new route URI.(Code 201)|
|GET|	/User/{UserID}|	Request the current state of the User specified by the URI.|
|PUT|	/User/{UserID}|	Update a User at the given URI with new information, providing the full representation (Code 200/201)|
|DELETE|/User/{UserID}|Logically remove the User identified by the given URI.(Code 200/204)|

## /Bewertung
|Verb|URI or template|Use|
|---|---|---|
|POST|/Bewertung|Create a new Rating, and upon success, receive a Location header specifying the new route URI.(Code 201)|
|GET|/Bewertung/{BewertungID}|Request the current state of the Rating specified by the URI.|
|PUT|/Bewertung/{BewertungID}|Update a Rating at the given URI with new information, providing the full representation (Code 200/201)|
|DELETE|/Bewertung/{BewertungID}|Logically remove the Rating dentified by the given URI.(Code 200/204)|



Die Haupt URI ist mit dem http Protokoll gesichert und kann unter https://www.xyz.de gefunden werden.
# Ressourcen
Die Primärressourcen bei uns sind /route, /User ,/Bewertung . Die Listenressourcen
sind ebenfalls /route ,/User, /Bewertung da sie viele Instanzen repräsentieren. Und werden  im Folgenden durch IDs spezifiziert.
Alle Path-Parameter befinden sich im URI-Bezeichner nach ".de" und sind durch einen Querstrich "/" voneinander getrennt. Sie dienen dazu die Ressource vollständig zu identifizieren. Sie beinhalten unter anderem Parameter wie die gegebene ID einer Strecke oder die ID eines Nutzers.
Beispiel: https://www.xyz.der/route/{id} 
Um auf die Daten der Route mit der ID zuzugreifen.
Die verwendeten Query-Parameter sind:	  sort→sortieren von z.B Bewertungen
						  page x→ angeben der aktuellen Seite
Rad→ ein Boolean ob die Strecke mit dem Rad unternommen wird    -

Es wird die Schemasprache XML angedacht.
# Alle Html Codes
|Complete list of HTTP Status Codes|Status code Meaning|
|---|------|
|1xx| Informational|
|---|------|
|100|Continue|
|101|Switching protocols|
|102|Processing|
|103|Early Hints|	 
|2xx|Succesful|
|---|------|
|200|OK|
|201|Created|
|202|Accepted|
|203|Non-Authoritative Information|
|204|No Content|
|205|Reset Content|
|206|Partial Content|
|207|Multi-Status|
|208|Already Reported|
|226|IM Used|
|3xx|Redirection|
|---|------|
|300|Multiple Choices|
|301|Moved Permanently|
|302|Found (Previously "Moved Temporarily")|
|303|See Other|
|304|Not Modified|
|305|Use Proxy|
|306|Switch Proxy|
|307|Temporary Redirect|
|308|Permanent Redirect|
|4xx|Client Error|
|---|------|
|400|Bad Request|
|401|Unauthorized|
|402|Payment Required|
|403|Forbidden|
|404|Not Found|
|405|Method Not Allowed|
|406|Not Acceptable|
|407|Proxy Authentication Required|
|408|Request Timeout|
|409|Conflict|
|410|Gone|
|411|Length Required|
|412|Precondition Failed|
|413|Payload Too Large|
|414|URI Too Long|
|415|Unsupported Media Type|
|416|Range Not Satisfiable|
|417|Expectation Failed|
|418|I'm a Teapot|
|421|Misdirected Request|
|422|Unprocessable Entity|
|423|Locked|
|424|Failed Dependency|
|425|Too Early|
|426|Upgrade Required|
|428|Precondition Required|
|429|Too Many Requests|
|431|Request Header Fields Too Large|
|451|Unavailable For Legal Reasons|
|5xx Server Error|
|---|------| 
|500|Internal Server Error|
|501|Not Implemented|
|502|Bad Gateway|
|503|Service Unavailable|
|504|Gateway Timeout|
|505|HTTP Version Not Supported|
|506|Variant Also Negotiates|
|507|Insufficient Storage|
|508|Loop Detected|
|510|Not Extended|
|511|Network Authentication Required|

 

