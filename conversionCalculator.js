const numberType = { // Value Object
                                decimal : "",
                                binary : "",
                                octal : "",
                                hexdecimal : ""
                        }
                        const Operator = {
                                numberChanger: function( changeType, decimal ) {
                                        const changerValue = {
                                                temp : Number(decimal),
                                                eachDigit : "",
                                                result : "",
                                        }

                                        while(changerValue.temp > 0) {
                                                changerValue.eachDigit = String( changerValue.temp % changeType );
                                                if (changeType == 16 && Number(changerValue.eachDigit) > 9) {
                                                        switch (changerValue.eachDigit) {
                                                                case "10":
                                                                        changerValue.eachDigit = "A";
                                                                        break;
                                                                case "11":
                                                                        changerValue.eachDigit = "B";
                                                                        break;
                                                                case "12":
                                                                        changerValue.eachDigit = "C";
                                                                        break;
                                                                case "13":
                                                                        changerValue.eachDigit = "D";
                                                                        break;
                                                                case "14":
                                                                        changerValue.eachDigit = "E";
                                                                        break;
                                                                case "15":
                                                                        changerValue.eachDigit = "F";
                                                                        break;
                                                        }
                                                }

                                                changerValue.result = changerValue.eachDigit + changerValue.result;
                                                changerValue.temp = Math.floor( changerValue.temp / changeType );
                                        } // end while
                                        return changerValue.result;
                                },
                                ChangeNumber: function( num ) {
                                        numberType.binary = this.numberChanger( 2, num );
                                        numberType.octal = this.numberChanger( 8, num );
                                        numberType.hexdecimal = this.numberChanger( 16, num );
                                }
                        }

                        numberType.decimal = prompt("10진수를 입력하세요.");

                        Operator.ChangeNumber( Number(numberType.decimal) );

                        document.write("Binary : " + numberType.binary + "<sub>2</sub><br>");
                        document.write("Octal : " + numberType.octal + "<sub>8</sub><br>");
                        document.write("Hexdecimal : " + numberType.hexdecimal + "<sub>16</sub><br>");
