/*! PILab 18-04-2021 */

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var ParamsModel=function(){function a(){this.rooms_is=!1,this.rooms="",this.buildtype_is=!1,this.buildtype="",this.floor_is=!1,this.floor="",this.square_is=!1,this.square_str="",this.square_err="",this.square=0,this.state_is=!1,this.rooms_dict={0:["Укажите количество комнат","",!0],1:["1-но однокомнатная","1r",!1],2:["2-х комнатная","2r",!1],3:["3-х комнатная","3r",!1],4:["4-х и более комнатная","4r",!1]},this.buildtype_dict={0:["Выберите тип дома","",!0],1:['"гостинка" - все квартры в доме однокомнатные',"hot",!1],2:['"сталинки" и прочие дома постройки до ~1958 года',"sta",!1],3:['дома 60-х годов постройки типа "хрущёвка" (5 этажей)',"hru",!1],4:['"чешка" и прочие дома 60-70-х годов постройки (8-10 этажей)',"che",!1],5:["дома улучшенной планировки 70-80-х годов постройки (СОВМИН и пр. ведомственные дома)","80y",!1],6:["серийные дома позднего массового советского домостроения (сери Т, КТ, КП, АППС, 96 и пр.)","ser",!1],7:["серийные дома улучшеной планировки 90-2000-х годов постройки (сери КТУ, АППС-Люкс и пр.)","90y",!1],8:["дома современной постройки после 2003-го года","mod",!1]},this.floor_dict={0:["Укажите этаж",""],1:["первый этаж","first"],2:["средний этаж","aver"],3:["последний этаж","last"],4:["пентхаусы в элитных домах","pent"]},this.state_dict={0:"Определите состояние квартиры по 10-ти бальной шкале",1:"0  : Требуется ремонт с заменой всех элементов отделки; Квартиры после пожара, затопления, длительного запущения; Квартиры в новых домах без перегородок (свободное планирование) и стяжки",2:"1  : Квартиры в новых домах с базовой строительной отделкой (черновая стяжка, перегородки, стеклопакеты); Убитые квартиры, в которых хоть один раз была выполнена финишная отделка",3:"2  : Квартиры в новых домах с улучшеной строительной отделкой (чистовая стяжка, штукатурка, базовые точки инженерных сетей)",4:"3  : Полностью изношенная отделка любого класса, но квартира может эксплуатироваться для проживания без немедленного ремонта",5:'4  : Б/у ремонт  класса "Эконом" или сильно изношенный ремонт класса "Стандарт"',6:'5  : Новый ремонт класса "Эконом" (элементы отделки выполнены из материалов  нижнего ценового диапазона); б/у ремонт класса "Стандарт" или сильно изношенный ремонт класса "Люкс" (без необходимости немедленного ремонта)',7:'6  : Новый ремонт класса "Стандарт" (элементы отделки выполнены из материалов хорошего качества среднего ценового диапазона); или б/у ремонт класса "Люкс"; или сильно изношенный ремонт "Люкс" с бытовой техникой; или сильно изношенный ремонт класса "VIP" без бытовой техники',8:'7  : Новый ремонт класса "Люкс" (элементы отделки выполнены из импортных материалов высокого ценового диапазона с высоким качеством строительных работ); или новый ремонт класса "Стандарт" + встроенная бытовая техника (стиральныая машина, вытяжка,кондиционеры/посудомоечная машина); или б/у ремонт класса "Люкс" + техника; или сильно изношенный ремонт "VIP" + техника',9:'8  : Новый ремонт класса "Люкс" + техника (стиральныая машина, вытяжка, посудомоечная машина, система видеонаблюдения, встроенные телевизоры); или б/у ремонт класса "VIP" с техникой',10:'9  : Новый ремонт класса "VIP" (элементы отделки выполнены из импортных материалов элитного ценового диапазона с максимальным качеством строительных работ + авторский дизайн)',11:'10 : Новый ремонт класса "VIP" + техника (стиральныая машина, вытяжка, посудомоечная машина, система видеонаблюдения, встроенные телевизоры и др.)'},this.typeSqrRanges=[[22,10,44],[25.5,10,44],[30,10,44],[34.5,10,44],[38,25,56],[30,25,41],[33,25,41],[35,25,46],[39,25,59],[38,29,61],[52,29,91],[52,37,79],[47,33,59],[48,33,64],[50,41,71],[52,44,64],[63,44,89],[70,44,121],[70,44,121],[58,41,84],[60,44,89],[70,56,109],[72,58,121],[80,67,154],[100,67,350],[85,72,450],[82,67,154],[95,67,154],[95,74,350],[120,79,1e3]],this.typesnumeric={sta:0,hru:1,che:2,"80y":3,ser:4,"90y":5,mod:6}}return a.prototype.getRoomTypeRange=function(){var a=this.getTypeIndex();return{min:this.typeSqrRanges[a][1],max:this.typeSqrRanges[a][2]}},a.prototype.getRoomTypeAverage=function(){if(0!==this.getTypeIndex())return this.typeSqrRanges[this.getTypeIndex()][0]},a.prototype.getTypeIndex=function(){var a,b=this;if("hot"===b.buildtype&&"1r"!==b.rooms)return alert('"гостинка" не может иметь 2-е и более комнат - выберите другой тип квартиры'),0;if("hru"===b.buildtype&&"4r"===b.rooms)return alert('"хрущёвки" имеют  максимум 3 комнаты - выберите другой тип квартиры'),0;if("che"===b.buildtype&&"4r"===b.rooms)return alert('"чешки" имеют максимум 3 комнаты - выберите другой тип квартиры'),0;if("hot"===b.buildtype)return a=b.square<24?0:b.square>=24&&b.square<28?1:b.square>=28&&b.square<33?2:3;"1r"===b.rooms&&(a=4),"2r"===b.rooms&&(a=11),"3r"===b.rooms&&(a=18),"4r"===b.rooms&&(a=25);var c=this.typesnumeric[b.buildtype];return"4r"===b.rooms&&c>2&&(c-=2),a+=c},a.prototype.validateSqrRange=function(){if(this.rooms_is&&this.buildtype_is){var a=this.getRoomTypeRange();this.square>=a.min&&this.square<=a.max?(this.square_is=!0,this.square_err=""):(this.square_is=!1,this.square_err="*Для выбранного типа дома и количества комнат значение площади должно быть в диапазоне "+a.min+"-"+a.max+" кв.м")}else this.square_is=!1,this.square_err=""},a.prototype.schemaTypeRooms=function(){"1r"!==this.rooms?this.buildtype_dict[1][2]=!0:this.buildtype_dict[1][2]=!1,"4r"===this.rooms?(this.buildtype_dict[3][2]=!0,this.buildtype_dict[4][2]=!0):(this.buildtype_dict[3][2]=!1,this.buildtype_dict[4][2]=!1),"hot"===this.buildtype?(this.rooms_dict[2][2]=!0,this.rooms_dict[3][2]=!0,this.rooms_dict[4][2]=!0):(this.rooms_dict[2][2]=!1,this.rooms_dict[3][2]=!1,this.rooms_dict[4][2]=!1),"che"===this.buildtype||"hru"===this.buildtype?this.rooms_dict[4][2]=!0:"hot"!==this.buildtype&&(this.rooms_dict[4][2]=!1)},a}();exports.ParamsModel=ParamsModel;