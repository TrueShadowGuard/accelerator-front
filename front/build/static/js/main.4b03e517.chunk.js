(this.webpackJsonpaccelerator=this.webpackJsonpaccelerator||[]).push([[0],{113:function(e,t,n){e.exports={number1:"counter_number1__3_i02",number2:"counter_number2__1HsCd",number3:"counter_number3__3-t1N",number4:"counter_number4__2i6Pc",number5:"counter_number5__3m9xw",number6:"counter_number6__1DS_H",number7:"counter_number7__uToA8",number8:"counter_number8__u82U4",number9:"counter_number9__1mRzl",number10:"counter_number10__1zHWZ",number11:"counter_number11__K6GOP",number12:"counter_number12__o5-th",number13:"counter_number13__2pi2k",number14:"counter_number14__dDZOn",number15:"counter_number15__2jIcS",number16:"counter_number16__iolzP",number17:"counter_number17__3zMIH",number18:"counter_number18__c9F3Q",number19:"counter_number19__38Hge",number20:"counter_number20__2F1Yl",round:"counter_round__3c_oL",gistogramm:"counter_gistogramm__2VgP-",resultContainer:"counter_resultContainer__27daI"}},136:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t),n.d(t,"DISULPHIDE_MAX_DISTANCE",(function(){return c})),n.d(t,"HYDROPHOBIC_AMINO_ACIDS",(function(){return i})),n.d(t,"HYDROPHOBIC_NON_ACCEPTABLE_CARBONS",(function(){return r})),n.d(t,"HYDROPHOBIC_MAX_DISTANCE",(function(){return a})),n.d(t,"POSITIVE_CHARGED_AMINO_ACIDS",(function(){return s})),n.d(t,"NEGATIVE_CHARGED_AMINO_ACIDS",(function(){return d})),n.d(t,"IONIC_MIN_DISTANCE",(function(){return l})),n.d(t,"IONIC_MAX_DISTANCE",(function(){return j})),n.d(t,"ARYL_AMINO_ACIDS",(function(){return o})),n.d(t,"AR_AR_MIN_DISTANCE",(function(){return b})),n.d(t,"AR_AR_MAX_DISTANCE",(function(){return u})),n.d(t,"AR_CATION_MAX_DISTANCE",(function(){return O})),n.d(t,"AR_SULPHUR_MAX_DISTANCE",(function(){return h})),n.d(t,"distance",(function(){return x})),n.d(t,"centerOfAromaticRingOf",(function(){return m}));var c=Math.pow(2.2,1),i=["ALA","VAL","LEU","ILE","MET","PHE","TRP","PRO","TYR"],r=["C","CA"],a=Math.pow(5,1),s=["ARG","LYS","HIS"],d=["ASP","GLU"],l=Math.pow(3.5,1),j=Math.pow(6,1),o=["PHE","TYR","TRP"],b=Math.pow(3.5,1),u=Math.pow(7,1),O=6,h=5.3;function x(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2)+Math.pow(e.z-t.z,2))}function m(e){var t,n;switch(e[0].aminoAcidName){case"PHE":case"TYR":return t=e.find((function(e){return"CG"===e.atomName})),n=e.find((function(e){return"CZ"===e.atomName})),{x:(t.x+n.x)/2,y:(t.y+n.y)/2,z:(t.z+n.z)/2};case"TRP":return t=e.find((function(e){return"CD2"===e.atomName})),n=e.find((function(e){return"CH2"===e.atomName})),{x:(t.x+n.x)/2,y:(t.y+n.y)/2,z:(t.z+n.z)/2};default:console.error("NOT AROMATIC")}}window.distance=x},164:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),r=n(41),a=n.n(r),s=(n(135),n(136),n(50)),d=n(228),l=n(229),j=n(231),o=n(232),b=n(0),u=function(){return Object(b.jsx)(d.a,{sx:{flexGrow:1},children:Object(b.jsx)(l.a,{position:"static",children:Object(b.jsxs)(j.a,{children:[Object(b.jsx)(d.a,{sx:{flexGrow:1,"& a":{color:"#fff",textDecoration:"none",fontSize:"2rem","&:hover":{color:"primary.light"}}},children:Object(b.jsxs)(d.a,{children:[Object(b.jsx)(s.b,{to:"/",children:"Accelerator"}),Object(b.jsx)(d.a,{as:"span",sx:{position:"relative",bottom:"-3px",color:"#ddd"},children:"v 1.0.1"})]})}),Object(b.jsx)(o.a,{color:"inherit",children:"Login"})]})})})},O=n(20),h=n(91),x=n.n(h),m={"& a":{textDecoration:"none"}},f=function(e){var t=e.to,n=e.text,c=e.disabled;return Object(b.jsx)(d.a,{sx:m,children:c?Object(b.jsx)(o.a,{variant:"outlined",disabled:!0,children:n}):Object(b.jsx)(s.b,{to:t,children:Object(b.jsx)(o.a,{variant:"outlined",children:n})})})},v=n.p+"static/media/planet.5c6e7a8f.jpg",p=function(){return Object(b.jsxs)("div",{className:x.a.home,children:[Object(b.jsx)("div",{className:x.a.planets,children:Object(b.jsx)("img",{src:v,alt:""})}),Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col-md-4",children:[Object(b.jsx)("h2",{children:"Accelerator"}),Object(b.jsx)("p",{children:"Increases the speed of processing PDB files. It computes the length between the desired ligand and the nearest atom. As a result, we have a list of binding sites and long links."}),Object(b.jsx)(f,{to:"/accelerator",text:"Accelerate up"})]}),Object(b.jsxs)("div",{className:"col-md-4",children:[Object(b.jsx)("h2",{children:"Counter"}),Object(b.jsx)("p",{children:"Calculates the content of all amino acids in the amino acid sequence of the introduced protein. The prevailing amino acid is determined. The result is displayed in the form of a diagram."}),Object(b.jsx)(f,{to:"/counter",text:"Count up"})]}),Object(b.jsxs)("div",{className:"col-md-4",children:[Object(b.jsx)("h2",{children:"Analyzer"}),Object(b.jsx)("p",{children:"Analyzes the entered amino acid sequence. Calculates the fidelity of the bonds of the selected ligand with the given protein. Indicates hypothetical binding sites and their amino acid composition."}),Object(b.jsx)(f,{to:"/analyzer",text:"To analyze",disabled:!0})]})]}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col-md-4",children:[Object(b.jsx)("h2",{children:"Mystery"}),Object(b.jsx)("p",{children:"I myself do not yet know what will come of this in the future, but so far the literal lasting is simply converted to amino acid."}),Object(b.jsx)(f,{to:"/mystery",text:"Go to mystery",disabled:!0})]}),Object(b.jsxs)("div",{className:"col-md-4",children:[Object(b.jsx)("h2",{children:"Pent Unfold"}),Object(b.jsx)("p",{children:"I myself do not yet know what will come of this in the future, but so far the literal lasting is simply converted to amino acid."}),Object(b.jsx)(f,{to:"/pent-un-fold",text:"To calculate"})]})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("footer",{children:Object(b.jsx)("p",{children:"\u24b8 \u24c5 Product created by @ Khrustalev & Kasko, 2019"})})]})]})},A=n(39),N=n.n(A),_=n(52),C=n(10),I=n(19),y=n.n(I),g=function(e){var t=e.setElement,n=e.visible,i=e.setVisible;return Object(c.useEffect)((function(){document.body.style.overflow=n?"hidden":""}),[n]),n?Object(r.createPortal)(Object(b.jsx)("div",{className:y.a.container,onClick:function(e){e.target===e.currentTarget&&i(!1),e.stopPropagation()},children:Object(b.jsxs)("div",{className:y.a.periodicTable,onClick:function(e){t(e.target.innerText),i(!1)},children:[Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:y.a.s,children:[Object(b.jsx)("div",{children:"H"}),Object(b.jsx)("div",{children:"Li"}),Object(b.jsx)("div",{children:"Na"}),Object(b.jsx)("div",{children:"K"}),Object(b.jsx)("div",{children:"Rb"}),Object(b.jsx)("div",{children:"Cs"}),Object(b.jsx)("div",{children:"Fr"})]}),Object(b.jsxs)("div",{className:y.a.s,children:[Object(b.jsx)("div",{children:"Be"}),Object(b.jsx)("div",{children:"Mg"}),Object(b.jsx)("div",{children:"Ca"}),Object(b.jsx)("div",{children:"Sr"}),Object(b.jsx)("div",{children:"Ba"}),Object(b.jsx)("div",{children:"Ra"})]}),Object(b.jsxs)("div",{className:y.a.d,children:[Object(b.jsx)("div",{children:"Sc"}),Object(b.jsx)("div",{children:"Y"}),Object(b.jsx)("div",{children:"-"}),Object(b.jsx)("div",{children:"-"})]}),Object(b.jsxs)("div",{className:y.a.d,children:[Object(b.jsx)("div",{children:"Ti"}),Object(b.jsx)("div",{children:"Zr"}),Object(b.jsx)("div",{children:"Hf"}),Object(b.jsx)("div",{children:"Rf"})]}),Object(b.jsxs)("div",{className:y.a.d,children:[Object(b.jsx)("div",{children:"V"}),Object(b.jsx)("div",{children:"Nb"}),Object(b.jsx)("div",{children:"Ta"}),Object(b.jsx)("div",{children:"Db"})]}),Object(b.jsxs)("div",{className:y.a.d,children:[Object(b.jsx)("div",{children:"Cr"}),Object(b.jsx)("div",{children:"Mo"}),Object(b.jsx)("div",{children:"W"}),Object(b.jsx)("div",{children:"Sg"})]}),Object(b.jsxs)("div",{className:y.a.d,children:[Object(b.jsx)("div",{children:"Mn"}),Object(b.jsx)("div",{children:"Tc"}),Object(b.jsx)("div",{children:"Re"}),Object(b.jsx)("div",{children:"Bh"})]}),Object(b.jsxs)("div",{className:y.a.d,children:[Object(b.jsx)("div",{children:"Fe"}),Object(b.jsx)("div",{children:"Ru"}),Object(b.jsx)("div",{children:"Os"}),Object(b.jsx)("div",{children:"Hs"})]}),Object(b.jsxs)("div",{className:y.a.d,children:[Object(b.jsx)("div",{children:"Co"}),Object(b.jsx)("div",{children:"Rh"}),Object(b.jsx)("div",{children:"Ir"}),Object(b.jsx)("div",{children:"Mt"})]}),Object(b.jsxs)("div",{className:y.a.d,children:[Object(b.jsx)("div",{children:"Ni"}),Object(b.jsx)("div",{children:"Pd"}),Object(b.jsx)("div",{children:"Pt"}),Object(b.jsx)("div",{children:"Ds"})]}),Object(b.jsxs)("div",{className:y.a.d,children:[Object(b.jsx)("div",{children:"Cu"}),Object(b.jsx)("div",{children:"Ag"}),Object(b.jsx)("div",{children:"Au"}),Object(b.jsx)("div",{children:"Rg"})]}),Object(b.jsxs)("div",{className:y.a.d,children:[Object(b.jsx)("div",{children:"Zn"}),Object(b.jsx)("div",{children:"Cd"}),Object(b.jsx)("div",{children:"Hg"}),Object(b.jsx)("div",{children:"Cn"})]}),Object(b.jsxs)("div",{className:y.a.p,children:[Object(b.jsx)("div",{children:"B"}),Object(b.jsx)("div",{children:"Al"}),Object(b.jsx)("div",{children:"Ga"}),Object(b.jsx)("div",{children:"In"}),Object(b.jsx)("div",{children:"Ti"}),Object(b.jsx)("div",{children:"Uut"})]}),Object(b.jsxs)("div",{className:y.a.p,children:[Object(b.jsx)("div",{children:"C"}),Object(b.jsx)("div",{children:"Si"}),Object(b.jsx)("div",{children:"Ge"}),Object(b.jsx)("div",{children:"Sn"}),Object(b.jsx)("div",{children:"Rb"}),Object(b.jsx)("div",{children:"Fl"})]}),Object(b.jsxs)("div",{className:y.a.p,children:[Object(b.jsx)("div",{children:"N"}),Object(b.jsx)("div",{children:"P"}),Object(b.jsx)("div",{children:"As"}),Object(b.jsx)("div",{children:"Sb"}),Object(b.jsx)("div",{children:"Bi"}),Object(b.jsx)("div",{children:"Uup"})]}),Object(b.jsxs)("div",{className:y.a.p,children:[Object(b.jsx)("div",{children:"O"}),Object(b.jsx)("div",{children:"S"}),Object(b.jsx)("div",{children:"Se"}),Object(b.jsx)("div",{children:"Te"}),Object(b.jsx)("div",{children:"Po"}),Object(b.jsx)("div",{children:"Lv"})]}),Object(b.jsxs)("div",{className:y.a.p,children:[Object(b.jsx)("div",{children:"F"}),Object(b.jsx)("div",{children:"Cl"}),Object(b.jsx)("div",{children:"Br"}),Object(b.jsx)("div",{children:"I"}),Object(b.jsx)("div",{children:"At"}),Object(b.jsx)("div",{children:"Uus"})]}),Object(b.jsxs)("div",{className:y.a.p,children:[Object(b.jsx)("div",{children:"He"}),Object(b.jsx)("div",{children:"Ne"}),Object(b.jsx)("div",{children:"Ar"}),Object(b.jsx)("div",{children:"Kr"}),Object(b.jsx)("div",{children:"Xe"}),Object(b.jsx)("div",{children:"Rn"}),Object(b.jsx)("div",{children:"Uuo"})]})]}),Object(b.jsxs)("div",{className:y.a.f,children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:"La"}),Object(b.jsx)("div",{children:"Ac"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:"La"}),Object(b.jsx)("div",{children:"Ac"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:"La"}),Object(b.jsx)("div",{children:"Ac"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:"La"}),Object(b.jsx)("div",{children:"Ac"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:"La"}),Object(b.jsx)("div",{children:"Ac"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:"La"}),Object(b.jsx)("div",{children:"Ac"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:"La"}),Object(b.jsx)("div",{children:"Ac"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:"La"}),Object(b.jsx)("div",{children:"Ac"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:"La"}),Object(b.jsx)("div",{children:"Ac"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:"La"}),Object(b.jsx)("div",{children:"Ac"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:"La"}),Object(b.jsx)("div",{children:"Ac"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:"La"}),Object(b.jsx)("div",{children:"Ac"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:"La"}),Object(b.jsx)("div",{children:"Ac"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:"La"}),Object(b.jsx)("div",{children:"Ac"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:"La"}),Object(b.jsx)("div",{children:"Ac"})]})]})]})}),document.body):null},S=n(233),T=n(223),R=n(224),E=n(218),D=n(221),M=n(236),P=n(222),w=n.p+"static/media/periodic-table.37385c77.svg",L=["H","He","Li","Be","B","C","N","O","F","Ne","Na","Mg","Al","Si","P","S","Cl","Ar","K","Ca","Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn","Ga","Ge","As","Se","Br","Kr","Rb","Sr","Y","Zr","Nb","Mo","Tc","Ru","Rh","Pd","Ag","Cd","In","Sn","Sb","Te","I","Xe","Cs","Ba","La","Ce","Pr","Nd","Pm","Sm","Eu","Gd","Tb","Dy","Ho","Er","Tm","Yb","Lu","Hf","Ta","W","Re","Os","Ir","Pt","Au","Hg","Tl","Pb","Bi","Po","At","Rn","Fr","Ra","Ac","Th","Pa","U","Np","Pu","Am","Cm","Bk","Cf","Es","Fm","Md","No","Lr","Rf","Db","Sg","Bh","Hs","Mt"],H=n(87),B=n.n(H).a.create({baseURL:"http://13.58.120.143:8080"}),G={post:function(e,t,n){return B.post("/chemistry/ligand-position",{ligandName:e,maxAcceptableDistance:t,PDBFile:n})},get:function(){return B.get("/chemistry/ligand-position")}},Y=function(){var e=Object(c.useRef)(),t=Object(c.useState)("H"),n=Object(C.a)(t,2),i=n[0],r=n[1],a=Object(c.useState)(.01),s=Object(C.a)(a,2),l=s[0],j=s[1],u=Object(c.useState)(),O=Object(C.a)(u,2),h=O[0],x=O[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(g,{visible:h,setVisible:x,setElement:function(e){r(e)}}),Object(b.jsxs)(S.a,{sx:{pb:10,mt:1},children:[Object(b.jsx)("p",{children:"Copy and paste the text in PDB file:"}),Object(b.jsx)(T.a,{sx:{"& .Mui-focused":{backgroundColor:"#fff"}},rows:12,fullWidth:!0,multiline:!0,inputRef:e,label:"PDB file",placeholder:"HEADER    OXIDOREDUCTASE                          18-MAY-11   3S3C              \nTITLE     STRUCTURE OF THERMUS THERMOPHILUS CYTOCHROME BA3 OXIDASE 360S AFTER XE\nTITLE    2 DEPRESSURIZATION                                                     \nCOMPND    MOL_ID: 1;                                                            \nCOMPND   2 MOLECULE: CYTOCHROME C OXIDASE SUBUNIT 1;                            \nCOMPND   3 CHAIN: A;                                                            \nCOMPND   4 SYNONYM: CYTOCHROME C BA(3) SUBUNIT I, CYTOCHROME C OXIDASE          \nCOMPND   5 POLYPEPTIDE I, CYTOCHROME CBA3 SUBUNIT 1;                            \nCOMPND   6 EC: 1.9.3.1;                                                         \nCOMPND   7 ENGINEERED: YES;                                                     \nCOMPND   8 MOL_ID: 2; ..."}),Object(b.jsxs)(d.a,{sx:{display:"flex",flexDirection:"column"},children:[Object(b.jsx)(d.a,{sx:{mt:1,mb:.5},children:"Element to calculate"}),Object(b.jsxs)("div",{children:[Object(b.jsx)(R.a,{children:Object(b.jsx)(E.a,{autoWidth:!0,label:"Element",sx:{minWidth:"70px"},value:i||"H",onChange:function(e){r(e.target.value)},children:L.map((function(e){return Object(b.jsx)(D.a,{value:e,children:e},e)}))})}),Object(b.jsx)(M.a,{sx:{ml:"3px"},onClick:function(){return x(!0)},children:Object(b.jsx)("img",{alt:"Select element button",src:w,width:40,height:40})})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)(d.a,{sx:{mt:1,mb:.5},children:"Max acceptable distance, \xc5"}),Object(b.jsxs)(d.a,{sx:{display:"flex"},children:[Object(b.jsx)("div",{children:Object(b.jsx)(T.a,{type:"number",variant:"standard",value:l||"",onChange:function(e){var t=+e.target.value;t=Math.max(0,t),t=Math.min(10,t),j(t)}})}),Object(b.jsx)("div",{children:Object(b.jsx)(P.a,{min:0,max:10,step:.01,valueLabelDisplay:"on",sx:{width:"200px",ml:3},value:l,onChange:function(e){j(e.target.value)}})})]})]})]}),Object(b.jsxs)(d.a,{sx:{mt:1},children:[Object(b.jsx)(o.a,{type:"submit",variant:"contained",onClick:function(){return m.apply(this,arguments)},sx:{mr:"5px"},children:"Get result"}),Object(b.jsx)(o.a,{type:"reset",onClick:function(){e.current.value="",j(.01),r("H")},children:"Clean out"})]})]})]});function m(){return(m=Object(_.a)(N.a.mark((function t(){return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G.post(i,l,e.current.value);case 2:t.sent;case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},k=function(){return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("p",{children:"Copy and paste the amino acid sequence:"}),Object(b.jsxs)("form",{method:"post",children:[Object(b.jsx)("div",{className:"divTextArea",children:Object(b.jsx)("textarea",{name:"text",rows:"12",placeholder:"Enter all data from the amino acid sequence:"})}),Object(b.jsx)("input",{type:"hidden"}),Object(b.jsxs)("p",{className:"buttons",children:[Object(b.jsx)("button",{type:"submit",children:"Get result"}),Object(b.jsx)("button",{type:"reset",children:"Clean out"})]})]})]})},U=function(){return Object(b.jsx)("div",{children:"Not implemented"})},F=n(18),W=n(113),z=n.n(W),X=n(93),V=["Amino acid","Percent"],K=function(){var e=i.a.createRef(),t=i.a.useState(),n=Object(C.a)(t,2),c=n[0],r=n[1];return Object(b.jsxs)(S.a,{sx:{mt:1,pb:10},children:[Object(b.jsx)("p",{children:"Enter the amino acid sequence:"}),Object(b.jsx)(T.a,{name:"text",multiline:!0,fullWidth:!0,rows:"12",placeholder:"Example: AMFCFQCQETAKNMFCFQCQETAKNTGCTVKGMCGKPEETANLQDLLIFVLRGIAI....",inputRef:e}),Object(b.jsxs)(d.a,{sx:{my:1},children:[Object(b.jsx)(o.a,{type:"submit",variant:"contained",onClick:function(){console.log("textAreaRef",e);var t={A:"Alanine",R:"Arginine",N:"Asparagine",D:"Aspartic Acid",C:"Cysteine",E:"Glutamic Acid",Q:"Glutamine",G:"Glycine",H:"Histidine",I:"Isoleucine",L:"Leucine",K:"Lysine",M:"Methionine",F:"Phenylalanine",P:"Proline",S:"Serine",T:"Threonine",W:"Tryptophan",Y:"Tyrosine",V:"Valine"},n=e.current.value,c={};Object(F.a)(n).filter((function(e){return t[e]})).forEach((function(e){return c[e]?c[e]++:c[e]=1})),c=Object.entries(c).map((function(e){var n=Object(C.a)(e,2),c=n[0],i=n[1];return[t[c],i]}));var i=[V].concat(Object(F.a)(c));r(i)},sx:{mr:1},children:"Get result"}),Object(b.jsx)(o.a,{type:"reset",onClick:function(){e.current.value="",r(void 0)},children:"Clean out"})]}),void 0!==c&&Object(b.jsxs)("div",{className:z.a.resultContainer,children:[Object(b.jsx)(X.a,{chartType:"Table",data:c,width:"100%",legendToggle:!0}),Object(b.jsx)(X.a,{chartType:"PieChart",data:c,width:"100%",legendToggle:!0,options:{is3D:!0}})]})]})},Z=n(94),Q=n.n(Z),q=function(){return Object(b.jsx)("div",{className:Q.a.wrapper,children:Object(b.jsxs)("div",{className:Q.a.form,children:[Object(b.jsx)("label",{className:"form-label",children:"Email address"}),Object(b.jsx)("input",{type:"email",className:"form-control",placeholder:"name@example.com"}),Object(b.jsx)("label",{className:"form-label",children:"Password"}),Object(b.jsx)("input",{type:"pssword",className:"form-control",placeholder:"********"}),Object(b.jsx)("button",{type:"button",className:"mt-2 center",children:"Login"})]})})},J=function(){return Object(b.jsx)("div",{children:"Login Page"})},$=n(225),ee=n(239),te=n(220),ne=n(217),ce=n(240),ie=n(95),re=n(237),ae=n(215),se=function(e){var t=Object(c.useRef)(),n=Object(c.useState)(null),i=Object(C.a)(n,2),r=i[0],a=i[1];return Object(c.useEffect)((function(){e.onFileChange&&e.onFileChange(r)}),[(null===r||void 0===r?void 0:r.name)+(null===r||void 0===r?void 0:r.size)]),Object(c.useEffect)((function(){e.inputRef&&(e.inputRef.current=new Proxy(t.current,{set:function(e,n,c){return e[n]=c,a(t.current.files[0]),!0},get:function(e,t){return e[t]}}))}),[e.inputRef]),Object(b.jsxs)(d.a,{as:"label",sx:{width:"100%"},children:[Object(b.jsx)("input",Object(ie.a)(Object(ie.a)({type:"file",ref:t,hidden:!0},e.innerProps),{},{onChange:function(e){a(e.target.files[0])}})),Object(b.jsxs)(d.a,{sx:{width:"100%"},children:[Object(b.jsx)(T.a,{variant:"standard",placeholder:"file.pdb",value:(null===r||void 0===r?void 0:r.name)||"",fullWidth:!0,InputProps:{startAdornment:Object(b.jsx)(re.a,{position:"end",children:Object(b.jsx)(M.a,{as:d.a,sx:{cursor:"pointer"},children:Object(b.jsx)(ae.a,{})})})}}),Object(b.jsx)(de,{file:r,setFile:a})]})]})};function de(e){var t=e.file,n=e.setFile,i=Object(c.useState)(0),r=Object(C.a)(i,2),a=r[0],s=r[1],l=0!==a,j=Object(c.useRef)(),o=Object(c.useState)(0),u=Object(C.a)(o,2),O=u[0],h=u[1];return Object(c.useLayoutEffect)((function(){h(j.current.offsetWidth)}),[]),Object(b.jsx)(d.a,{sx:{width:1,height:O+"px",border:"3px dashed",borderColor:function(e){return l||t?e.palette.primary.main:"#666"},transition:"border-color 0.22s",mt:1,display:"flex",cursor:"pointer"},ref:j,onDrop:function(e){e.preventDefault(),n(e.dataTransfer.files[0]),s(0)},onDragEnter:function(e){s((function(e){return e+1}))},onDragLeave:function(e){s((function(e){return e-1}))},onDragOver:function(e){e.preventDefault()},children:Object(b.jsx)(d.a,{as:"span",sx:{m:"auto"},children:"Drop your file here"})})}var le={headers:{"Content-Type":"multipart/form-data"}},je={post:function(e,t,n,c){var i=new FormData;return i.append("pdbFile",e),i.append("include3d",t),i.append("picResult",n),i.append("chain",c),B.post("/chemistry/pent-un-fold",i,le)},get:function(){return B.get("/chemistry/pent-un-fold")}},oe=function(e){var t=Object(c.useState)(!1),n=Object(C.a)(t,2),i=n[0],r=n[1],a=Object(c.useState)(null),s=Object(C.a)(a,2),d=s[0],l=s[1],j=Object(c.useState)(null),o=Object(C.a)(j,2),b=o[0],u=o[1];return{error:d,result:b,loading:i,execute:Object(c.useCallback)(Object(_.a)(N.a.mark((function t(){var n,c=arguments;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r(!0),t.next=4,e.apply(void 0,c);case 4:n=t.sent,u(n),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),l(t.t0);case 11:r(!1);case 12:case"end":return t.stop()}}),t,null,[[0,8]])}))),[e]),setResult:u}},be=n(15);function ue(e,t){var n=e[0].aminoAcidName,c=t[0].aminoAcidName;if("CYS"!==n||"CYS"!==c)return!1;var i=e.find((function(e){return"SG"===e.atomName})),r=t.find((function(e){return"SG"===e.atomName}));return Object(be.distance)(i,r)<be.DISULPHIDE_MAX_DISTANCE}var Oe=n(62);function he(e,t){return n(e,t)||n(t,e);function n(e,t){var n=e[0].aminoAcidName,c=t[0].aminoAcidName,i="265";if(e[0].aminoAcidId===i&&t[0].aminoAcidId,be.POSITIVE_CHARGED_AMINO_ACIDS.includes(n)&&be.NEGATIVE_CHARGED_AMINO_ACIDS.includes(c)){e[0].aminoAcidId===i&&t[0].aminoAcidId;var r,a=Object(Oe.a)(e);try{for(a.s();!(r=a.n()).done;){var s,d=r.value,l=Object(Oe.a)(t);try{for(l.s();!(s=l.n()).done;){var j=s.value;if(d.atomName.startsWith("N")&&"N"!==d.atomName&&j.atomName.startsWith("O")&&"O"!==j.atomName){var o=Object(be.distance)(d,j);if(e[0].aminoAcidId===i&&t[0].aminoAcidId,o<be.IONIC_MAX_DISTANCE&&o>be.IONIC_MIN_DISTANCE)return e[0].aminoAcidId===i&&t[0].aminoAcidId,!0}}}catch(b){l.e(b)}finally{l.f()}}}catch(b){a.e(b)}finally{a.f()}return e[0].aminoAcidId===i&&t[0].aminoAcidId,!1}}}function xe(e,t){var n=e[0].aminoAcidName,c=t[0].aminoAcidName;if(!be.ARYL_AMINO_ACIDS.includes(n)||!be.ARYL_AMINO_ACIDS.includes(c))return!1;var i=Object(be.centerOfAromaticRingOf)(e),r=Object(be.centerOfAromaticRingOf)(t);return Object(be.distance)(i,r)>3.5&&Object(be.distance)(i,r)<7}function me(e,t){return n(e,t)||n(t,e);function n(e,t){var n=e[0].aminoAcidName,c=t[0].aminoAcidName;if(!be.ARYL_AMINO_ACIDS.includes(n)||!["LYS","ARG"].includes(c))return!1;"50"===e[0].aminoAcidId&&t[0].aminoAcidId;var i=Object(be.centerOfAromaticRingOf)(e);return("LYS"===c?t.filter((function(e){return"NZ"===e.atomName})):t.filter((function(e){return["NH1","NH2","NE"].includes(e.atomName)}))).some((function(e){return Object(be.distance)(i,e)<be.AR_CATION_MAX_DISTANCE}))}}function fe(e,t){return n(e,t)||n(t,e);function n(e,t){var n=e[0].aminoAcidName,c=t[0].aminoAcidName;if(!be.ARYL_AMINO_ACIDS.includes(n)||!["CYS","MET"].includes(c))return!1;var i=Object(be.centerOfAromaticRingOf)(e);return("CYS"===c?t.filter((function(e){return"SG"===e.atomName})):t.filter((function(e){return"SD"===e.atomName}))).some((function(e){return Object(be.distance)(i,e)<be.AR_SULPHUR_MAX_DISTANCE}))}}var ve=n(15).distance;function pe(e,t){return n(e,t)+n(t,e);function n(e,t){var n,c=0,i=Object(Oe.a)(e);try{for(i.s();!(n=i.n()).done;){var r,a=n.value,s=Object(Oe.a)(t);try{for(s.s();!(r=s.n()).done;){var d=r.value,l=ve(a,d);a.atomName.startsWith("O")&&"O"!==a.atomName&&d.atomName.startsWith("O")&&"O"!==d.atomName&&l<3.5?c+=.5:(a.atomName.startsWith("N")&&d.atomName.startsWith("O")&&Math.abs(a.aminoAcidId-d.aminoAcidId)>1&&l<3.5||a.atomName.startsWith("S")&&d.atomName.startsWith("O")&&l<4)&&c++}}catch(j){s.e(j)}finally{s.f()}}}catch(j){i.e(j)}finally{i.f()}return c}}var Ae=n(15).HYDROPHOBIC_MAX_DISTANCE,Ne=n(15).HYDROPHOBIC_NON_ACCEPTABLE_CARBONS,_e=n(15).HYDROPHOBIC_AMINO_ACIDS,Ce=n(15).distance;function Ie(e,t){var n=e[0].aminoAcidName,c=t[0].aminoAcidName;if(!_e.includes(n)||!_e.includes(c))return!1;e=e.filter((function(e){return e.atomName.startsWith("C")&&!Ne.includes(e.atomName)})),t=t.filter((function(e){return e.atomName.startsWith("C")&&!Ne.includes(e.atomName)}));for(var i=0;i<e.length;i++)for(var r=0;r<t.length;r++)if(Ce(e[i],t[r])<=Ae)return!0}function ye(e){e=Object.entries(e);for(var t=[],n={},c=0;c<e.length-1;c++)for(var i=function(i){var r=e[c][1],a=e[i][1],s=e[c][0],d=e[i][0];[Ie,ue,he,xe,me,fe].forEach((function(e){e(r,a)&&(t.push([s,d]),n[e.name]?n[e.name].push([s,d]):n[e.name]=[[s,d]])}));var l=pe(r,a);if(l)for(var j=0;j<l;j++)t.push([s,d]),n.hydrogenBonded?n.hydrogenBonded.push([s,d]):n.hydrogenBonded=[[s,d]]},r=c+1;r<e.length;r++)i(r);return t}function ge(e){for(var t={},n=e.split("\n"),c=0;c<n.length;c++){var i=n[c];if(i.startsWith("ATOM")){var r=i.slice(16,20);4===r.length&&"A"===r[0]&&(r=r.slice(1));var a=[i.slice(0,6),i.slice(6,11),i.slice(11,16),r,i.slice(20,22),i.slice(22,26),i.slice(26,38),i.slice(38,46),i.slice(46,55)].map((function(e){return e.trim()})),s=Object(C.a)(a,9),d=s[1],l=s[2],j=s[3],o=s[4],b=s[5],u={atomId:d,atomName:l,aminoAcidName:j,aminoAcidId:b,chainName:o,x:+s[6],y:+s[7],z:+s[8]};t[o]||(t[o]={});var O=t[o];O[b]?O[b].push(u):O[b]=[u]}}return t}var Se=function(){var e=Object(c.useRef)(),t=Object(c.useRef)(),n=oe((function(e,t){return y.apply(this,arguments)})),i=n.result,r=n.setResult,a=n.loading,s=n.execute,l=Object(c.useState)(null),j=Object(C.a)(l,2),u=j[0],O=j[1],h=Object(c.useState)(null),x=Object(C.a)(h,2),m=x[0],f=x[1],v=Object(c.useState)(""),p=Object(C.a)(v,2),A=p[0],I=p[1];return Object(b.jsxs)(S.a,{sx:{pb:10,mt:1},children:[Object(b.jsxs)(d.a,{sx:{width:"250px"},children:[Object(b.jsx)(se,{inputRef:e,innerProps:{accept:".pdb"},onFileChange:function(){var t=Object(_.a)(N.a.mark((function t(n){var c,i,r;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log("onfile change"),!(c=g(n))){t.next=12;break}return t.next=5,new Promise((function(t,n){var c=new FileReader;c.readAsText(e.current.files[0]),c.onloadend=function(e){t(c.result)}}));case 5:i=t.sent,r=ge(i),window.chains=r,f(r),I(Object.keys(r)[0]),t.next=14;break;case 12:f(null),I("");case 14:O(c);case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}),Object(b.jsx)("br",{}),Object(b.jsxs)(R.a,{sx:{mt:2,minWidth:1},children:[Object(b.jsx)($.a,{sx:{background:"#fff",mt:"-4px",px:"4px"},children:"Chain name"}),Object(b.jsx)(E.a,{variant:"outlined",label:"Chain name",value:A,onChange:function(e){return I(e.target.value)},disabled:null===m||a,children:m&&Object.keys(m).map((function(e){return Object(b.jsx)(D.a,{value:e,children:e},e)}))})]}),Object(b.jsx)(ee.a,{control:Object(b.jsx)(te.a,{inputRef:t,disabled:a}),label:"Include 3d result"}),Object(b.jsx)(d.a,{sx:{mt:"20px"},children:Object(b.jsxs)(d.a,{sx:{display:"flex",flexDirection:"row","& > *":{flexGrow:1}},children:[u?Object(b.jsx)(o.a,{type:"submit",variant:"contained",onClick:function(){return s(m,A)},sx:{mr:"5px"},disabled:a||!u,children:"Get result"}):Object(b.jsx)(ne.a,{title:null===u?"Please select a file":"Only .pdb files are supported",children:Object(b.jsx)("span",{children:Object(b.jsx)(o.a,{type:"submit",variant:"contained",onClick:s,sx:{mr:"5px",width:"100%"},disabled:a||!u,children:"Get result"})})}),Object(b.jsx)(o.a,{type:"reset",onClick:function(){e.current.value="",r(null),f(null),I(null)},children:"Clean out"})]})}),a&&Object(b.jsx)(ce.a,{sx:{mt:1,display:"block"}})]}),i&&Object(b.jsx)(d.a,{sx:{mt:1},children:i["3d"]?Object(b.jsxs)(b.Fragment,{children:["Your files are ready! ",Object(b.jsx)("br",{}),"Use links below to download them: ",Object(b.jsx)("br",{}),Object(b.jsx)("a",{href:i["2d"],download:"2d.xlsx",children:"2D"})," ",Object(b.jsx)("br",{}),Object(b.jsx)("a",{href:i["3d"],download:"3d.xlsx",target:"_blank",children:"3D"})," ",Object(b.jsx)("br",{}),"Links will be alive for 2 min"]}):Object(b.jsxs)(b.Fragment,{children:["Your file is ready! ",Object(b.jsx)("br",{}),"Use ",Object(b.jsx)("a",{href:i["2d"],download:"2d.xlsx",children:"2D"})," to download it. ",Object(b.jsx)("br",{}),"Links will be alive for 2 min"]})})]});function y(){return(y=Object(_.a)(N.a.mark((function n(c,i){var r,a,s;return N.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r=t.current.checked,a=r?ye(c[i]):null,n.next=5,je.post(e.current.files[0],r,a,i);case 5:return s=n.sent,n.abrupt("return",r?{"2d":"http://13.58.120.143:8080/chemistry/pent-un-fold/"+s.data,"3d":"http://13.58.120.143:8080/chemistry/pent-un-fold/3d/"+s.data}:{"2d":"http://13.58.120.143:8080/chemistry/pent-un-fold/"+s.data});case 9:n.prev=9,n.t0=n.catch(0),console.error(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}function g(e){return e?e.name.endsWith(".pdb"):null}},Te=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(u,{}),Object(b.jsxs)(O.c,{children:[Object(b.jsx)(O.a,{path:"/login",component:J}),Object(b.jsx)(O.a,{path:"/register",component:q}),Object(b.jsx)(O.a,{path:"/mystery",component:k}),Object(b.jsx)(O.a,{path:"/analyzer",component:U}),Object(b.jsx)(O.a,{path:"/counter",component:K}),Object(b.jsx)(O.a,{path:"/accelerator",component:Y}),Object(b.jsx)(O.a,{path:"/pent-un-fold",component:Se}),Object(b.jsx)(O.a,{path:"/",component:p})]})]})},Re=n(115),Ee=n(226),De=n(216),Me=n(55),Pe=Object(Re.a)({palette:{primary:De.a,secondary:Me.a}});a.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(s.a,{children:Object(b.jsx)(Ee.a,{theme:Pe,children:Object(b.jsx)(Te,{})})})}),document.getElementById("root"))},19:function(e,t,n){e.exports={container:"periodicTable_container__2dDB1",periodicTable:"periodicTable_periodicTable__2AocP",s:"periodicTable_s__3xaPg",p:"periodicTable_p__1VGNb",d:"periodicTable_d__3vlLI",f:"periodicTable_f__3l_bS"}},91:function(e,t,n){e.exports={home:"home_home__lywsf",planets:"home_planets__2Zrb0"}},94:function(e,t,n){e.exports={form:"register_form__2HOiW",wrapper:"register_wrapper__10oNb"}}},[[164,1,2]]]);
//# sourceMappingURL=main.4b03e517.chunk.js.map