# CORS
Variable	    Description	                                    Default Value
CORS_ENABLED	Whether or not to enable the CORS headers.	    false
CORS_ORIGIN 	Value for the Access-Control-Allow-Origin header. 
                Use true to match the Origin header, or 
                provide a domain or a CSV of domains for 
                specific access	                                false
CORS_METHODS	Value for the Access-Control-Allow-Methods
                header.	                                        GET,POST,PATCH,DELETE
CORS_ALLOWED_HEADERS	Value for the Access-Control-Allow-Headers 
                header.	                                        Content-Type,Authorization
CORS_EXPOSED_HEADERS	Value for the Access-Control-Expose-Headers 
                header.	                                        Content-Range
CORS_CREDENTIALS	Whether or not to send the 
                Access-Control-Allow-Credentials header.	    true
CORS_MAX_AGE	Value for the Access-Control-Max-Age header.	18000