(this.webpackJsonpaccelerator=this.webpackJsonpaccelerator||[]).push([[0],{104:function(e,t,n){e.exports={form:"register_form__3Gw2m",wrapper:"register_wrapper__-HiLA"}},124:function(e,t,n){e.exports={number1:"counter_number1__17RoF",number2:"counter_number2__3cqSQ",number3:"counter_number3__q2MXd",number4:"counter_number4__1IHFD",number5:"counter_number5__zQ-rz",number6:"counter_number6__1iAVx",number7:"counter_number7__273x1",number8:"counter_number8__xz319",number9:"counter_number9__3D0ov",number10:"counter_number10__3ESUA",number11:"counter_number11__2XTPQ",number12:"counter_number12__1JTpu",number13:"counter_number13__3C8hA",number14:"counter_number14__3Fr3f",number15:"counter_number15__1SRHj",number16:"counter_number16__1EQiU",number17:"counter_number17__2Y5Rx",number18:"counter_number18__2gwsb",number19:"counter_number19__1cSdX",number20:"counter_number20__3bf4l",round:"counter_round__3mJmE",gistogramm:"counter_gistogramm__1NGrR",resultContainer:"counter_resultContainer__1Qlh9"}},149:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t),n.d(t,"DISULPHIDE_MAX_DISTANCE",(function(){return i})),n.d(t,"HYDROPHOBIC_AMINO_ACIDS",(function(){return r})),n.d(t,"HYDROPHOBIC_NON_ACCEPTABLE_CARBONS",(function(){return a})),n.d(t,"HYDROPHOBIC_MAX_DISTANCE",(function(){return s})),n.d(t,"POSITIVE_CHARGED_AMINO_ACIDS",(function(){return d})),n.d(t,"NEGATIVE_CHARGED_AMINO_ACIDS",(function(){return l})),n.d(t,"IONIC_MIN_DISTANCE",(function(){return j})),n.d(t,"IONIC_MAX_DISTANCE",(function(){return o})),n.d(t,"ARYL_AMINO_ACIDS",(function(){return u})),n.d(t,"AR_AR_MIN_DISTANCE",(function(){return b})),n.d(t,"AR_AR_MAX_DISTANCE",(function(){return h})),n.d(t,"AR_CATION_MAX_DISTANCE",(function(){return O})),n.d(t,"AR_SULPHUR_MAX_DISTANCE",(function(){return x})),n.d(t,"distance",(function(){return m})),n.d(t,"centerOfAromaticRingOf",(function(){return f}));var c=n(9),i=Math.pow(2.2,1),r=["ALA","VAL","LEU","ILE","MET","PHE","TRP","PRO","TYR"],a=["C","CA"],s=Math.pow(5,1),d=["ARG","LYS","HIS"],l=["ASP","GLU"],j=Math.pow(3.5,1),o=Math.pow(6,1),u=["PHE","TYR","TRP"],b=Math.pow(3.5,1),h=Math.pow(7,1),O=6,x=5.3;function m(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2)+Math.pow(e.z-t.z,2))}function f(e){switch(e[0].aminoAcidName){case"PHE":case"TYR":return function(e){for(var t=function(){var t=Object(c.a)(i[n],2),r=t[0],a=t[1],s=e.find((function(e){return e.atomName===r})),d=e.find((function(e){return e.atomName===a}));return void 0===s||void 0===d?"continue":{v:{x:(s.x+d.x)/2,y:(s.y+d.y)/2,z:(s.z+d.z)/2}}},n=0,i=[["CG","CZ"],["CD1","CE2"],["CD1","CE2"]];n<i.length;n++){var r=t();if("continue"!==r&&"object"===typeof r)return r.v}}(e);case"TRP":return function(e){for(var t=function(){var t=Object(c.a)(i[n],2),r=t[0],a=t[1],s=e.find((function(e){return e.atomName===r})),d=e.find((function(e){return e.atomName===a}));return void 0===s||void 0===d?"continue":{v:{x:(s.x+d.x)/2,y:(s.y+d.y)/2,z:(s.z+d.z)/2}}},n=0,i=[["CD2","CH2"],["CE2","CZ3"],["CE3","CZ2"]];n<i.length;n++){var r=t();if("continue"!==r&&"object"===typeof r)return r.v}}(e);default:console.error("NOT AROMATIC")}}window.distance=m},177:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),r=n(48),a=n.n(r),s=(n(148),n(149),n(57)),d=n(249),l=n(250),j=n(252),o=n(253),u=n.p+"static/media/new-title.812a026e.png",b=n(74),h=n.n(b),O=n(0),x=function(){return Object(O.jsx)(d.a,{sx:{flexGrow:1},children:Object(O.jsx)(l.a,{position:"static",children:Object(O.jsxs)(j.a,{children:[Object(O.jsx)(d.a,{sx:{flexGrow:1,"& a":{color:"#fff",textDecoration:"none",fontSize:"2rem","&:hover":{color:"primary.light"}}},children:Object(O.jsxs)(d.a,{children:[Object(O.jsx)(s.b,{to:"/",children:Object(O.jsx)("img",{src:u,className:h.a.title,alt:""})}),Object(O.jsx)(d.a,{as:"span",sx:{position:"relative",bottom:"-3px",color:"#ddd"},children:"v 1.0.6"})]})}),Object(O.jsx)(o.a,{color:"inherit",children:"Login"})]})})})},m=n(21),f={"& a":{textDecoration:"none"}},v=function(e){var t=e.to,n=e.text,c=e.disabled;return Object(O.jsx)(d.a,{sx:f,children:c?Object(O.jsx)(o.a,{variant:"outlined",disabled:!0,children:n}):Object(O.jsx)(s.b,{to:t,children:Object(O.jsx)(o.a,{variant:"outlined",children:n})})})},p=n.p+"static/media/planet.5c6e7a8f.jpg",A=function(){return Object(O.jsxs)("div",{className:h.a.home,children:[Object(O.jsx)("div",{className:h.a.planets,children:Object(O.jsx)("img",{src:p,alt:""})}),Object(O.jsxs)("div",{className:"container",children:[Object(O.jsxs)("div",{className:"row",children:[Object(O.jsxs)("div",{className:"col-md-4",children:[Object(O.jsx)("h2",{children:"Accelerator"}),Object(O.jsx)("p",{children:"Increases the speed of processing PDB files. It computes the length between the desired ligand and the nearest atom. As a result, we have a list of binding sites and long links."}),Object(O.jsx)(v,{to:"/accelerator",text:"Accelerate up"})]}),Object(O.jsxs)("div",{className:"col-md-4",children:[Object(O.jsx)("h2",{children:"Counter"}),Object(O.jsx)("p",{children:"Calculates the content of all amino acids in the amino acid sequence of the introduced protein. The prevailing amino acid is determined. The result is displayed in the form of a diagram."}),Object(O.jsx)(v,{to:"/counter",text:"Count up"})]}),Object(O.jsxs)("div",{className:"col-md-4",children:[Object(O.jsx)("h2",{children:"Analyzer"}),Object(O.jsx)("p",{children:"Analyzes the entered amino acid sequence. Calculates the fidelity of the bonds of the selected ligand with the given protein. Indicates hypothetical binding sites and their amino acid composition."}),Object(O.jsx)(v,{to:"/analyzer",text:"To analyze",disabled:!0})]})]}),Object(O.jsxs)("div",{className:"row",children:[Object(O.jsxs)("div",{className:"col-md-4",children:[Object(O.jsx)("h2",{children:"Mystery"}),Object(O.jsx)("p",{children:"I myself do not yet know what will come of this in the future, but so far the literal lasting is simply converted to amino acid."}),Object(O.jsx)(v,{to:"/mystery",text:"Go to mystery",disabled:!0})]}),Object(O.jsxs)("div",{className:"col-md-4",children:[Object(O.jsx)("h2",{children:"Pent Unfold"}),Object(O.jsx)("p",{children:"I myself do not yet know what will come of this in the future, but so far the literal lasting is simply converted to amino acid."}),Object(O.jsx)(v,{to:"/pent-un-fold",text:"To calculate"})]})]}),Object(O.jsx)("hr",{}),Object(O.jsx)("footer",{children:Object(O.jsx)("p",{children:"\u24b8 \u24c5 Product created by @ Khrustalev & Kasko, 2019"})})]})]})},N=n(26),C=n.n(N),_=n(43),g=n(9),y=n(20),I=n.n(y),T=function(e){var t=e.setElement,n=e.visible,i=e.setVisible;return Object(c.useEffect)((function(){document.body.style.overflow=n?"hidden":""}),[n]),n?Object(r.createPortal)(Object(O.jsx)("div",{className:I.a.container,onClick:function(e){e.target===e.currentTarget&&i(!1),e.stopPropagation()},children:Object(O.jsxs)("div",{className:I.a.periodicTable,onClick:function(e){t(e.target.innerText),i(!1)},children:[Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:I.a.s,children:[Object(O.jsx)("div",{children:"H"}),Object(O.jsx)("div",{children:"Li"}),Object(O.jsx)("div",{children:"Na"}),Object(O.jsx)("div",{children:"K"}),Object(O.jsx)("div",{children:"Rb"}),Object(O.jsx)("div",{children:"Cs"}),Object(O.jsx)("div",{children:"Fr"})]}),Object(O.jsxs)("div",{className:I.a.s,children:[Object(O.jsx)("div",{children:"Be"}),Object(O.jsx)("div",{children:"Mg"}),Object(O.jsx)("div",{children:"Ca"}),Object(O.jsx)("div",{children:"Sr"}),Object(O.jsx)("div",{children:"Ba"}),Object(O.jsx)("div",{children:"Ra"})]}),Object(O.jsxs)("div",{className:I.a.d,children:[Object(O.jsx)("div",{children:"Sc"}),Object(O.jsx)("div",{children:"Y"}),Object(O.jsx)("div",{children:"-"}),Object(O.jsx)("div",{children:"-"})]}),Object(O.jsxs)("div",{className:I.a.d,children:[Object(O.jsx)("div",{children:"Ti"}),Object(O.jsx)("div",{children:"Zr"}),Object(O.jsx)("div",{children:"Hf"}),Object(O.jsx)("div",{children:"Rf"})]}),Object(O.jsxs)("div",{className:I.a.d,children:[Object(O.jsx)("div",{children:"V"}),Object(O.jsx)("div",{children:"Nb"}),Object(O.jsx)("div",{children:"Ta"}),Object(O.jsx)("div",{children:"Db"})]}),Object(O.jsxs)("div",{className:I.a.d,children:[Object(O.jsx)("div",{children:"Cr"}),Object(O.jsx)("div",{children:"Mo"}),Object(O.jsx)("div",{children:"W"}),Object(O.jsx)("div",{children:"Sg"})]}),Object(O.jsxs)("div",{className:I.a.d,children:[Object(O.jsx)("div",{children:"Mn"}),Object(O.jsx)("div",{children:"Tc"}),Object(O.jsx)("div",{children:"Re"}),Object(O.jsx)("div",{children:"Bh"})]}),Object(O.jsxs)("div",{className:I.a.d,children:[Object(O.jsx)("div",{children:"Fe"}),Object(O.jsx)("div",{children:"Ru"}),Object(O.jsx)("div",{children:"Os"}),Object(O.jsx)("div",{children:"Hs"})]}),Object(O.jsxs)("div",{className:I.a.d,children:[Object(O.jsx)("div",{children:"Co"}),Object(O.jsx)("div",{children:"Rh"}),Object(O.jsx)("div",{children:"Ir"}),Object(O.jsx)("div",{children:"Mt"})]}),Object(O.jsxs)("div",{className:I.a.d,children:[Object(O.jsx)("div",{children:"Ni"}),Object(O.jsx)("div",{children:"Pd"}),Object(O.jsx)("div",{children:"Pt"}),Object(O.jsx)("div",{children:"Ds"})]}),Object(O.jsxs)("div",{className:I.a.d,children:[Object(O.jsx)("div",{children:"Cu"}),Object(O.jsx)("div",{children:"Ag"}),Object(O.jsx)("div",{children:"Au"}),Object(O.jsx)("div",{children:"Rg"})]}),Object(O.jsxs)("div",{className:I.a.d,children:[Object(O.jsx)("div",{children:"Zn"}),Object(O.jsx)("div",{children:"Cd"}),Object(O.jsx)("div",{children:"Hg"}),Object(O.jsx)("div",{children:"Cn"})]}),Object(O.jsxs)("div",{className:I.a.p,children:[Object(O.jsx)("div",{children:"B"}),Object(O.jsx)("div",{children:"Al"}),Object(O.jsx)("div",{children:"Ga"}),Object(O.jsx)("div",{children:"In"}),Object(O.jsx)("div",{children:"Ti"}),Object(O.jsx)("div",{children:"Uut"})]}),Object(O.jsxs)("div",{className:I.a.p,children:[Object(O.jsx)("div",{children:"C"}),Object(O.jsx)("div",{children:"Si"}),Object(O.jsx)("div",{children:"Ge"}),Object(O.jsx)("div",{children:"Sn"}),Object(O.jsx)("div",{children:"Rb"}),Object(O.jsx)("div",{children:"Fl"})]}),Object(O.jsxs)("div",{className:I.a.p,children:[Object(O.jsx)("div",{children:"N"}),Object(O.jsx)("div",{children:"P"}),Object(O.jsx)("div",{children:"As"}),Object(O.jsx)("div",{children:"Sb"}),Object(O.jsx)("div",{children:"Bi"}),Object(O.jsx)("div",{children:"Uup"})]}),Object(O.jsxs)("div",{className:I.a.p,children:[Object(O.jsx)("div",{children:"O"}),Object(O.jsx)("div",{children:"S"}),Object(O.jsx)("div",{children:"Se"}),Object(O.jsx)("div",{children:"Te"}),Object(O.jsx)("div",{children:"Po"}),Object(O.jsx)("div",{children:"Lv"})]}),Object(O.jsxs)("div",{className:I.a.p,children:[Object(O.jsx)("div",{children:"F"}),Object(O.jsx)("div",{children:"Cl"}),Object(O.jsx)("div",{children:"Br"}),Object(O.jsx)("div",{children:"I"}),Object(O.jsx)("div",{children:"At"}),Object(O.jsx)("div",{children:"Uus"})]}),Object(O.jsxs)("div",{className:I.a.p,children:[Object(O.jsx)("div",{children:"He"}),Object(O.jsx)("div",{children:"Ne"}),Object(O.jsx)("div",{children:"Ar"}),Object(O.jsx)("div",{children:"Kr"}),Object(O.jsx)("div",{children:"Xe"}),Object(O.jsx)("div",{children:"Rn"}),Object(O.jsx)("div",{children:"Uuo"})]})]}),Object(O.jsxs)("div",{className:I.a.f,children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{children:"La"}),Object(O.jsx)("div",{children:"Ac"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{children:"La"}),Object(O.jsx)("div",{children:"Ac"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{children:"La"}),Object(O.jsx)("div",{children:"Ac"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{children:"La"}),Object(O.jsx)("div",{children:"Ac"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{children:"La"}),Object(O.jsx)("div",{children:"Ac"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{children:"La"}),Object(O.jsx)("div",{children:"Ac"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{children:"La"}),Object(O.jsx)("div",{children:"Ac"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{children:"La"}),Object(O.jsx)("div",{children:"Ac"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{children:"La"}),Object(O.jsx)("div",{children:"Ac"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{children:"La"}),Object(O.jsx)("div",{children:"Ac"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{children:"La"}),Object(O.jsx)("div",{children:"Ac"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{children:"La"}),Object(O.jsx)("div",{children:"Ac"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{children:"La"}),Object(O.jsx)("div",{children:"Ac"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{children:"La"}),Object(O.jsx)("div",{children:"Ac"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{children:"La"}),Object(O.jsx)("div",{children:"Ac"})]})]})]})}),document.body):null},S=n(254),E=n(244),R=n(257),D=n(237),w=n(241),M=n(258),P=n(242),L=n.p+"static/media/periodic-table.37385c77.svg",k=["H","He","Li","Be","B","C","N","O","F","Ne","Na","Mg","Al","Si","P","S","Cl","Ar","K","Ca","Sc","Ti","V","Cr","Mn","Fe","Co","Ni","Cu","Zn","Ga","Ge","As","Se","Br","Kr","Rb","Sr","Y","Zr","Nb","Mo","Tc","Ru","Rh","Pd","Ag","Cd","In","Sn","Sb","Te","I","Xe","Cs","Ba","La","Ce","Pr","Nd","Pm","Sm","Eu","Gd","Tb","Dy","Ho","Er","Tm","Yb","Lu","Hf","Ta","W","Re","Os","Ir","Pt","Au","Hg","Tl","Pb","Bi","Po","At","Rn","Fr","Ra","Ac","Th","Pa","U","Np","Pu","Am","Cm","Bk","Cf","Es","Fm","Md","No","Lr","Rf","Db","Sg","Bh","Hs","Mt"],H=n(99),F=n.n(H).a.create({baseURL:"http://"+window.location.hostname+":8080"}),G={post:function(e,t,n){return F.post("/chemistry/ligand-position",{ligandName:e,maxAcceptableDistance:t,PDBFile:n})},get:function(){return F.get("/chemistry/ligand-position")}},B=function(){var e=Object(c.useRef)(),t=Object(c.useState)("H"),n=Object(g.a)(t,2),i=n[0],r=n[1],a=Object(c.useState)(.01),s=Object(g.a)(a,2),l=s[0],j=s[1],u=Object(c.useState)(),b=Object(g.a)(u,2),h=b[0],x=b[1];return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(T,{visible:h,setVisible:x,setElement:function(e){r(e)}}),Object(O.jsxs)(S.a,{sx:{pb:10,mt:1},children:[Object(O.jsx)("p",{children:"Copy and paste the text in PDB file:"}),Object(O.jsx)(E.a,{sx:{"& .Mui-focused":{backgroundColor:"#fff"}},rows:12,fullWidth:!0,multiline:!0,inputRef:e,label:"PDB file",placeholder:"HEADER    OXIDOREDUCTASE                          18-MAY-11   3S3C              \nTITLE     STRUCTURE OF THERMUS THERMOPHILUS CYTOCHROME BA3 OXIDASE 360S AFTER XE\nTITLE    2 DEPRESSURIZATION                                                     \nCOMPND    MOL_ID: 1;                                                            \nCOMPND   2 MOLECULE: CYTOCHROME C OXIDASE SUBUNIT 1;                            \nCOMPND   3 CHAIN: A;                                                            \nCOMPND   4 SYNONYM: CYTOCHROME C BA(3) SUBUNIT I, CYTOCHROME C OXIDASE          \nCOMPND   5 POLYPEPTIDE I, CYTOCHROME CBA3 SUBUNIT 1;                            \nCOMPND   6 EC: 1.9.3.1;                                                         \nCOMPND   7 ENGINEERED: YES;                                                     \nCOMPND   8 MOL_ID: 2; ..."}),Object(O.jsxs)(d.a,{sx:{display:"flex",flexDirection:"column"},children:[Object(O.jsx)(d.a,{sx:{mt:1,mb:.5},children:"Element to calculate"}),Object(O.jsxs)("div",{children:[Object(O.jsx)(R.a,{children:Object(O.jsx)(D.a,{autoWidth:!0,label:"Element",sx:{minWidth:"70px"},value:i||"H",onChange:function(e){r(e.target.value)},children:k.map((function(e){return Object(O.jsx)(w.a,{value:e,children:e},e)}))})}),Object(O.jsx)(M.a,{sx:{ml:"3px"},onClick:function(){return x(!0)},children:Object(O.jsx)("img",{alt:"Select element button",src:L,width:40,height:40})})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)(d.a,{sx:{mt:1,mb:.5},children:"Max acceptable distance, \xc5"}),Object(O.jsxs)(d.a,{sx:{display:"flex"},children:[Object(O.jsx)("div",{children:Object(O.jsx)(E.a,{type:"number",variant:"standard",value:l||"",onChange:function(e){var t=+e.target.value;t=Math.max(0,t),t=Math.min(10,t),j(t)}})}),Object(O.jsx)("div",{children:Object(O.jsx)(P.a,{min:0,max:10,step:.01,valueLabelDisplay:"on",sx:{width:"200px",ml:3},value:l,onChange:function(e){j(e.target.value)}})})]})]})]}),Object(O.jsxs)(d.a,{sx:{mt:1},children:[Object(O.jsx)(o.a,{type:"submit",variant:"contained",onClick:function(){return m.apply(this,arguments)},sx:{mr:"5px"},children:"Get result"}),Object(O.jsx)(o.a,{type:"reset",onClick:function(){e.current.value="",j(.01),r("H")},children:"Clean out"})]})]})]});function m(){return(m=Object(_.a)(C.a.mark((function t(){var n;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,G.post(i,l,e.current.value);case 2:n=t.sent,console.log("post response",n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},Y=function(){return Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("p",{children:"Copy and paste the amino acid sequence:"}),Object(O.jsxs)("form",{method:"post",children:[Object(O.jsx)("div",{className:"divTextArea",children:Object(O.jsx)("textarea",{name:"text",rows:"12",placeholder:"Enter all data from the amino acid sequence:"})}),Object(O.jsx)("input",{type:"hidden"}),Object(O.jsxs)("p",{className:"buttons",children:[Object(O.jsx)("button",{type:"submit",children:"Get result"}),Object(O.jsx)("button",{type:"reset",children:"Clean out"})]})]})]})},U=function(){return Object(O.jsx)("div",{children:"Not implemented"})},z=n(15),W=n(124),X=n.n(W),Q=n(103),q=["Amino acid","Percent"],V=function(){var e=i.a.createRef(),t=i.a.useState(),n=Object(g.a)(t,2),c=n[0],r=n[1];return Object(O.jsxs)(S.a,{sx:{mt:1,pb:10},children:[Object(O.jsx)("p",{children:"Enter the amino acid sequence:"}),Object(O.jsx)(E.a,{name:"text",multiline:!0,fullWidth:!0,rows:"12",placeholder:"Example: AMFCFQCQETAKNMFCFQCQETAKNTGCTVKGMCGKPEETANLQDLLIFVLRGIAI....",inputRef:e}),Object(O.jsxs)(d.a,{sx:{my:1},children:[Object(O.jsx)(o.a,{type:"submit",variant:"contained",onClick:function(){console.log("textAreaRef",e);var t={A:"Alanine",R:"Arginine",N:"Asparagine",D:"Aspartic Acid",C:"Cysteine",E:"Glutamic Acid",Q:"Glutamine",G:"Glycine",H:"Histidine",I:"Isoleucine",L:"Leucine",K:"Lysine",M:"Methionine",F:"Phenylalanine",P:"Proline",S:"Serine",T:"Threonine",W:"Tryptophan",Y:"Tyrosine",V:"Valine"},n=e.current.value,c={};Object(z.a)(n).filter((function(e){return t[e]})).forEach((function(e){return c[e]?c[e]++:c[e]=1})),c=Object.entries(c).map((function(e){var n=Object(g.a)(e,2),c=n[0],i=n[1];return[t[c],i]}));var i=[q].concat(Object(z.a)(c));r(i)},sx:{mr:1},children:"Get result"}),Object(O.jsx)(o.a,{type:"reset",onClick:function(){e.current.value="",r(void 0)},children:"Clean out"})]}),void 0!==c&&Object(O.jsxs)("div",{className:X.a.resultContainer,children:[Object(O.jsx)(Q.a,{chartType:"Table",data:c,width:"100%",legendToggle:!0}),Object(O.jsx)(Q.a,{chartType:"PieChart",data:c,width:"100%",legendToggle:!0,options:{is3D:!0}})]})]})},K=n(104),Z=n.n(K),J=function(){return Object(O.jsx)("div",{className:Z.a.wrapper,children:Object(O.jsxs)("div",{className:Z.a.form,children:[Object(O.jsx)("label",{className:"form-label",children:"Email address"}),Object(O.jsx)("input",{type:"email",className:"form-control",placeholder:"name@example.com"}),Object(O.jsx)("label",{className:"form-label",children:"Password"}),Object(O.jsx)("input",{type:"pssword",className:"form-control",placeholder:"********"}),Object(O.jsx)("button",{type:"button",className:"mt-2 center",children:"Login"})]})})},$=function(){return Object(O.jsx)("div",{children:"Login Page"})},ee=n(66),te=n(128),ne=["children","selected","value"];function ce(e){var t=e.children,n=e.selected,c=e.value,i=Object(te.a)(e,ne);return Object(O.jsx)("div",Object(ee.a)(Object(ee.a)({role:"tabpanel",hidden:n!==c,"aria-labelledby":"simple-tab-".concat(c)},i),{},{children:n===c&&Object(O.jsx)(d.a,{sx:{p:0},children:t})}))}var ie=n(259),re=n(234),ae=n(126),se=n.n(ae),de=function(e){var t=Object(c.useRef)(),n=Object(c.useState)(null),i=Object(g.a)(n,2),r=i[0],a=i[1];return Object(c.useEffect)((function(){e.onFileChange&&e.onFileChange(r)}),[(null===r||void 0===r?void 0:r.name)+(null===r||void 0===r?void 0:r.size)]),Object(c.useEffect)((function(){e.inputRef&&(e.inputRef.current=new Proxy(t.current,{set:function(e,n,c){return e[n]=c,a(t.current.files[0]),!0},get:function(e,t){return e[t]}}))}),[e.inputRef]),Object(O.jsxs)(d.a,{as:"label",sx:{width:"100%",maxHeight:"280px"},children:[Object(O.jsx)("input",Object(ee.a)(Object(ee.a)({type:"file",ref:t,hidden:!0},e.innerProps),{},{onChange:function(e){a(e.target.files[0])}})),Object(O.jsx)(d.a,{sx:{width:"100%",maxHeight:"280px"},children:Object(O.jsx)(le,{file:r,setFile:a})})]})};function le(e){var t=e.file,n=e.setFile,i=Object(c.useState)(0),r=Object(g.a)(i,2),a=r[0],s=r[1],l=0!==a,j=Object(c.useRef)(),o=Object(c.useState)(0),u=Object(g.a)(o,2),b=(u[0],u[1]);return Object(c.useLayoutEffect)((function(){b(j.current.offsetWidth)}),[]),Object(O.jsx)(d.a,{sx:{width:1,height:"280px",border:"1px dashed",borderRadius:"5px",backgroundColor:"#F8F8FF",borderColor:function(e){return l||t?e.palette.primary.main:"#666"},transition:"border-color 0.22s",mt:1,display:"flex",cursor:"pointer"},ref:j,onDrop:function(e){e.preventDefault(),n(e.dataTransfer.files[0]),s(0)},onDragEnter:function(e){s((function(e){return e+1}))},onDragLeave:function(e){s((function(e){return e-1}))},onDragOver:function(e){e.preventDefault()},children:Object(O.jsx)(d.a,{sx:{m:"auto"},children:Object(O.jsxs)("section",{children:[Object(O.jsxs)(d.a,{sx:{textAlign:"center",color:"#808080",typography:"body2"},children:[Object(O.jsx)(se.a,{sx:{fontSize:50},color:"primary"}),Object(O.jsx)("p",{children:"Drag and drop your file anywhere"})]}),Object(O.jsx)(d.a,{sx:{textAlign:"center"},children:Object(O.jsx)(E.a,{variant:"outlined",size:"small",sx:{width:"80%",paddingTop:"15%",position:"center"},placeholder:"file.pdb",value:(null===t||void 0===t?void 0:t.name)||"",fullWidth:!0,inputProps:{min:0,style:{paddingLeft:"10%"}},InputProps:{startAdornment:Object(O.jsx)(ie.a,{position:"end",children:Object(O.jsx)(M.a,{as:d.a,sx:{cursor:"pointer"},color:"primary",children:Object(O.jsx)(re.a,{})})})}})})]})})})}function je(e){return oe.apply(this,arguments)}function oe(){return(oe=Object(_.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){var c=new FileReader;c.readAsText(t),c.onloadend=function(t){e(c.result)}})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ue(e){for(var t={},n=e.split("\n"),c=0;c<n.length;c++){var i=n[c];if(i.startsWith("ATOM")){var r=i.slice(16,20);4===r.length&&"A"===r[0]&&(r=r.slice(1));var a=[i.slice(0,6),i.slice(6,11),i.slice(11,16),r,i.slice(20,22),i.slice(22,26),i.slice(26,38),i.slice(38,46),i.slice(46,55)].map((function(e){return e.trim()})),s=Object(g.a)(a,9),d=s[1],l=s[2],j=s[3],o=s[4],u=s[5],b={atomId:d,atomName:l,aminoAcidName:j,aminoAcidId:u,chainName:o,x:+s[6],y:+s[7],z:+s[8]};t[o]||(t[o]={});var h=t[o];h[u]?h[u].push(b):h[u]=[b]}}return t}var be=n(261),he=n(248),Oe=n(245),xe=n(262),me=n(263),fe=n(243),ve=n(236),pe=n(16);function Ae(e,t){var n=e[0].aminoAcidName,c=t[0].aminoAcidName;if("CYS"!==n||"CYS"!==c)return!1;var i=e.find((function(e){return"SG"===e.atomName})),r=t.find((function(e){return"SG"===e.atomName}));return!(!i||!r)&&Object(pe.distance)(i,r)<pe.DISULPHIDE_MAX_DISTANCE}var Ne=n(67);function Ce(e,t){return n(e,t)||n(t,e);function n(e,t){var n=e[0].aminoAcidName,c=t[0].aminoAcidName,i="265";if(e[0].aminoAcidId===i&&t[0].aminoAcidId,pe.POSITIVE_CHARGED_AMINO_ACIDS.includes(n)&&pe.NEGATIVE_CHARGED_AMINO_ACIDS.includes(c)){e[0].aminoAcidId===i&&t[0].aminoAcidId;var r,a=Object(Ne.a)(e);try{for(a.s();!(r=a.n()).done;){var s,d=r.value,l=Object(Ne.a)(t);try{for(l.s();!(s=l.n()).done;){var j=s.value;if(d.atomName.startsWith("N")&&"N"!==d.atomName&&j.atomName.startsWith("O")&&"O"!==j.atomName){var o=Object(pe.distance)(d,j);if(e[0].aminoAcidId===i&&t[0].aminoAcidId,o<pe.IONIC_MAX_DISTANCE&&o>pe.IONIC_MIN_DISTANCE)return e[0].aminoAcidId===i&&t[0].aminoAcidId,!0}}}catch(u){l.e(u)}finally{l.f()}}}catch(u){a.e(u)}finally{a.f()}return e[0].aminoAcidId===i&&t[0].aminoAcidId,!1}}}function _e(e,t){var n=e[0].aminoAcidName,c=t[0].aminoAcidName;if(!pe.ARYL_AMINO_ACIDS.includes(n)||!pe.ARYL_AMINO_ACIDS.includes(c))return!1;var i=Object(pe.centerOfAromaticRingOf)(e),r=Object(pe.centerOfAromaticRingOf)(t);return!(!i||!r)&&(Object(pe.distance)(i,r)>3.5&&Object(pe.distance)(i,r)<7)}function ge(e,t){return n(e,t)||n(t,e);function n(e,t){var n=e[0].aminoAcidName,c=t[0].aminoAcidName;if(!pe.ARYL_AMINO_ACIDS.includes(n)||!["LYS","ARG"].includes(c))return!1;"50"===e[0].aminoAcidId&&t[0].aminoAcidId;var i=Object(pe.centerOfAromaticRingOf)(e);return!!i&&("LYS"===c?t.filter((function(e){return"NZ"===e.atomName})):t.filter((function(e){return["NH1","NH2","NE"].includes(e.atomName)}))).some((function(e){return Object(pe.distance)(i,e)<pe.AR_CATION_MAX_DISTANCE}))}}function ye(e,t){return n(e,t)||n(t,e);function n(e,t){var n=e[0].aminoAcidName,c=t[0].aminoAcidName;if(!pe.ARYL_AMINO_ACIDS.includes(n)||!["CYS","MET"].includes(c))return!1;var i=Object(pe.centerOfAromaticRingOf)(e);return!!i&&("CYS"===c?t.filter((function(e){return"SG"===e.atomName})):t.filter((function(e){return"SD"===e.atomName}))).some((function(e){return Object(pe.distance)(i,e)<pe.AR_SULPHUR_MAX_DISTANCE}))}}var Ie=n(16).distance;function Te(e,t){return n(e,t)+n(t,e);function n(e,t){var n,c=0,i=Object(Ne.a)(e);try{for(i.s();!(n=i.n()).done;){var r,a=n.value,s=Object(Ne.a)(t);try{for(s.s();!(r=s.n()).done;){var d=r.value,l=Ie(a,d);a.atomName.startsWith("O")&&"O"!==a.atomName&&d.atomName.startsWith("O")&&"O"!==d.atomName&&l<3.5?c+=.5:(a.atomName.startsWith("N")&&d.atomName.startsWith("O")&&Math.abs(a.aminoAcidId-d.aminoAcidId)>1&&l<3.5||a.atomName.startsWith("S")&&d.atomName.startsWith("O")&&l<4)&&c++}}catch(j){s.e(j)}finally{s.f()}}}catch(j){i.e(j)}finally{i.f()}return c}}var Se=n(16).HYDROPHOBIC_MAX_DISTANCE,Ee=n(16).HYDROPHOBIC_NON_ACCEPTABLE_CARBONS,Re=n(16).HYDROPHOBIC_AMINO_ACIDS,De=n(16).distance;function we(e,t){var n=e[0].aminoAcidName,c=t[0].aminoAcidName;if(!Re.includes(n)||!Re.includes(c))return!1;e=e.filter((function(e){return e.atomName.startsWith("C")&&!Ee.includes(e.atomName)})),t=t.filter((function(e){return e.atomName.startsWith("C")&&!Ee.includes(e.atomName)}));for(var i=0;i<e.length;i++)for(var r=0;r<t.length;r++)if(De(e[i],t[r])<=Se)return!0}function Me(e){e=Object.entries(e);for(var t=[],n={},c=0;c<e.length-1;c++)for(var i=function(i){var r=e[c][1],a=e[i][1],s=e[c][0],d=e[i][0];[we,Ae,Ce,_e,ge,ye].forEach((function(e){e(r,a)&&(t.push([s,d]),n[e.name]?n[e.name].push([s,d]):n[e.name]=[[s,d]])}));var l=Te(r,a);if(l)for(var j=0;j<l;j++)t.push([s,d]),n.hydrogenBonded?n.hydrogenBonded.push([s,d]):n.hydrogenBonded=[[s,d]]},r=c+1;r<e.length;r++)i(r);return t}var Pe={headers:{"Content-Type":"multipart/form-data"}},Le={post:{pdb:function(e,t,n,c,i,r,a){var s=new FormData;return s.append("pdbFile",e),s.append("include1d",t),s.append("include2d",n),s.append("include3d",c),s.append("picResult",i),s.append("chain",r),s.append("isFileNeeded",!a),F.post("/chemistry/pent-un-fold",s,Pe)},sequence:function(e){var t=new FormData;return t.append("sequence",e),F.post("/chemistry/pent-un-fold/sequence",t,Pe)}},get:function(){return F.get("/chemistry/pent-un-fold")}},ke=function(e){var t=Object(c.useState)(!1),n=Object(g.a)(t,2),i=n[0],r=n[1],a=Object(c.useState)(null),s=Object(g.a)(a,2),d=s[0],l=s[1],j=Object(c.useState)(null),o=Object(g.a)(j,2),u=o[0],b=o[1];return{error:d,result:u,loading:i,execute:Object(c.useCallback)(Object(_.a)(C.a.mark((function t(){var n,c=arguments;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r(!0),t.next=4,e.apply(void 0,c);case 4:n=t.sent,b(n),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),l(t.t0);case 11:r(!1);case 12:case"end":return t.stop()}}),t,null,[[0,8]])}))),[e]),setResult:b}},He=n(239),Fe=n(87),Ge=n.n(Fe);function Be(){var e=Object(c.useRef)(),t=Object(c.useRef)(),n=Object(c.useRef)(),i=Object(c.useRef)(),r=Object(c.useRef)(),a=ke((function(e,t){return S.apply(this,arguments)})),s=a.result,l=a.setResult,j=a.loading,u=a.execute,b=Object(c.useState)(null),h=Object(g.a)(b,2),x=h[0],m=h[1],f=Object(c.useState)(null),v=Object(g.a)(f,2),p=v[0],A=v[1],N=Object(c.useState)(""),y=Object(g.a)(N,2),I=y[0],T=y[1];return Object(O.jsxs)(d.a,{sx:{width:"100%",height:"100px",mt:1},children:[s&&(t.current.checked||n.current.checked||i.current.checked)&&!!s.isNameExist&&Object(O.jsx)(He.a,{severity:"success",children:'The request was successful, the files are available for download! Download links are only available for 2 minutes. When opening a file to calculate formulas, you should press the key combination: "Ctrl + Alt + F9" for Excel Office and "Ctrl + Shift + F9" for Libre Office.'}),s&&!t.current.checked&&!n.current.checked&&!i.current.checked&&Object(O.jsx)(He.a,{severity:"warning",children:"Please select at least one option to get results!"}),s&&(t.current.checked||n.current.checked||i.current.checked)&&!s.isNameExist&&!r.current.checked&&Object(O.jsx)(He.a,{severity:"error",children:"The DSSP server cannot get the result by sending the file!"}),s&&(t.current.checked||n.current.checked||i.current.checked)&&!s.isNameExist&&r.current.checked&&Object(O.jsx)(He.a,{severity:"error",children:"The server is temporarily down. Please try contacting customer service or check back later!"}),s&&!!s.isNameExist&&Object(O.jsx)(d.a,{sx:{mt:1},children:Object(O.jsxs)(O.Fragment,{children:[t.current.checked?Object(O.jsx)(d.a,{sx:{marginRight:"10px",display:"inline"},children:Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("a",{href:s["1d"],download:"1d.xlsx",children:Object(O.jsx)(o.a,{sx:{color:"#54ba64",backgroundColor:"#eef7ee"},variant:"contained",startIcon:Object(O.jsx)(Ge.a,{sx:{fontSize:60}}),children:"1D"})})})}):Object(O.jsx)(O.Fragment,{}),n.current.checked?Object(O.jsx)(d.a,{sx:{marginRight:"10px",display:"inline"},children:Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("a",{href:s["2d"],download:"2d.xlsx",children:Object(O.jsx)(o.a,{sx:{color:"#54ba64",backgroundColor:"#eef7ee"},variant:"contained",startIcon:Object(O.jsx)(Ge.a,{sx:{fontSize:60}}),children:"2D"})})})}):Object(O.jsx)(O.Fragment,{}),i.current.checked?Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("a",{href:s["3d"],download:"3d.xlsx",children:Object(O.jsx)(o.a,{sx:{color:"#54ba64",backgroundColor:"#eef7ee"},variant:"contained",startIcon:Object(O.jsx)(Ge.a,{sx:{fontSize:60}}),children:"3D"})})}):Object(O.jsx)(O.Fragment,{})]})}),Object(O.jsx)(de,{inputRef:e,innerProps:{accept:".pdb"},onFileChange:function(){var e=Object(_.a)(C.a.mark((function e(t){var n,c,i;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=E(t))){e.next=11;break}return e.next=4,je(t);case 4:c=e.sent,i=ue(c),window.chains=i,A(i),T(Object.keys(i)[0]),e.next=13;break;case 11:A(null),T("");case 13:m(n);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),j&&Object(O.jsx)(be.a,{sx:{mt:1,mb:0}}),Object(O.jsxs)(he.a,{container:!0,spacing:2,children:[Object(O.jsxs)(he.a,{item:!0,xs:6,children:[Object(O.jsxs)(R.a,{sx:{mt:3,minWidth:"103%",paddingTop:"18px"},children:[Object(O.jsx)(Oe.a,{sx:{background:"#fff",paddingTop:"10px"},children:"Chain name"}),Object(O.jsx)(D.a,{size:"small",variant:"outlined",label:"Chain name",value:I,onChange:function(e){return T(e.target.value)},disabled:null===p||j,children:p&&Object.keys(p).map((function(e){return Object(O.jsx)(w.a,{value:e,children:e},e)}))})]}),Object(O.jsx)(d.a,{sx:{paddingTop:"3%",textAlign:"center",color:"#505050"},children:Object(O.jsx)(xe.a,{value:"true",labelPlacement:"bottom",disabled:j,control:Object(O.jsx)(me.a,{inputRef:r}),label:"Get result from DSSP server by file name"})})]}),Object(O.jsxs)(he.a,{item:!0,xs:6,children:[Object(O.jsx)(d.a,{sx:{paddingTop:"6%",textAlign:"center",color:"#505050"},children:Object(O.jsx)(xe.a,{control:Object(O.jsx)(fe.a,{inputRef:t,disabled:j}),label:"Include 1d result"})}),Object(O.jsx)(d.a,{sx:{paddingTop:"1%",textAlign:"center",color:"#505050"},children:Object(O.jsx)(xe.a,{control:Object(O.jsx)(fe.a,{inputRef:n,disabled:j}),label:"Include 2d result"})}),Object(O.jsx)(d.a,{sx:{paddingTop:"1%",textAlign:"center",color:"#505050"},children:Object(O.jsx)(xe.a,{control:Object(O.jsx)(fe.a,{inputRef:i,disabled:j}),label:"Include 3d result"})})]})]}),Object(O.jsx)(d.a,{sx:{mt:"20px"},children:Object(O.jsxs)(d.a,{sx:{display:"flex",flexDirection:"row","& > *":{flexGrow:1}},children:[x?Object(O.jsx)(o.a,{type:"submit",variant:"contained",onClick:function(){return u(p,I)},sx:{mr:"5px"},disabled:j||!x,children:"Get result"}):Object(O.jsx)(ve.a,{title:null===x?"Please select a file":"Only .pdb files are supported",children:Object(O.jsx)("span",{children:Object(O.jsx)(o.a,{type:"submit",variant:"contained",sx:{mr:"5px",width:"100%"},disabled:j||!x,children:"Get result"})})}),Object(O.jsx)(o.a,{sx:{backgroundColor:"#C1B9F9",ml:"5px"},type:"reset",onClick:function(){e.current.value="",l(null),A(null),T(null)},children:"Clean out"})]})})]});function S(){return(S=Object(_.a)(C.a.mark((function c(a,s){var d,j,o,u,b,h,O;return C.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return l(null),c.prev=1,d=t.current.checked,j=n.current.checked,o=i.current.checked,u=r.current.checked,b=o?Me(a[s]):null,c.next=9,Le.post.pdb(e.current.files[0],d,j,o,b,s,u);case 9:return h=c.sent,O="http://"+window.location.hostname+":8080",null!=h.data&&""!==h.data,c.abrupt("return",{"1d":O+"/chemistry/pent-un-fold/1d/"+h.data,"2d":O+"/chemistry/pent-un-fold/2d/"+h.data,"3d":O+"/chemistry/pent-un-fold/3d/"+h.data,isNameExist:null!=h.data&&""!==h.data});case 15:c.prev=15,c.t0=c.catch(1),console.error(c.t0);case 18:case"end":return c.stop()}}),c,null,[[1,15]])})))).apply(this,arguments)}function E(e){return e?e.name.endsWith(".pdb"):null}}function Ye(){var e=Object(c.useState)(""),t=Object(g.a)(e,2),n=t[0],i=t[1],r=ke((function(){return function(e){return j.apply(this,arguments)}(n)})),a=r.result,s=(r.setResult,r.loading),l=r.execute;return Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{children:"Enter the amino acid sequence:"}),Object(O.jsx)(E.a,{name:"text",multiline:!0,fullWidth:!0,rows:"12",placeholder:"Example: AMFCFQCQETAKNMFCFQCQETAKNTGCTVKGMCGKPEETANLQDLLIFVLRGIAI....",value:n,onChange:function(e){return i(e.target.value)}}),Object(O.jsx)(xe.a,{control:Object(O.jsx)(fe.a,{disabled:!0,checked:!0}),label:"Include 1d result"}),Object(O.jsx)("br",{}),Object(O.jsxs)(d.a,{sx:{width:"max-content"},children:[Object(O.jsx)(o.a,{type:"submit",variant:"contained",disabled:s||!n,onClick:l,children:"Get result"}),s&&Object(O.jsx)(be.a,{sx:{mt:2,display:"block"}})]}),a&&Object(O.jsxs)("div",{children:["Your file is ready! ",Object(O.jsx)("br",{}),Object(O.jsx)("a",{href:a["1d"],download:"1d.xlsx",children:"1D"})]})]});function j(){return(j=Object(_.a)(C.a.mark((function e(t){var n,c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Le.post.sequence(t);case 3:return n=e.sent,c="http://"+window.location.hostname+":8080",e.abrupt("return",{"1d":c+"/chemistry/pent-un-fold/1d/"+(null===n||void 0===n?void 0:n.data)});case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}}var Ue=n(238),ze=n(264),We=function(){var e=Object(c.useState)("pdb"),t=Object(g.a)(e,2),n=t[0],i=t[1];return Object(O.jsxs)(S.a,{sx:{mt:1},children:[Object(O.jsxs)(Ue.a,{value:n,onChange:function(e,t){return i(t)},children:[Object(O.jsx)(ze.a,{label:"PDB",value:"pdb"}),Object(O.jsx)(ze.a,{label:"Amino acid sequence",value:"sequence"})]}),Object(O.jsx)(ce,{value:"pdb",selected:n,children:Object(O.jsx)(Be,{})}),Object(O.jsx)(ce,{selected:n,value:"sequence",children:Object(O.jsx)(Ye,{})})]})},Xe=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(x,{}),Object(O.jsxs)(m.c,{children:[Object(O.jsx)(m.a,{path:"/login",component:$}),Object(O.jsx)(m.a,{path:"/register",component:J}),Object(O.jsx)(m.a,{path:"/mystery",component:Y}),Object(O.jsx)(m.a,{path:"/analyzer",component:U}),Object(O.jsx)(m.a,{path:"/counter",component:V}),Object(O.jsx)(m.a,{path:"/accelerator",component:B}),Object(O.jsx)(m.a,{path:"/pent-un-fold",component:We}),Object(O.jsx)(m.a,{path:"/",component:A})]})]})},Qe=n(127),qe=n(246),Ve=n(235),Ke=n(60),Ze=Object(Qe.a)({palette:{primary:Ve.a,secondary:Ke.a}});a.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(s.a,{children:Object(O.jsx)(qe.a,{theme:Ze,children:Object(O.jsx)(Xe,{})})})}),document.getElementById("root"))},20:function(e,t,n){e.exports={container:"periodicTable_container__2ba7-",periodicTable:"periodicTable_periodicTable__2za7i",s:"periodicTable_s__1oQGQ",p:"periodicTable_p__1MuXG",d:"periodicTable_d__2X7_M",f:"periodicTable_f__22UYB"}},74:function(e,t,n){e.exports={home:"home_home__2DRgy",planets:"home_planets__spi-w",title:"home_title__3SdOf"}}},[[177,1,2]]]);
//# sourceMappingURL=main.5d4cf05f.chunk.js.map