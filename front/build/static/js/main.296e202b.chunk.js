(this.webpackJsonpaccelerator=this.webpackJsonpaccelerator||[]).push([[0],{113:function(e,t,n){e.exports={number1:"counter_number1__17RoF",number2:"counter_number2__3cqSQ",number3:"counter_number3__q2MXd",number4:"counter_number4__1IHFD",number5:"counter_number5__zQ-rz",number6:"counter_number6__1iAVx",number7:"counter_number7__273x1",number8:"counter_number8__xz319",number9:"counter_number9__3D0ov",number10:"counter_number10__3ESUA",number11:"counter_number11__2XTPQ",number12:"counter_number12__1JTpu",number13:"counter_number13__3C8hA",number14:"counter_number14__3Fr3f",number15:"counter_number15__1SRHj",number16:"counter_number16__1EQiU",number17:"counter_number17__2Y5Rx",number18:"counter_number18__2gwsb",number19:"counter_number19__1cSdX",number20:"counter_number20__3bf4l",round:"counter_round__3mJmE",gistogramm:"counter_gistogramm__1NGrR",resultContainer:"counter_resultContainer__1Qlh9"}},137:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t),n.d(t,"DISULPHIDE_MAX_DISTANCE",(function(){return i})),n.d(t,"HYDROPHOBIC_AMINO_ACIDS",(function(){return r})),n.d(t,"HYDROPHOBIC_NON_ACCEPTABLE_CARBONS",(function(){return a})),n.d(t,"HYDROPHOBIC_MAX_DISTANCE",(function(){return s})),n.d(t,"POSITIVE_CHARGED_AMINO_ACIDS",(function(){return d})),n.d(t,"NEGATIVE_CHARGED_AMINO_ACIDS",(function(){return l})),n.d(t,"IONIC_MIN_DISTANCE",(function(){return j})),n.d(t,"IONIC_MAX_DISTANCE",(function(){return o})),n.d(t,"ARYL_AMINO_ACIDS",(function(){return u})),n.d(t,"AR_AR_MIN_DISTANCE",(function(){return b})),n.d(t,"AR_AR_MAX_DISTANCE",(function(){return O})),n.d(t,"AR_CATION_MAX_DISTANCE",(function(){return h})),n.d(t,"AR_SULPHUR_MAX_DISTANCE",(function(){return x})),n.d(t,"distance",(function(){return m})),n.d(t,"centerOfAromaticRingOf",(function(){return v}));var c=n(9),i=Math.pow(2.2,1),r=["ALA","VAL","LEU","ILE","MET","PHE","TRP","PRO","TYR"],a=["C","CA"],s=Math.pow(5,1),d=["ARG","LYS","HIS"],l=["ASP","GLU"],j=Math.pow(3.5,1),o=Math.pow(6,1),u=["PHE","TYR","TRP"],b=Math.pow(3.5,1),O=Math.pow(7,1),h=6,x=5.3;function m(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2)+Math.pow(e.z-t.z,2))}function v(e){switch(e[0].aminoAcidName){case"PHE":case"TYR":return function(e){for(var t=function(){var t=Object(c.a)(i[n],2),r=t[0],a=t[1],s=e.find((function(e){return e.atomName===r})),d=e.find((function(e){return e.atomName===a}));return void 0===s||void 0===d?"continue":{v:{x:(s.x+d.x)/2,y:(s.y+d.y)/2,z:(s.z+d.z)/2}}},n=0,i=[["CG","CZ"],["CD1","CE2"],["CD1","CE2"]];n<i.length;n++){var r=t();if("continue"!==r&&"object"===typeof r)return r.v}}(e);case"TRP":return function(e){for(var t=function(){var t=Object(c.a)(i[n],2),r=t[0],a=t[1],s=e.find((function(e){return e.atomName===r})),d=e.find((function(e){return e.atomName===a}));return void 0===s||void 0===d?"continue":{v:{x:(s.x+d.x)/2,y:(s.y+d.y)/2,z:(s.z+d.z)/2}}},n=0,i=[["CD2","CH2"],["CE2","CZ3"],["CE3","CZ2"]];n<i.length;n++){var r=t();if("continue"!==r&&"object"===typeof r)return r.v}}(e);default:console.error("NOT AROMATIC")}}window.distance=m},165:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),r=n(45),a=n.n(r),s=(n(136),n(137),n(55)),d=n(234),l=n(235),j=n(237),o=n(238),u=n.p+"static/media/new-title.812a026e.png",b=n(71),O=n.n(b),h=n(0),x=function(){return Object(h.jsx)(d.a,{sx:{flexGrow:1},children:Object(h.jsx)(l.a,{position:"static",children:Object(h.jsxs)(j.a,{children:[Object(h.jsx)(d.a,{sx:{flexGrow:1,"& a":{color:"#fff",textDecoration:"none",fontSize:"2rem","&:hover":{color:"primary.light"}}},children:Object(h.jsxs)(d.a,{children:[Object(h.jsx)(s.b,{to:"/",children:Object(h.jsx)("img",{src:u,className:O.a.title,alt:""})}),Object(h.jsx)(d.a,{as:"span",sx:{position:"relative",bottom:"-3px",color:"#ddd"},children:"v 1.0.5"})]})}),Object(h.jsx)(o.a,{color:"inherit",children:"Login"})]})})})},m=n(20),v={"& a":{textDecoration:"none"}},f=function(e){var t=e.to,n=e.text,c=e.disabled;return Object(h.jsx)(d.a,{sx:v,children:c?Object(h.jsx)(o.a,{variant:"outlined",disabled:!0,children:n}):Object(h.jsx)(s.b,{to:t,children:Object(h.jsx)(o.a,{variant:"outlined",children:n})})})},p=n.p+"static/media/planet.5c6e7a8f.jpg",A=function(){return Object(h.jsxs)("div",{className:O.a.home,children:[Object(h.jsx)("div",{className:O.a.planets,children:Object(h.jsx)("img",{src:p,alt:""})}),Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"col-md-4",children:[Object(h.jsx)("h2",{children:"Accelerator"}),Object(h.jsx)("p",{children:"Increases the speed of processing PDB files. It computes the length between the desired ligand and the nearest atom. As a result, we have a list of binding sites and long links."}),Object(h.jsx)(f,{to:"/accelerator",text:"Accelerate up"})]}),Object(h.jsxs)("div",{className:"col-md-4",children:[Object(h.jsx)("h2",{children:"Counter"}),Object(h.jsx)("p",{children:"Calculates the content of all amino acids in the amino acid sequence of the introduced protein. The prevailing amino acid is determined. The result is displayed in the form of a diagram."}),Object(h.jsx)(f,{to:"/counter",text:"Count up"})]}),Object(h.jsxs)("div",{className:"col-md-4",children:[Object(h.jsx)("h2",{children:"Analyzer"}),Object(h.jsx)("p",{children:"Analyzes the entered amino acid sequence. Calculates the fidelity of the bonds of the selected ligand with the given protein. Indicates hypothetical binding sites and their amino acid composition."}),Object(h.jsx)(f,{to:"/analyzer",text:"To analyze",disabled:!0})]})]}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"col-md-4",children:[Object(h.jsx)("h2",{children:"Mystery"}),Object(h.jsx)("p",{children:"I myself do not yet know what will come of this in the future, but so far the literal lasting is simply converted to amino acid."}),Object(h.jsx)(f,{to:"/mystery",text:"Go to mystery",disabled:!0})]}),Object(h.jsxs)("div",{className:"col-md-4",children:[Object(h.jsx)("h2",{children:"Pent Unfold"}),Object(h.jsx)("p",{children:"I myself do not yet know what will come of this in the future, but so far the literal lasting is simply converted to amino acid."}),Object(h.jsx)(f,{to:"/pent-un-fold",text:"To calculate"})]})]}),Object(h.jsx)("hr",{}),Object(h.jsx)("footer",{children:Object(h.jsx)("p",{children:"\u24b8 \u24c5 Product created by @ Khrustalev & Kasko, 2019"})})]})]})},N=n(25),C=n.n(N),_=n(39),I=n(9),y=n(19),g=n.n(y),E=function(e){var t=e.setElement,n=e.visible,i=e.setVisible;return Object(c.useEffect)((function(){document.body.style.overflow=n?"hidden":""}),[n]),n?Object(r.createPortal)(Object(h.jsx)("div",{className:g.a.container,onClick:function(e){e.target===e.currentTarget&&i(!1),e.stopPropagation()},children:Object(h.jsxs)("div",{className:g.a.periodicTable,onClick:function(e){t(e.target.innerText),i(!1)},children:[Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:g.a.s,children:[Object(h.jsx)("div",{children:"H"}),Object(h.jsx)("div",{children:"Li"}),Object(h.jsx)("div",{children:"Na"}),Object(h.jsx)("div",{children:"K"}),Object(h.jsx)("div",{children:"Rb"}),Object(h.jsx)("div",{children:"Cs"}),Object(h.jsx)("div",{children:"Fr"})]}),Object(h.jsxs)("div",{className:g.a.s,children:[Object(h.jsx)("div",{children:"Be"}),Object(h.jsx)("div",{children:"Mg"}),Object(h.jsx)("div",{children:"Ca"}),Object(h.jsx)("div",{children:"Sr"}),Object(h.jsx)("div",{children:"Ba"}),Object(h.jsx)("div",{children:"Ra"})]}),Object(h.jsxs)("div",{className:g.a.d,children:[Object(h.jsx)("div",{children:"Sc"}),Object(h.jsx)("div",{children:"Y"}),Object(h.jsx)("div",{children:"-"}),Object(h.jsx)("div",{children:"-"})]}),Object(h.jsxs)("div",{className:g.a.d,children:[Object(h.jsx)("div",{children:"Ti"}),Object(h.jsx)("div",{children:"Zr"}),Object(h.jsx)("div",{children:"Hf"}),Object(h.jsx)("div",{children:"Rf"})]}),Object(h.jsxs)("div",{className:g.a.d,children:[Object(h.jsx)("div",{children:"V"}),Object(h.jsx)("div",{children:"Nb"}),Object(h.jsx)("div",{children:"Ta"}),Object(h.jsx)("div",{children:"Db"})]}),Object(h.jsxs)("div",{className:g.a.d,children:[Object(h.jsx)("div",{children:"Cr"}),Object(h.jsx)("div",{children:"Mo"}),Object(h.jsx)("div",{children:"W"}),Object(h.jsx)("div",{children:"Sg"})]}),Object(h.jsxs)("div",{className:g.a.d,children:[Object(h.jsx)("div",{children:"Mn"}),Object(h.jsx)("div",{children:"Tc"}),Object(h.jsx)("div",{children:"Re"}),Object(h.jsx)("div",{children:"Bh"})]}),Object(h.jsxs)("div",{className:g.a.d,children:[Object(h.jsx)("div",{children:"Fe"}),Object(h.jsx)("div",{children:"Ru"}),Object(h.jsx)("div",{children:"Os"}),Object(h.jsx)("div",{children:"Hs"})]}),Object(h.jsxs)("div",{className:g.a.d,children:[Object(h.jsx)("div",{children:"Co"}),Object(h.jsx)("div",{children:"Rh"}),Object(h.jsx)("div",{children:"Ir"}),Object(h.jsx)("div",{children:"Mt"})]}),Object(h.jsxs)("div",{className:g.a.d,children:[Object(h.jsx)("div",{children:"Ni"}),Object(h.jsx)("div",{children:"Pd"}),Object(h.jsx)("div",{children:"Pt"}),Object(h.jsx)("div",{children:"Ds"})]}),Object(h.jsxs)("div",{className:g.a.d,children:[Object(h.jsx)("div",{children:"Cu"}),Object(h.jsx)("div",{children:"Ag"}),Object(h.jsx)("div",{children:"Au"}),Object(h.jsx)("div",{children:"Rg"})]}),Object(h.jsxs)("div",{className:g.a.d,children:[Object(h.jsx)("div",{children:"Zn"}),Object(h.jsx)("div",{children:"Cd"}),Object(h.jsx)("div",{children:"Hg"}),Object(h.jsx)("div",{children:"Cn"})]}),Object(h.jsxs)("div",{className:g.a.p,children:[Object(h.jsx)("div",{children:"B"}),Object(h.jsx)("div",{children:"Al"}),Object(h.jsx)("div",{children:"Ga"}),Object(h.jsx)("div",{children:"In"}),Object(h.jsx)("div",{children:"Ti"}),Object(h.jsx)("div",{children:"Uut"})]}),Object(h.jsxs)("div",{className:g.a.p,children:[Object(h.jsx)("div",{children:"C"}),Object(h.jsx)("div",{children:"Si"}),Object(h.jsx)("div",{children:"Ge"}),Object(h.jsx)("div",{children:"Sn"}),Object(h.jsx)("div",{children:"Rb"}),Object(h.jsx)("div",{children:"Fl"})]}),Object(h.jsxs)("div",{className:g.a.p,children:[Object(h.jsx)("div",{children:"N"}),Object(h.jsx)("div",{children:"P"}),Object(h.jsx)("div",{children:"As"}),Object(h.jsx)("div",{children:"Sb"}),Object(h.jsx)("div",{children:"Bi"}),Object(h.jsx)("div",{children:"Uup"})]}),Object(h.jsxs)("div",{className:g.a.p,children:[Object(h.jsx)("div",{children:"O"}),Object(h.jsx)("div",{children:"S"}),Object(h.jsx)("div",{children:"Se"}),Object(h.jsx)("div",{children:"Te"}),Object(h.jsx)("div",{children:"Po"}),Object(h.jsx)("div",{children:"Lv"})]}),Object(h.jsxs)("div",{className:g.a.p,children:[Object(h.jsx)("div",{children:"F"}),Object(h.jsx)("div",{children:"Cl"}),Object(h.jsx)("div",{children:"Br"}),Object(h.jsx)("div",{children:"I"}),Object(h.jsx)("div",{children:"At"}),Object(h.jsx)("div",{children:"Uus"})]}),Object(h.jsxs)("div",{className:g.a.p,children:[Object(h.jsx)("div",{children:"He"}),Object(h.jsx)("div",{children:"Ne"}),Object(h.jsx)("div",{children:"Ar"}),Object(h.jsx)("div",{children:"Kr"}),Object(h.jsx)("div",{children:"Xe"}),Object(h.jsx)("div",{children:"Rn"}),Object(h.jsx)("div",{children:"Uuo"})]})]}),Object(h.jsxs)("div",{className:g.a.f,children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:"La"}),Object(h.jsx)("div",{children:"Ac"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:"La"}),Object(h.jsx)("div",{children:"Ac"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:"La"}),Object(h.jsx)("div",{children:"Ac"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:"La"}),Object(h.jsx)("div",{children:"Ac"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:"La"}),Object(h.jsx)("div",{children:"Ac"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:"La"}),Object(h.jsx)("div",{children:"Ac"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:"La"}),Object(h.jsx)("div",{children:"Ac"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:"La"}),Object(h.jsx)("div",{children:"Ac"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:"La"}),Object(h.jsx)("div",{children:"Ac"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:"La"}),Object(h.jsx)("div",{children:"Ac"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:"La"}),Object(h.jsx)("div",{children:"Ac"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:"La"}),Object(h.jsx)("div",{children:"Ac"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:"La"}),Object(h.jsx)("div",{children:"Ac"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:"La"}),Object(h.jsx)("div",{children:"Ac"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:"La"}),Object(h.jsx)("div",{children:"Ac"})]})]})]})}),document.body):null},T=n(239),R=n(229),S=n(230),D=n(223),M=n(227),w=n(242),P=n(228),L=n.p+"static/media/periodic-table.37385c77.svg",H=["H","He","Li","Be","B","C","N","O","F","Ne","Na","Mg","Al","Si","P","S","Cl","Ar","K","Ca","Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn","Ga","Ge","As","Se","Br","Kr","Rb","Sr","Y","Zr","Nb","Mo","Tc","Ru","Rh","Pd","Ag","Cd","In","Sn","Sb","Te","I","Xe","Cs","Ba","La","Ce","Pr","Nd","Pm","Sm","Eu","Gd","Tb","Dy","Ho","Er","Tm","Yb","Lu","Hf","Ta","W","Re","Os","Ir","Pt","Au","Hg","Tl","Pb","Bi","Po","At","Rn","Fr","Ra","Ac","Th","Pa","U","Np","Pu","Am","Cm","Bk","Cf","Es","Fm","Md","No","Lr","Rf","Db","Sg","Bh","Hs","Mt"],G=n(89),k=n.n(G).a.create({baseURL:"http://"+window.location.hostname+":8080"}),F={post:function(e,t,n){return k.post("/chemistry/ligand-position",{ligandName:e,maxAcceptableDistance:t,PDBFile:n})},get:function(){return k.get("/chemistry/ligand-position")}},B=function(){var e=Object(c.useRef)(),t=Object(c.useState)("H"),n=Object(I.a)(t,2),i=n[0],r=n[1],a=Object(c.useState)(.01),s=Object(I.a)(a,2),l=s[0],j=s[1],u=Object(c.useState)(),b=Object(I.a)(u,2),O=b[0],x=b[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(E,{visible:O,setVisible:x,setElement:function(e){r(e)}}),Object(h.jsxs)(T.a,{sx:{pb:10,mt:1},children:[Object(h.jsx)("p",{children:"Copy and paste the text in PDB file:"}),Object(h.jsx)(R.a,{sx:{"& .Mui-focused":{backgroundColor:"#fff"}},rows:12,fullWidth:!0,multiline:!0,inputRef:e,label:"PDB file",placeholder:"HEADER    OXIDOREDUCTASE                          18-MAY-11   3S3C              \nTITLE     STRUCTURE OF THERMUS THERMOPHILUS CYTOCHROME BA3 OXIDASE 360S AFTER XE\nTITLE    2 DEPRESSURIZATION                                                     \nCOMPND    MOL_ID: 1;                                                            \nCOMPND   2 MOLECULE: CYTOCHROME C OXIDASE SUBUNIT 1;                            \nCOMPND   3 CHAIN: A;                                                            \nCOMPND   4 SYNONYM: CYTOCHROME C BA(3) SUBUNIT I, CYTOCHROME C OXIDASE          \nCOMPND   5 POLYPEPTIDE I, CYTOCHROME CBA3 SUBUNIT 1;                            \nCOMPND   6 EC: 1.9.3.1;                                                         \nCOMPND   7 ENGINEERED: YES;                                                     \nCOMPND   8 MOL_ID: 2; ..."}),Object(h.jsxs)(d.a,{sx:{display:"flex",flexDirection:"column"},children:[Object(h.jsx)(d.a,{sx:{mt:1,mb:.5},children:"Element to calculate"}),Object(h.jsxs)("div",{children:[Object(h.jsx)(S.a,{children:Object(h.jsx)(D.a,{autoWidth:!0,label:"Element",sx:{minWidth:"70px"},value:i||"H",onChange:function(e){r(e.target.value)},children:H.map((function(e){return Object(h.jsx)(M.a,{value:e,children:e},e)}))})}),Object(h.jsx)(w.a,{sx:{ml:"3px"},onClick:function(){return x(!0)},children:Object(h.jsx)("img",{alt:"Select element button",src:L,width:40,height:40})})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)(d.a,{sx:{mt:1,mb:.5},children:"Max acceptable distance, \xc5"}),Object(h.jsxs)(d.a,{sx:{display:"flex"},children:[Object(h.jsx)("div",{children:Object(h.jsx)(R.a,{type:"number",variant:"standard",value:l||"",onChange:function(e){var t=+e.target.value;t=Math.max(0,t),t=Math.min(10,t),j(t)}})}),Object(h.jsx)("div",{children:Object(h.jsx)(P.a,{min:0,max:10,step:.01,valueLabelDisplay:"on",sx:{width:"200px",ml:3},value:l,onChange:function(e){j(e.target.value)}})})]})]})]}),Object(h.jsxs)(d.a,{sx:{mt:1},children:[Object(h.jsx)(o.a,{type:"submit",variant:"contained",onClick:function(){return m.apply(this,arguments)},sx:{mr:"5px"},children:"Get result"}),Object(h.jsx)(o.a,{type:"reset",onClick:function(){e.current.value="",j(.01),r("H")},children:"Clean out"})]})]})]});function m(){return(m=Object(_.a)(C.a.mark((function t(){var n;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,F.post(i,l,e.current.value);case 2:n=t.sent,console.log("post response",n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},Y=function(){return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("p",{children:"Copy and paste the amino acid sequence:"}),Object(h.jsxs)("form",{method:"post",children:[Object(h.jsx)("div",{className:"divTextArea",children:Object(h.jsx)("textarea",{name:"text",rows:"12",placeholder:"Enter all data from the amino acid sequence:"})}),Object(h.jsx)("input",{type:"hidden"}),Object(h.jsxs)("p",{className:"buttons",children:[Object(h.jsx)("button",{type:"submit",children:"Get result"}),Object(h.jsx)("button",{type:"reset",children:"Clean out"})]})]})]})},U=function(){return Object(h.jsx)("div",{children:"Not implemented"})},W=n(18),X=n(113),z=n.n(X),Q=n(94),q=["Amino acid","Percent"],V=function(){var e=i.a.createRef(),t=i.a.useState(),n=Object(I.a)(t,2),c=n[0],r=n[1];return Object(h.jsxs)(T.a,{sx:{mt:1,pb:10},children:[Object(h.jsx)("p",{children:"Enter the amino acid sequence:"}),Object(h.jsx)(R.a,{name:"text",multiline:!0,fullWidth:!0,rows:"12",placeholder:"Example: AMFCFQCQETAKNMFCFQCQETAKNTGCTVKGMCGKPEETANLQDLLIFVLRGIAI....",inputRef:e}),Object(h.jsxs)(d.a,{sx:{my:1},children:[Object(h.jsx)(o.a,{type:"submit",variant:"contained",onClick:function(){console.log("textAreaRef",e);var t={A:"Alanine",R:"Arginine",N:"Asparagine",D:"Aspartic Acid",C:"Cysteine",E:"Glutamic Acid",Q:"Glutamine",G:"Glycine",H:"Histidine",I:"Isoleucine",L:"Leucine",K:"Lysine",M:"Methionine",F:"Phenylalanine",P:"Proline",S:"Serine",T:"Threonine",W:"Tryptophan",Y:"Tyrosine",V:"Valine"},n=e.current.value,c={};Object(W.a)(n).filter((function(e){return t[e]})).forEach((function(e){return c[e]?c[e]++:c[e]=1})),c=Object.entries(c).map((function(e){var n=Object(I.a)(e,2),c=n[0],i=n[1];return[t[c],i]}));var i=[q].concat(Object(W.a)(c));r(i)},sx:{mr:1},children:"Get result"}),Object(h.jsx)(o.a,{type:"reset",onClick:function(){e.current.value="",r(void 0)},children:"Clean out"})]}),void 0!==c&&Object(h.jsxs)("div",{className:z.a.resultContainer,children:[Object(h.jsx)(Q.a,{chartType:"Table",data:c,width:"100%",legendToggle:!0}),Object(h.jsx)(Q.a,{chartType:"PieChart",data:c,width:"100%",legendToggle:!0,options:{is3D:!0}})]})]})},K=n(95),Z=n.n(K),J=function(){return Object(h.jsx)("div",{className:Z.a.wrapper,children:Object(h.jsxs)("div",{className:Z.a.form,children:[Object(h.jsx)("label",{className:"form-label",children:"Email address"}),Object(h.jsx)("input",{type:"email",className:"form-control",placeholder:"name@example.com"}),Object(h.jsx)("label",{className:"form-label",children:"Password"}),Object(h.jsx)("input",{type:"pssword",className:"form-control",placeholder:"********"}),Object(h.jsx)("button",{type:"button",className:"mt-2 center",children:"Login"})]})})},$=function(){return Object(h.jsx)("div",{children:"Login Page"})},ee=n(63),te=n(116),ne=["children","selected","value"];function ce(e){var t=e.children,n=e.selected,c=e.value,i=Object(te.a)(e,ne);return Object(h.jsx)("div",Object(ee.a)(Object(ee.a)({role:"tabpanel",hidden:n!==c,"aria-labelledby":"simple-tab-".concat(c)},i),{},{children:n===c&&Object(h.jsx)(d.a,{sx:{p:3},children:t})}))}var ie=n(243),re=n(220),ae=function(e){var t=Object(c.useRef)(),n=Object(c.useState)(null),i=Object(I.a)(n,2),r=i[0],a=i[1];return Object(c.useEffect)((function(){e.onFileChange&&e.onFileChange(r)}),[(null===r||void 0===r?void 0:r.name)+(null===r||void 0===r?void 0:r.size)]),Object(c.useEffect)((function(){e.inputRef&&(e.inputRef.current=new Proxy(t.current,{set:function(e,n,c){return e[n]=c,a(t.current.files[0]),!0},get:function(e,t){return e[t]}}))}),[e.inputRef]),Object(h.jsxs)(d.a,{as:"label",sx:{width:"100%"},children:[Object(h.jsx)("input",Object(ee.a)(Object(ee.a)({type:"file",ref:t,hidden:!0},e.innerProps),{},{onChange:function(e){a(e.target.files[0])}})),Object(h.jsxs)(d.a,{sx:{width:"100%"},children:[Object(h.jsx)(R.a,{variant:"standard",placeholder:"file.pdb",value:(null===r||void 0===r?void 0:r.name)||"",fullWidth:!0,InputProps:{startAdornment:Object(h.jsx)(ie.a,{position:"end",children:Object(h.jsx)(w.a,{as:d.a,sx:{cursor:"pointer"},children:Object(h.jsx)(re.a,{})})})}}),Object(h.jsx)(se,{file:r,setFile:a})]})]})};function se(e){var t=e.file,n=e.setFile,i=Object(c.useState)(0),r=Object(I.a)(i,2),a=r[0],s=r[1],l=0!==a,j=Object(c.useRef)(),o=Object(c.useState)(0),u=Object(I.a)(o,2),b=u[0],O=u[1];return Object(c.useLayoutEffect)((function(){O(j.current.offsetWidth)}),[]),Object(h.jsx)(d.a,{sx:{width:1,height:b+"px",border:"3px dashed",borderColor:function(e){return l||t?e.palette.primary.main:"#666"},transition:"border-color 0.22s",mt:1,display:"flex",cursor:"pointer"},ref:j,onDrop:function(e){e.preventDefault(),n(e.dataTransfer.files[0]),s(0)},onDragEnter:function(e){s((function(e){return e+1}))},onDragLeave:function(e){s((function(e){return e-1}))},onDragOver:function(e){e.preventDefault()},children:Object(h.jsx)(d.a,{as:"span",sx:{m:"auto"},children:"Drop your file here"})})}function de(e){return le.apply(this,arguments)}function le(){return(le=Object(_.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){var c=new FileReader;c.readAsText(t),c.onloadend=function(t){e(c.result)}})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function je(e){for(var t={},n=e.split("\n"),c=0;c<n.length;c++){var i=n[c];if(i.startsWith("ATOM")){var r=i.slice(16,20);4===r.length&&"A"===r[0]&&(r=r.slice(1));var a=[i.slice(0,6),i.slice(6,11),i.slice(11,16),r,i.slice(20,22),i.slice(22,26),i.slice(26,38),i.slice(38,46),i.slice(46,55)].map((function(e){return e.trim()})),s=Object(I.a)(a,9),d=s[1],l=s[2],j=s[3],o=s[4],u=s[5],b={atomId:d,atomName:l,aminoAcidName:j,aminoAcidId:u,chainName:o,x:+s[6],y:+s[7],z:+s[8]};t[o]||(t[o]={});var O=t[o];O[u]?O[u].push(b):O[u]=[b]}}return t}var oe=n(231),ue=n(245),be=n(226),Oe=n(222),he=n(246),xe=n(15);function me(e,t){var n=e[0].aminoAcidName,c=t[0].aminoAcidName;if("CYS"!==n||"CYS"!==c)return!1;var i=e.find((function(e){return"SG"===e.atomName})),r=t.find((function(e){return"SG"===e.atomName}));return!(!i||!r)&&Object(xe.distance)(i,r)<xe.DISULPHIDE_MAX_DISTANCE}var ve=n(64);function fe(e,t){return n(e,t)||n(t,e);function n(e,t){var n=e[0].aminoAcidName,c=t[0].aminoAcidName,i="265";if(e[0].aminoAcidId===i&&t[0].aminoAcidId,xe.POSITIVE_CHARGED_AMINO_ACIDS.includes(n)&&xe.NEGATIVE_CHARGED_AMINO_ACIDS.includes(c)){e[0].aminoAcidId===i&&t[0].aminoAcidId;var r,a=Object(ve.a)(e);try{for(a.s();!(r=a.n()).done;){var s,d=r.value,l=Object(ve.a)(t);try{for(l.s();!(s=l.n()).done;){var j=s.value;if(d.atomName.startsWith("N")&&"N"!==d.atomName&&j.atomName.startsWith("O")&&"O"!==j.atomName){var o=Object(xe.distance)(d,j);if(e[0].aminoAcidId===i&&t[0].aminoAcidId,o<xe.IONIC_MAX_DISTANCE&&o>xe.IONIC_MIN_DISTANCE)return e[0].aminoAcidId===i&&t[0].aminoAcidId,!0}}}catch(u){l.e(u)}finally{l.f()}}}catch(u){a.e(u)}finally{a.f()}return e[0].aminoAcidId===i&&t[0].aminoAcidId,!1}}}function pe(e,t){var n=e[0].aminoAcidName,c=t[0].aminoAcidName;if(!xe.ARYL_AMINO_ACIDS.includes(n)||!xe.ARYL_AMINO_ACIDS.includes(c))return!1;var i=Object(xe.centerOfAromaticRingOf)(e),r=Object(xe.centerOfAromaticRingOf)(t);return!(!i||!r)&&(Object(xe.distance)(i,r)>3.5&&Object(xe.distance)(i,r)<7)}function Ae(e,t){return n(e,t)||n(t,e);function n(e,t){var n=e[0].aminoAcidName,c=t[0].aminoAcidName;if(!xe.ARYL_AMINO_ACIDS.includes(n)||!["LYS","ARG"].includes(c))return!1;"50"===e[0].aminoAcidId&&t[0].aminoAcidId;var i=Object(xe.centerOfAromaticRingOf)(e);return!!i&&("LYS"===c?t.filter((function(e){return"NZ"===e.atomName})):t.filter((function(e){return["NH1","NH2","NE"].includes(e.atomName)}))).some((function(e){return Object(xe.distance)(i,e)<xe.AR_CATION_MAX_DISTANCE}))}}function Ne(e,t){return n(e,t)||n(t,e);function n(e,t){var n=e[0].aminoAcidName,c=t[0].aminoAcidName;if(!xe.ARYL_AMINO_ACIDS.includes(n)||!["CYS","MET"].includes(c))return!1;var i=Object(xe.centerOfAromaticRingOf)(e);return!!i&&("CYS"===c?t.filter((function(e){return"SG"===e.atomName})):t.filter((function(e){return"SD"===e.atomName}))).some((function(e){return Object(xe.distance)(i,e)<xe.AR_SULPHUR_MAX_DISTANCE}))}}var Ce=n(15).distance;function _e(e,t){return n(e,t)+n(t,e);function n(e,t){var n,c=0,i=Object(ve.a)(e);try{for(i.s();!(n=i.n()).done;){var r,a=n.value,s=Object(ve.a)(t);try{for(s.s();!(r=s.n()).done;){var d=r.value,l=Ce(a,d);a.atomName.startsWith("O")&&"O"!==a.atomName&&d.atomName.startsWith("O")&&"O"!==d.atomName&&l<3.5?c+=.5:(a.atomName.startsWith("N")&&d.atomName.startsWith("O")&&Math.abs(a.aminoAcidId-d.aminoAcidId)>1&&l<3.5||a.atomName.startsWith("S")&&d.atomName.startsWith("O")&&l<4)&&c++}}catch(j){s.e(j)}finally{s.f()}}}catch(j){i.e(j)}finally{i.f()}return c}}var Ie=n(15).HYDROPHOBIC_MAX_DISTANCE,ye=n(15).HYDROPHOBIC_NON_ACCEPTABLE_CARBONS,ge=n(15).HYDROPHOBIC_AMINO_ACIDS,Ee=n(15).distance;function Te(e,t){var n=e[0].aminoAcidName,c=t[0].aminoAcidName;if(!ge.includes(n)||!ge.includes(c))return!1;e=e.filter((function(e){return e.atomName.startsWith("C")&&!ye.includes(e.atomName)})),t=t.filter((function(e){return e.atomName.startsWith("C")&&!ye.includes(e.atomName)}));for(var i=0;i<e.length;i++)for(var r=0;r<t.length;r++)if(Ee(e[i],t[r])<=Ie)return!0}function Re(e){e=Object.entries(e);for(var t=[],n={},c=0;c<e.length-1;c++)for(var i=function(i){var r=e[c][1],a=e[i][1],s=e[c][0],d=e[i][0];[Te,me,fe,pe,Ae,Ne].forEach((function(e){e(r,a)&&(t.push([s,d]),n[e.name]?n[e.name].push([s,d]):n[e.name]=[[s,d]])}));var l=_e(r,a);if(l)for(var j=0;j<l;j++)t.push([s,d]),n.hydrogenBonded?n.hydrogenBonded.push([s,d]):n.hydrogenBonded=[[s,d]]},r=c+1;r<e.length;r++)i(r);return t}var Se={headers:{"Content-Type":"multipart/form-data"}},De={post:{pdb:function(e,t,n,c,i,r){var a=new FormData;return a.append("pdbFile",e),a.append("include1d",t),a.append("include2d",n),a.append("include3d",c),a.append("picResult",i),a.append("chain",r),k.post("/chemistry/pent-un-fold",a,Se)},sequence:function(e){var t=new FormData;return t.append("sequence",e),k.post("/chemistry/pent-un-fold/sequence",t,Se)}},get:function(){return k.get("/chemistry/pent-un-fold")}},Me=function(e){var t=Object(c.useState)(!1),n=Object(I.a)(t,2),i=n[0],r=n[1],a=Object(c.useState)(null),s=Object(I.a)(a,2),d=s[0],l=s[1],j=Object(c.useState)(null),o=Object(I.a)(j,2),u=o[0],b=o[1];return{error:d,result:u,loading:i,execute:Object(c.useCallback)(Object(_.a)(C.a.mark((function t(){var n,c=arguments;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r(!0),t.next=4,e.apply(void 0,c);case 4:n=t.sent,b(n),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),l(t.t0);case 11:r(!1);case 12:case"end":return t.stop()}}),t,null,[[0,8]])}))),[e]),setResult:b}};function we(){var e=Object(c.useRef)(),t=Object(c.useRef)(),n=Object(c.useRef)(),i=Object(c.useRef)(),r=Me((function(e,t){return E.apply(this,arguments)})),a=r.result,s=r.setResult,l=r.loading,j=r.execute,u=Object(c.useState)(null),b=Object(I.a)(u,2),O=b[0],x=b[1],m=Object(c.useState)(null),v=Object(I.a)(m,2),f=v[0],p=v[1],A=Object(c.useState)(""),N=Object(I.a)(A,2),y=N[0],g=N[1];return Object(h.jsxs)(d.a,{sx:{width:"250px"},children:[Object(h.jsx)(ae,{inputRef:e,innerProps:{accept:".pdb"},onFileChange:function(){var e=Object(_.a)(C.a.mark((function e(t){var n,c,i;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=T(t))){e.next=11;break}return e.next=4,de(t);case 4:c=e.sent,i=je(c),window.chains=i,p(i),g(Object.keys(i)[0]),e.next=13;break;case 11:p(null),g("");case 13:x(n);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),Object(h.jsx)("br",{}),Object(h.jsxs)(S.a,{sx:{mt:2,minWidth:1},children:[Object(h.jsx)(oe.a,{sx:{background:"#fff",mt:"-4px",px:"4px"},children:"Chain name"}),Object(h.jsx)(D.a,{variant:"outlined",label:"Chain name",value:y,onChange:function(e){return g(e.target.value)},disabled:null===f||l,children:f&&Object.keys(f).map((function(e){return Object(h.jsx)(M.a,{value:e,children:e},e)}))})]}),Object(h.jsx)(ue.a,{control:Object(h.jsx)(be.a,{inputRef:t,disabled:l}),label:"Include 1d result"}),Object(h.jsx)(ue.a,{control:Object(h.jsx)(be.a,{inputRef:n,disabled:l}),label:"Include 2d result"}),Object(h.jsx)(ue.a,{control:Object(h.jsx)(be.a,{inputRef:i,disabled:l}),label:"Include 3d result"}),Object(h.jsx)(d.a,{sx:{mt:"20px"},children:Object(h.jsxs)(d.a,{sx:{display:"flex",flexDirection:"row","& > *":{flexGrow:1}},children:[O?Object(h.jsx)(o.a,{type:"submit",variant:"contained",onClick:function(){return j(f,y)},sx:{mr:"5px"},disabled:l||!O,children:"Get result"}):Object(h.jsx)(Oe.a,{title:null===O?"Please select a file":"Only .pdb files are supported",children:Object(h.jsx)("span",{children:Object(h.jsx)(o.a,{type:"submit",variant:"contained",sx:{mr:"5px",width:"100%"},disabled:l||!O,children:"Get result"})})}),Object(h.jsx)(o.a,{type:"reset",onClick:function(){e.current.value="",s(null),p(null),g(null)},children:"Clean out"})]})}),l&&Object(h.jsx)(he.a,{sx:{mt:1,display:"block"}}),a&&Object(h.jsx)(d.a,{sx:{mt:1},children:Object(h.jsxs)(h.Fragment,{children:["Your files are ready! ",Object(h.jsx)("br",{}),"Use links below to download them: ",Object(h.jsx)("br",{}),t.current.checked?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("a",{href:a["1d"],download:"1d.xlsx",children:"1D"}),Object(h.jsx)("br",{})]}):Object(h.jsx)(h.Fragment,{}),n.current.checked?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("a",{href:a["2d"],download:"2d.xlsx",children:"2D"}),Object(h.jsx)("br",{})]}):Object(h.jsx)(h.Fragment,{}),i.current.checked?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("a",{href:a["3d"],download:"3d.xlsx",children:"3D"}),Object(h.jsx)("br",{})]}):Object(h.jsx)(h.Fragment,{}),"Links will be alive for 2 min"]})})]});function E(){return(E=Object(_.a)(C.a.mark((function c(r,a){var d,l,j,o,u,b;return C.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return s(null),c.prev=1,d=t.current.checked,l=n.current.checked,j=i.current.checked,o=j?Re(r[a]):null,c.next=8,De.post.pdb(e.current.files[0],d,l,j,o,a);case 8:return u=c.sent,b=window.location.hostname+":8080",c.abrupt("return",{"1d":b+"/chemistry/pent-un-fold/1d/"+u.data,"2d":b+"/chemistry/pent-un-fold/2d/"+u.data,"3d":b+"/chemistry/pent-un-fold/3d/"+u.data});case 13:c.prev=13,c.t0=c.catch(1),console.error(c.t0);case 16:case"end":return c.stop()}}),c,null,[[1,13]])})))).apply(this,arguments)}function T(e){return e?e.name.endsWith(".pdb"):null}}function Pe(){var e=Object(c.useState)(""),t=Object(I.a)(e,2),n=t[0],i=t[1],r=Me((function(){return function(e){return j.apply(this,arguments)}(n)})),a=r.result,s=(r.setResult,r.loading),l=r.execute;return Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{children:"Enter the amino acid sequence:"}),Object(h.jsx)(R.a,{name:"text",multiline:!0,fullWidth:!0,rows:"12",placeholder:"Example: AMFCFQCQETAKNMFCFQCQETAKNTGCTVKGMCGKPEETANLQDLLIFVLRGIAI....",value:n,onChange:function(e){return i(e.target.value)}}),Object(h.jsx)(ue.a,{control:Object(h.jsx)(be.a,{disabled:!0,checked:!0}),label:"Include 1d result"}),Object(h.jsx)("br",{}),Object(h.jsxs)(d.a,{sx:{width:"max-content"},children:[Object(h.jsx)(o.a,{type:"submit",variant:"contained",disabled:s||!n,onClick:l,children:"Get result"}),s&&Object(h.jsx)(he.a,{sx:{mt:2,display:"block"}})]}),a&&Object(h.jsxs)("div",{children:["Your file is ready! ",Object(h.jsx)("br",{}),Object(h.jsx)("a",{href:a["1d"],download:"1d.xlsx",children:"1D"})]})]});function j(){return(j=Object(_.a)(C.a.mark((function e(t){var n,c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,De.post.sequence(t);case 3:return n=e.sent,c=window.location.hostname+":8080",e.abrupt("return",{"1d":c+"/chemistry/pent-un-fold/sequence/1d/"+(null===n||void 0===n?void 0:n.data)});case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}}var Le=n(224),He=n(247),Ge=function(){var e=Object(c.useState)("pdb"),t=Object(I.a)(e,2),n=t[0],i=t[1];return Object(h.jsxs)(T.a,{sx:{pb:10,mt:1},children:[Object(h.jsxs)(Le.a,{value:n,onChange:function(e,t){return i(t)},children:[Object(h.jsx)(He.a,{label:"PDB",value:"pdb"}),Object(h.jsx)(He.a,{label:"Amino acid sequence",value:"sequence"})]}),Object(h.jsx)(ce,{value:"pdb",selected:n,children:Object(h.jsx)(we,{})}),Object(h.jsx)(ce,{selected:n,value:"sequence",children:Object(h.jsx)(Pe,{})})]})},ke=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(x,{}),Object(h.jsxs)(m.c,{children:[Object(h.jsx)(m.a,{path:"/login",component:$}),Object(h.jsx)(m.a,{path:"/register",component:J}),Object(h.jsx)(m.a,{path:"/mystery",component:Y}),Object(h.jsx)(m.a,{path:"/analyzer",component:U}),Object(h.jsx)(m.a,{path:"/counter",component:V}),Object(h.jsx)(m.a,{path:"/accelerator",component:B}),Object(h.jsx)(m.a,{path:"/pent-un-fold",component:Ge}),Object(h.jsx)(m.a,{path:"/",component:A})]})]})},Fe=n(115),Be=n(232),Ye=n(221),Ue=n(58),We=Object(Fe.a)({palette:{primary:Ye.a,secondary:Ue.a}});a.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(s.a,{children:Object(h.jsx)(Be.a,{theme:We,children:Object(h.jsx)(ke,{})})})}),document.getElementById("root"))},19:function(e,t,n){e.exports={container:"periodicTable_container__2ba7-",periodicTable:"periodicTable_periodicTable__2za7i",s:"periodicTable_s__1oQGQ",p:"periodicTable_p__1MuXG",d:"periodicTable_d__2X7_M",f:"periodicTable_f__22UYB"}},71:function(e,t,n){e.exports={home:"home_home__2DRgy",planets:"home_planets__spi-w",title:"home_title__3SdOf"}},95:function(e,t,n){e.exports={form:"register_form__3Gw2m",wrapper:"register_wrapper__-HiLA"}}},[[165,1,2]]]);
//# sourceMappingURL=main.296e202b.chunk.js.map