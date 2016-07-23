/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var oc = __webpack_require__(1);
	var common = __webpack_require__(2);

	(function () {
	    var kExplanations = [
	        {
	            name: "六輝",
	            description: "諸葛孔明が<strong>戦略</strong>として伝え、江戸時代流行し今も人気。(仏滅を空亡としています)", 
	            items: [
	                ["先勝", "せんがち", "戦いは朝から昼までよし。午前中は吉。"],
	                ["友引", "ともびき", "勝負のつかない日。朝晩、夕方は吉。"],
	                ["先負", "せんまけ", "戦いは昼過ぎより日暮れまでよし。午後は吉。"],
	                ["空亡", "くうぼう", "仏滅。全てがむなしくなる日。戦えば失うものが多い。"],
	                ["大安", "たいあん", "大安吉日なり。何事によらずよし。"],
	                ["赤口", "しゃっく", "赤口神が民を悩ます日。特に祝い事に凶事あり。午前11時から午後１時までの時間帯のみは吉で、それ以外は凶。"],
	            ],
	        },
	        {
	            name: "干支",
	            description: "木の幹にあたる”十干”と枝にあたる”十二支”を合わせて<strong>状態</strong>を表すものです。",
	            items: [
	                ["甲", "きのえ", "草木の芽生え、鱗芽のかいわれの象意"],
	                ["乙", "きのと", "陽気のまだ伸びない、かがまっているところ"],
	                ["丙", "ひのえ", "陽気の発揚"],
	                ["丁", "ひのと", "陽気の充溢"],
	                ["戊", "つちのえ", "“茂”に通じ、陽気による分化繁栄"],
	                ["己", "つちのと", "紀に通じ、分散を防ぐ統制作用"],
	                ["庚", "かのえ", "結実、形成、陰化の段階"],
	                ["辛", "かのと", "陰による統制の強化"],
	                ["壬", "みずのえ", "“妊”に通じ、陽気を下に姙む意"],
	                ["癸", "みずのと", "“揆”に同じく生命のない残物を清算して地ならしを行い、新たな生長を行う待機の状態"],
	            ],
	            items2: [
	                ["子", "ね", "“孳”で、陽気が色々に発現しようとする動き"],
	                ["丑", "うし", "“紐”で、生命エネルギーの様々な結合"],
	                ["寅", "とら", "“演”で、形をとっての発生"],
	                ["卯", "う", "同音“冒”に通じ、開発の意"],
	                ["辰", "たつ", "“震”、同音“申”に同じ、生の活動"],
	                ["巳", "み", "“已”に通じ、陽盛の極、漸く陰に移ろうとする所"],
	                ["午", "うま", "“忤(さからう)”に通じ、上昇する陰と下退する陽との抵触"],
	                ["未", "ひつじ", "“昧”で、陰気の支配"],
	                ["申", "さる", "陰気の支配"],
	                ["酉", "とり", "酒熟して気の漏れる象。陰気の熟する所"],
	                ["戌", "いぬ", "同音“恤”であり、“滅”である。統一退蔵。"],
	                ["亥", "い", "“核”で、生命の完全な収蔵含蓄"],
	            ],
	            cite: "(表は <a href='https://ja.wikipedia.org/wiki/%E5%B9%B2%E6%94%AF#.E5.8D.81.E5.B9.B2'>干支 - Wikipedia</a> より引用)",
	        },
	        {
	            name: "九星",
	            description: "運命の流れの数学的な基本概念を表すガイドとして<strong>紫白</strong>九星(七色星)を採用。",
	            items: [
	                [["一白", "一白水星"], null, "祓いに強力に作用する吉日。凶神である大将軍や金神のもたらす厄を霊的に抑えることができる。"],
	                [["二黒", "二黒土星"], null, ""],
	                [["三碧", "三碧木星"], null, ""],
	                [["四緑", "四緑木星"], null, ""],
	                [["五黄", "五黄土星"], null, ""],
	                [["六白", "六白金星"], null, "祓いに強力に作用する吉日。凶神である大将軍や金神のもたらす厄を霊的に抑えることができる。"],
	                [["七赤", "七赤金星"], null, ""],
	                [["八白", "八白土星"], null, "祓いに強力に作用する吉日。凶神である大将軍や金神のもたらす厄を霊的に抑えることができる。"],
	                [["九紫", "九紫火星"], null, "祓いに強力に作用する吉日。凶神である大将軍や金神のもたらす厄を霊的に抑えることができる。"],
	            ],
	        },
	        {
	            name: "直",
	            description: "十二直。北斗七星信仰に由来するもので、<strong>吉凶</strong>がよくあたると重宝されています。",
	            items: [
	                ["建", "たつ", "万物の立て生ずる日。土を動かし、大金を支払うは凶。"],
	                ["除", "のぞく", "万物を祓う故、のぞくと言う。厄を祓うに吉。百凶を除き去る。婚礼・井戸掘りに向かず。"],
	                ["満", "みつ", "天の宝を満る故、みつるという。神事に吉。土を動かすに凶。"],
	                ["平", "たいら", "万物を平分する日。満れば、すなわち平となる。不足なく良き日なり。"],
	                ["定", "さだん", "大忌みという。祈祷に吉。平なれば定まる。山あり谷ありは安定を欠く。"],
	                ["執", "とる", "定まれば、すなわち取る。定まらぬものを取るに過ちあり。立てるに凶。壊すに吉。"],
	                ["破", "やぶる", "築けば、すなわち破る。壊すに吉。邪気を祓い祟りを祈るに吉。この日、戦えば、必ず傷付くと言う。"],
	                ["危", "あやぶ", "すでに破れば、すでに危うし。無分別の状態にあり。高き所の登るは凶。"],
	                ["成", "なる", "よく危ぶ時は、すなわち成る。万事必ず成就する時。争い事には凶。木を切るに吉。"],
	                ["納", "おさん", "すでに成らば、すなわち、納む。この神の来る日は、開くの神が来たりて、福を授ける。"],
	                ["開", "ひらく", "納むれば、すなわち、開くを良しとす。蔵を開くに吉。道を開く日。"],
	                ["閉", "とず", "開くこと、もっぱらであれば、あるものもなく、閉ずこともまた必要なる。陰気の気が閉じ塞がる日。"],
	            ],
	        },
	        {
	            name: "宿",
	            description: "インド由来の古法二十七宿を採用。<strong>星々</strong>に対応し<strong>様々</strong>な吉凶判断にも用います。",
	            items: [
	                // 東方の蒼竜七宿
	                ["角", "かく", "物事を始めるに吉。葬式・心の問題に凶事あり。"],
	                ["亢", "こう", "婚礼、取引、交渉に吉。建築など土に凶事あり。"],
	                ["氐", "てい", "転居・転職に吉。家の増改築などにに凶・水難あり。"],
	                ["房", "ぼう", "神事に吉。隠し事に凶事あり。"],
	                ["心", "しん", "神事、旅行に吉。葬儀・埋葬に凶事あり。盗難の相。"],
	                ["尾", "び", "話し合い・薬に吉。衣類裁断・不注意の厄あり。"],
	                ["箕", "き", "金運に吉。身内との間に凶事。婚礼大凶。"],
	                // 北方の玄武六宿
	                ["斗", "と", "種まきに吉。この日動けば凶事あり。"],
	                ["女", "じょ", "武器作り・紙すき・神参りに吉。概ね凶事日なり。"],
	                ["虚", "きょ", "智を得ることに吉。造作すれば厄あり。"],
	                ["危", "き", "目上の者に従う時は吉。衣類裁断・移転に凶事あり。"],
	                ["室", "しつ", "造作・近き方に吉あり。遠方に凶事あり。仏事に凶。"],
	                ["壁", "へき", "子孫繁栄に吉。南方に凶事あり。"],
	                // 西方の白虎七宿
	                ["奎", "けい", "婚礼、棟上げに吉。交渉に凶事あり。"],
	                ["婁", "ろう", "衣類裁断すれば寿命増す。博打に凶事あり。"],
	                ["胃", "い", "婚礼・造作・公事に吉あり。衣類裁断・私事は凶事あり。"],
	                ["昴", "ぼう", "祈願に吉。土を動かすに凶事あり。"],
	                ["畢", "ひつ", "神事・祭礼に吉あり。特に婚礼に凶あり。"],
	                ["觜", "し", "仕事始めに吉。造作に用いれば家財失う。"],
	                ["参", "しん", "財宝・養子・遠出に吉。新しきことに凶事あり。"],
	                // 南方の朱雀七宿
	                ["井", "せい", "種まき・神事に吉。衣類裁断すれば離婚の相あり。"],
	                ["鬼", "き", "万事に大吉。ただし婚礼は凶事あり。"],
	                ["柳", "りゅう", "物事を断るに吉。葬儀に不幸あり。"],
	                ["星", "せい", "治療に吉。婚礼・葬式・種まきに凶事あり。"],
	                ["張", "ちょう", "養蚕に吉。木を切れば厄あり。"],
	                ["翼", "よく", "旅立ちに吉。婚礼は離婚の相あり。"],
	                ["軫", "しん", "万事に吉。ただし、衣類裁断すれば火難あり。"],
	            ],
	        },
	        {
	            name: "納音",
	            description: "物事の吉凶(人の気の現出)が変動するときに出る音のことで、<strong>兆し</strong>を読みます。",
	            items: [
	                ["海中金", "かいちゅうのこん", "表に出るべきものの、海中に閉ざされる兆し。"],
	                ["爐中火", "ろちゅうのか", "燃え上がる炎のごとく、運気の上がる兆し。"],
	                ["大林木", "たいりんのもく", "多くの木々は茂り、森を成す兆し。"],
	                ["路傍土", "ろぼうのど", "今は路傍の土なれど、やがて日の目を見るの兆し。"],
	                ["剣鋒金", "けんぼうのこん", "物事の極みにありて、最後の人手を探るものありとの兆し。"],
	                ["山頭火", "さんとうのか", "はげ山に火事ありて、焼き尽くすべき勢いも、無き兆し。"],
	                ["澗下水", "かんげのすい", "水の尽きること無く、溢れ出づる兆し。"],
	                ["城頭土", "じょうとうのど", "運に勢い有るの兆し。"],
	                ["白蝋金", "はくろうのこん", "水で鍛うれば、形、整うの兆し。"],
	                ["楊柳木", "ようりゅうのもく", "今は勢いを失うの兆し。"],
	                ["井泉水", "いせんのすい", "小さき井戸なれども、水の満ちる兆し。"],
	                ["屋上土", "おくじょうのど", "土の気の塞がる兆し。"],
	                ["霹靂火", "へきれきのか", "晴天の霹靂を見るも、変化せずの兆し。"],
	                ["松柏木", "しょうはくのもく", "雲を突き、そびえ立つの兆し。春を待つに勢いあり。"],
	                ["長流水", "ちょうりゅうのすい", "水の流れの絶えることなく、流るる川の兆し。"],
	                ["沙中金", "さちゅうのこん", "砂の内に秘める金の兆し。目立つ時は光を放ち、動かぬ時は、砂にまぎれる。"],
	                ["山下火", "さんげのか", "ただ燃えるがごとく、広がり伸べる兆し。"],
	                ["平地木", "へいちのもく", "淋しくたたずむ、ひとつの木の兆し。"],
	                ["壁上土", "へきじょうのど", "壁の上の土は、もはや、土にあらず。土の力を失う兆し。"],
	                ["金箔金", "きんぱくのこん", "死滅の兆し。金も使い道を誤れば、かえってその力を失う。"],
	                ["覆燈火", "ふくとうのか", "倒れたる灯籠の灯りは、夜を照らさずの兆し。"],
	                ["天河水", "てんがのすい", "豊なる水の流れ。人に徳を施し、福をもたらすの兆し。"],
	                ["大駅土", "だいえきのど", "大きなる 駅 に人馬の行き交うの兆し。"],
	                ["剣釧金", "けんせんのこん", "万物の乱れの、防ぎありの兆し。"],
	                ["桑柘木", "そうたくのもく", "絶えて春を待つの兆し。やがて、成長せし木々あり。"],
	                ["大渓水", "たいけいのすい", "勢い盛んな水の気の兆し。"],
	                ["沙中土", "さちゅうのど", "砂の中の土の兆し。役立たぬこと多し。"],
	                ["天上火", "てんじょうのか", "天地に光りあるの兆し。"],
	                ["柘榴木", "ざくりゅうのもく", "外に現れず、内に秘めたる兆し。"],
	                ["大海水", "たいかいのすい", "天に連なる、大海の水の兆し。"],
	            ],
	        },
	    ];
	    function makeExplanations() {
	        var sections = [];
	        kExplanations.forEach(function (aExplanation) {
	            var name = aExplanation.name;
	            var section = [
	                '<h2 id="' + name + '">' + name + '</h2>',
	                '<p>' + aExplanation.description + '</p>',
	            ];
	            var tables = [aExplanation.items];
	            if (aExplanation.items2) {
	                tables.push(aExplanation.items2);
	            }
	            tables.forEach(function (aTable) {
	                section.push('<table>');
	                aTable.forEach(function (aItem) {
	                    var title = aItem[0];
	                    if (!Array.isArray(title)) {
	                        title = [title, title];
	                    }
	                    var reading = aItem[1];
	                    var desc = aItem[2];
	                    var id = name + '_' + title[0];
	                    var titleHtml = '<span id="' + id + '">' + title[1] + '</span>';
	                    if (reading) {
	                        titleHtml = '<div class="ruby">' + reading + '</div>' + titleHtml;
	                    }
	                    section.push('<tr><th>' + titleHtml + '</th><td>' + desc + '</td></tr>');
	                });
	                section.push('</table>');
	            });
	            var cite = aExplanation.cite;
	            if (cite) {
	                section.push('<p><cite>' + cite + '</cite></p>');
	            }
	            sections.push(section.join('\n'));
	        });
	        return sections.join('\n<hr>\n');
	    }
	    
	    function set(id, value) {
	        document.getElementById(id).innerHTML = value;
	    }
	    function sets(clazz, value) {
	        Array.prototype.forEach.call(document.querySelectorAll("." + clazz), function (e) {
	            e.innerHTML = value;
	        });
	    }
	    function dayOfWeek(dow) {
	        return "日月火水木金土".charAt(dow);
	    }
	    function update() {
	        // 月表示の更新
	        var month = date.getMonth() + 1;
	        var yearMonth = [date.getFullYear(), month].join("/"); 
	        document.getElementById("gotoMonth").innerHTML = '<a href="month.html#' + yearMonth + '">&lt; <span class="keyNumber">'+ month +'</span>月</a>';
	        
	        var month = date.getMonth() + 1; // 月は 0 始まり
	        var dateString = "";
	        dateString += '<span class="keyNumber">' + month + '</span>月';
	        dateString += '<span class="keyNumber">' + date.getDate() + '</span>日';
	        dateString += '<span class="dayOfWeek' + date.getDay() + '">(' + dayOfWeek(date.getDay()) + ')</span>';
	        set("date", dateString);
	        var jd  = oc.juliusDate(date);
	        var old = oc.oldCalendar(jd);
	        set('oldDate', '旧暦 ' + old);
	        var newRokki = oc.rokki(old);
	        sets('rokki', newRokki);
	        var newEto = oc.eto(jd);
	        sets('eto', newEto);
	        var newKyusei = oc.kyusei(jd);
	        sets('kyusei', newKyusei);
	        var newChoku = oc.choku(jd);
	        sets('choku', newChoku);
	        var newShuku = oc.shuku(old);
	        sets('shuku', newShuku);
	        var newNattin = oc.nattin(jd);
	        sets('nattin', newNattin);
	        var tags = [];
	        oc.tagsForDate(date).forEach(function (tag) {
	            var tagText = tag[1];
	            var isFullmoon = tag[0] === "fullmoon";
	            var isNewmoon  = tag[0] === "newmoon";
	            if (isFullmoon || isNewmoon) {
	                var time = tag[2];
	                var mark = isFullmoon ? "○" : "●";
	                var h = time.getHours();
	                // XXX どうも正確な計算と2分だけずれているようなので、ここで2分足しています。
	                // FIXME ずれている原因が分かったらこのごまかしを消す。
	                //
	                // dynamicalTime にする/戻す時に閏秒が考慮されていないことが原因のよう
	                // ただ、旧暦計算の参考にしたアルゴリズム全体がそれを無視する前提に
	                // 立っていたため、そこだけ調整すると期待値が総崩れになる。
	                // 後ほど、より高精度な天体計算ライブラリを連れてくるつもりがあり、
	                // その際にきちんと修正することにする。
	                var workaround = time.getMinutes() - 2;
	                if (workaround < 0) {
	                    workaround += 60;
	                    h += 24 - 1;
	                    h %= 24;
	                }
	                var m = ("0" + workaround).substr(-2);
	                tagText += mark + h + ":" + m;
	            } else if (tag[0] == "sekku" &&
	                     !(tag[1] == "雛祭" || tag[1] == "七夕"))
	            {
	                tagText += "の節句";
	            } else if (tag[1].indexOf("天天上") == 0) {
	                tagText = tag[1].substr(0, 1) + "一" + tag[1].substr(1);
	            }
	            tags.push('<span class="tag ' + tag[0] + '">' + tagText + '</span>'); 
	        });
	        set('tags', tags.join(" ･ "));
	        
	        // 今解説に表がある項目について、マーカー表示します。
	        markItems([["六輝", newRokki], // 六輝
	            ["干支", newEto.charAt(0)], ["干支", newEto.charAt(1)], // 十干、十二支
	            ["九星", newKyusei], // 九星
	            ["直", newChoku], ["宿", newShuku], ["納音", newNattin]]); // 直、宿、納音
	    }

	    var marked;
	    function markItems(toBeMarked) {
	        if (marked) {
	            marked.forEach(function (item) {
	                removeClass(item, "marked");
	            });
	        }
	        marked = [];
	        toBeMarked.forEach(function (item) {
	            var e = document.getElementById(item.join("_"));
	            addClass(e, "marked");
	            marked.push(e);
	        });
	    }

	    var date;
	    function today() {
	        date = new Date();
	        update();
	    }
	    function next(e) {
	        gotoDaysAfter(1);
	        e.preventDefault();
	    }
	    function prev(e) {
	        gotoDaysAfter(-1);
	        e.preventDefault();
	    }
	    function gotoDaysAfter(n) {
	        var ms = date.getTime();
	        ms += n * 24 * 60 * 60 * 1000;
	        date.setTime(ms);
	        update();
	    }
	    function gotoDate(s) {
	        date = new Date(s);
	        if (s.indexOf("/") < 0) {
	            // 有効な Date String でない場合ハングするので
	            // ここで today に差し替えています。
	            date = new Date();
	        }
	        update();
	        history.replaceState(null, null, window.location.href.split("#")[0]);
	    } 
	    function addClass(e, cls) {
	        var a = e.getAttribute("class");
	        var classes = a ? a.split(' ') : [];
	        classes.push(cls);
	        e.setAttribute("class", classes.join(' '));
	    }
	    function removeClass(e, cls) {
	        var newClasses = [];
	        var a = e.getAttribute("class");
	        var classes = a ? a.split(' ') : [];
	        classes.forEach(function (c) {
	            if (c != cls) {
	                newClasses.push(c);
	            }
	        });
	        e.setAttribute("class", newClasses.join(' '));
	    }
	    
	    function ScrollAnimation(aSeconds, aTo) {
	        this.mDuration = 1000 * aSeconds;
	        this.mFrom = window.pageYOffset;
	        this.mTo   = aTo;
	        this.mFps = 60;
	    }
	    ScrollAnimation.prototype = {
	        start: function () {
	            this.mStart = new Date().getTime();
	            var that = this;
	            setTimeout(function () {
	                that.update();
	            }, 1000 / this.mFps);
	        },
	        update: function () {
	            var now = new Date().getTime();
	            var t = (now - this.mStart) / this.mDuration;
	            if (t > 1) {
	                t = 1;
	            }
	            var distance = this.mTo - this.mFrom;
	            var y = this.mFrom + distance * this.easeInOutQuad(t);
	            window.scroll(window.pageXOffset, y);
	            
	            if (t < 1) {
	                var that = this;
	                setTimeout(function () {
	                    that.update();
	                }, 1000 / this.mFps);
	            }
	        },
	        // https://gist.github.com/gre/1650294
	        // acceleration until halfway, then deceleration
	        easeInOutQuad: function (t) { return t<.5 ? 2*t*t : -1+(4-2*t)*t },
	    };
	    
	    function jumpToHash(aHash) {
	        Array.prototype.forEach.call(document.querySelectorAll("h2.marked"), function (aMarked) {
	            removeClass(aMarked, "marked");
	        });
	        var newBox = document.getElementById(aHash);
	        if (newBox) {
	            addClass(newBox, "marked");
	        }
	        var tbHeight = document.getElementById("toolbar").getBoundingClientRect().height;
	        var newY = newBox.getBoundingClientRect().top + window.pageYOffset;
	        
	        new ScrollAnimation(0.25, newY - tbHeight * 1.25).start();
	    }
	    window.addEventListener("load", function (e) {
	        document.getElementById("explanation").innerHTML = makeExplanations();
	        
	        var hash = common.parseHash(document.location.href);
	        if (hash) {
	            gotoDate(hash);
	        } else {
	            today();
	        }
	        
	        Array.prototype.forEach.call(document.querySelectorAll(".gotoCurrent"), function (aElt) {
	            aElt.addEventListener("click", today, false);
	        });
	        
	        document.getElementById("today").addEventListener("click", today, false);
	        document.getElementById("next").addEventListener("click", next, false);
	        document.getElementById("prev").addEventListener("click", prev, false);

	        Array.prototype.forEach.call(document.querySelectorAll("a.box"), function (aBox) {
	            aBox.addEventListener("click", function (e) {
	                var hash = common.parseHash(aBox.getAttribute("href"));
	                if (hash) {
	                    e.preventDefault();
	                    jumpToHash(hash);
	                }
	            }, false);
	        });
	        document.getElementById("top").addEventListener("click", function () {
	            e.preventDefault();
	            new ScrollAnimation(0.25, 0).start();
	        }, false);
	        
	        // runTests();
	    }, false);
	    window.addEventListener("hashchange", function (e) {
	        var hash = common.parseHash(e.newURL);
	        if (hash) {
	            if (hash.indexOf("/") > -1) {
	                // 日付指定
	                gotoDate(hash);
	            } else {
	                // マーク
	                jumpToHash(hash);
	            }
	        }
	    }, false);
	    window.addEventListener("scroll", function (e) {
	        var tb = document.getElementById("toolbar");
	        var tagsTop = document.getElementById("tags").getBoundingClientRect().top;
	        removeClass(tb, "visible");
	        if (tagsTop < 0) {
	            addClass(tb, "visible");
	        }
	    }, false);

	    new Hammer(window).on("swipe", function (ev) {
	        if (ev.distance < 75) {
	            return;
	        }
	        var dateBottom = document.getElementById("date").getBoundingClientRect().bottom;
	        if (dateBottom < 0) {
	            return;
	        }
	        switch (ev.direction) {
	        case Hammer.DIRECTION_LEFT:
	            next(ev);
	            break;
	        case Hammer.DIRECTION_RIGHT:
	            prev(ev);
	            break;
	        }
	    });
	})();


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	function int(v) {
	    return v | 0;
	}

	/*!
	 * Date オブジェクトからユリウス日を計算します。
	 * ユリウス日は浮動小数点数として表現され、
	 * 小数点以下の数字は時刻を表します。
	 * 
	 * この関数では、グレゴリオ暦による計数となるAD 1582年10月15日
	 * 以降のみを対象とします。
	 */
	function juliusDate(date) {
	    // TODO 上記値域判定
	    var year  = date.getFullYear();
	    var month = date.getMonth() + 1;
	    var day   = date.getDate();
	    var hours = date.getHours();
	    if (month < 3) {
	        month += 12;
	        --year;
	    }
	    // alert(year + "/" + month + "/" + day);
	    return int(365.25 * year)
	         + int(year / 400)
	         - int(year / 100)
	         + int(30.59 * (month - 2))
	         + day
	         + 1721088
	         + hours / 24;
	}
	function fromJuliusDate(jd) {
	    // http://mysteryart.web.fc2.com/library/calsmpl/cldttojd.html
	    jd+=1; // JST
	    
	    var z  = int(jd);
	    var f  = jd-z;
	    var aa = int((z-1867216.25)/36524.25);
	    var a  = int(z+1+aa-int(aa/4));
	    var b  = a+1524;
	    var c  = int((b-122.1)/365.25);
	    var k  = int(365.25*c);
	    var e  = int((b-k)/30.6001);

	    var day   = int(b-k-int(30.6001*e));
	    var month = e - (e < 13.5 ? 1 : 13);
	    var year  = c - (month > 2.5 ? 4716 : 4715);
	    var hours   = int(f*24);
	    var minutes = int((f*24-hours)*60); // おそらく分までの精度しかない…
	    return new Date(year, month-1, day, hours, minutes);
	}

	/*!
	 * JST のユリウス日から力学時を求めます。
	 */
	function dynamicalTime(juliusDateJST) {
	    // 元とした文献と同様、協定世界時と力学時の誤差
	    // ΔTについては無視しています。
	    // 日本標準時からの時差-9時間を引いています。
	    return juliusDateJST - (9/24);
	}

	/*!
	 * @brief 与えられた力学時に対応する太陽黄経を計算します。
	 * 
	 * @param juliusDateDynamicalTime 力学時
	 * @return 太陽黄経を表す浮動小数点数
	 */
	function solarEclipticLongitude(juliusDateDynamicalTime) {
	    //    ｔ＝（JD+0.5-2451545.0）／36525
	    var t = (juliusDateDynamicalTime + 0.5 - 2451545.0) / 36525;
	    //           18
	    //    λsun＝Σ Ａ*ｃｏｓ（ｋ*ｔ+θ0）
	    //           n=1
	    var table = [
	        [0.0004,    31557.0,    161.0],
	        [0.0004,    29930.0,    48.0],
	        [0.0005,    2281.0,     221.0],
	        [0.0005,    155.0,      118.0],
	        [0.0006,    33718.0,    316.0],
	        [0.0007,    9038.0,     64.0],
	        [0.0007,    3035.0,     110.0],
	        [0.0007,    65929.0,    45.0],
	        [0.0013,    22519.0,    352.0],
	        [0.0015,    45038.0,    254.0],
	        [0.0018,    445267.0,   208.0],
	        [0.0018,    19.0,       159.0],
	        [0.0020,    32964.0,    158.0],
	        [0.0200,    71998.1,    265.1],
	        [-0.0048*t, 35999.05,   267.52],
	        [1.9147,    35999.05,   267.52],
	        [36000.7695*t,  0,  0],
	        [280.4659,      0,  0],
	    ];
	    return eclipticLongitude(table, t);
	}
	 
	/*!
	 * @brief 与えられた力学時に対応する月の黄経を計算します。
	 * 
	 * @param juliusDateDynamicalTime 力学時
	 * @return 月の黄経を表す浮動小数点数
	 */
	function lunarEclipticLongitude(juliusDateDynamicalTime) {
	    // TODO 共通化
	    var t = (juliusDateDynamicalTime + 0.5 - 2451545.0) / 36525;
	    //           63
	    //    λsun＝Σ Ａ*ｃｏｓ（ｋ*ｔ+θ0）
	    //           n=1
	    var table = [
	        [0.0003,    2322131.0,  191.0],
	        [0.0003,    4067.0,     70.0],
	        [0.0003,    549197.0,   220.0],
	        [0.0003,    1808933.0,  58.0],
	        [0.0003,    349472.0,   337.0],
	        [0.0003,    381404.0,   354.0],
	        [0.0003,    958465.0,   340.0],
	        [0.0004,    12006.0,    187.0],
	        [0.0004,    39871.0,    223.0],
	        [0.0005,    509131.0,   242.0],
	        [0.0005,    1745069.0,  24.0],
	        [0.0005,    1908795.0,  90.0],
	        [0.0006,    2258267.0,  156.0],
	        [0.0006,    111869.0,   38.0],
	        [0.0007,    27864.0,    127.0],
	        [0.0007,    485333.0,   186.0],
	        [0.0007,    405201.0,   50.0],
	        [0.0007,    790672.0,   114.0],
	        [0.0008,    1403732.0,  98.0],
	        [0.0009,    858602.0,   129.0],
	        [0.0011,    1920802.0,  186.0],
	        [0.0012,    1267871.0,  249.0],
	        [0.0016,    1856938.0,  152.0],
	        [0.0018,    401329.0,   274.0],
	        [0.0021,    341337.0,   16.0],
	        [0.0021,    71998.0,    85.0],
	        [0.0021,    990397.0,   357.0],
	        [0.0022,    818536.0,   151.0],
	        [0.0023,    922466.0,   163.0],
	        [0.0024,    99863.0,    122.0],
	        [0.0026,    1379739.0,  17.0],
	        [0.0027,    918399.0,   182.0],
	        [0.0028,    1934.0,     145.0],
	        [0.0037,    541062.0,   259.0],
	        [0.0038,    1781068.0,  21.0],
	        [0.0040,    133.0,      29.0],
	        [0.0040,    1844932.0,  56.0],
	        [0.0040,    1331734.0,  283.0],
	        [0.0050,    481266.0,   205.0],
	        [0.0052,    31932.0,    107.0],
	        [0.0068,    926533.0,   323.0],
	        [0.0079,    449334.0,   188.0],
	        [0.0085,    826671.0,   111.0],
	        [0.0100,    1431597.0,  315.0],
	        [0.0107,    1303870.0,  246.0],
	        [0.0110,    489205.0,   142.0],
	        [0.0125,    1443603.0,  52.0],
	        [0.0154,    75870.0,    41.0],
	        [0.0304,    513197.9,   222.5],
	        [0.0347,    445267.1,   27.9],
	        [0.0409,    441199.8,   47.4],
	        [0.0458,    854535.2,   148.2],
	        [0.0533,    1367733.1,  280.7],
	        [0.0571,    377336.3,   13.2],
	        [0.0588,    63863.5,    124.2],
	        [0.1144,    966404.0,   276.5],
	        [0.1851,    35999.0,    87.53],
	        [0.2136,    954397.7,   179.93],
	        [0.6583,    890534.2,   145.7],
	        [1.2740,    413335.3,   10.74],
	        [6.2888,    477198.86,  44.963],
	        [218.3162,          0,  0],
	        [481267.8809 * t,   0,  0],
	    ];
	    return eclipticLongitude(table, t);
	}

	/*!
	 * @brief 与えられた天文時(もどき)に対応する黄経を計算します。
	 * 
	 * @param t 天文時(もどき)
	 * @return 黄経を表す浮動小数点数
	 */
	function eclipticLongitude(table, t) {
	    var rv = 0;
	    table.forEach(function (params) {
	        var a = params[0];
	        var k = params[1];
	        var theta0 = params[2];
	        var angle = normalizeAngle(k * t + theta0);
	        rv += a * Math.cos(angle * Math.PI / 180.0); // 毎回計算するのが遅ければ Math.PI/180.0 は定数化する
	    });
	    return normalizeAngle(rv);
	}
	function normalizeAngle(angle) {
	    while (angle < 0) {
	        angle += 360;
	    }
	    while (angle >= 360) {
	        angle -= 360;
	    }
	    return angle;
	}

	/**
	 * 指定した日付の直前の二分二至(世間的には二至二分と呼ぶ場合が多いようですが)を求めます。
	 * 
	 * @param date
	 */
	function findNibunNishi(t) {
	    return findSekki(t, 90);
	}

	/**
	 * 季節を求めます。春が0
	 */
	function findSeason(jd) {
	    var sekki = findSekki(jd+1, 90, 45);
	    angle = sekki[0];
	    // alert(angle);
	    angle += 45;
	    while (angle >= 360) {
	        angle -= 360;
	    }
	    var season = angle / 90;
	    if (jd < int(sekki[1])) {
	        --season;
	    }
	    return season;
	}

	/**
	 * キャッシュクラス
	 */
	function Cache() {}
	Cache.prototype = {
	    get: function (key, missed) {
	        if (typeof(this[key]) === 'undefined') {
	            this[key] = missed(); 
	        }
	        return this[key];
	    },
	};

	/**
	 * @param t 直前の二分二至の時刻
	 */
	var chukisCache = new Cache();
	function findChukis(t) {
	    var key = int(t);
	    return chukisCache.get(key, function () {
	        var rv = [];
	        for (var i = 0; i < 3; ++i) {
	            var chuki = findSekki(t + 32, 30)[1];
	            rv.push(chuki);
	            t = chuki;
	        }
	        return rv; 
	    });
	}

	/**
	 * @return [angle, t] angle: 黄経, t: 節気
	 */
	function findSekki(t, byAngle, offset) {
	    if (!offset) {
	        offset = 0;
	    }
	    var dt = dynamicalTime(t);
	    var sel = solarEclipticLongitude(dt) + offset;
	    // alert(sel);
	    var div = int(sel / byAngle);
	    var angle = div * byAngle;
	    while (true) {
	        var deltaAngle = sel - angle;
	        if (deltaAngle >= 180) {
	            deltaAngle = -360 + deltaAngle;
	        }
	        var deltaT = deltaAngle * 365.2 / 360;
	        // alert("lambda sun: " + sel + ", deltaT: " + deltaT);
	        dt -= deltaT;
	        if (Math.abs(deltaT) < 1 / (24 * 60 * 60)) {
	            // 1s 未満
	            break;
	        }
	        sel = solarEclipticLongitude(dt) + offset;
	    }
	    // t が期待する時刻
	    var jst = dt + (9/24);
	    return [normalizeAngle(angle - offset), jst];
	}
	 
	/**
	 * @param t 直前の二分二至の時刻
	 */
	function findSaku(t) {
	    return findSakuBou(t, 0);
	}
	function findBou(t) {
	    return [findSakuBou(t, -180), findSakuBou(t, 180)];
	}
	function findSakuBou(t, diff) {
	    var dt = dynamicalTime(t);
	    for (var i = 0; ; ++i) {
	        var sel = solarEclipticLongitude(dt);
	        var lel = lunarEclipticLongitude(dt);
	        var deltaLambda = lel - sel + diff;
	        if (i == 0 && deltaLambda < 0) {
	            // alert([sel, lel, deltaLambda].join('\n'));
	            deltaLambda = normalizeAngle(deltaLambda);
	        }
	        // ただし、春
	        //        分の近くで朔がある場合（0°≦λsun≦ 20°）で、月の黄経λmoon≧300°
	        //        の場合には以下のように補正を行ってΔλとする。

	        //             Δλ＝ 360.0 － Δλ
	        else if (0 <= sel && sel <= 20 && lel >= 300) {
	            deltaLambda = 360.0 - normalizeAngle(deltaLambda);
	        }
	        // TODO: 正規化の内容が不明だが必要
	        //      また、Δλが引き込み範囲（±40°）を逸脱した場合には、正規化を行い
	        //    Δλとする。
	        else if (Math.abs(deltaLambda) > 40) {
	            deltaLambda = normalizeAngle(deltaLambda);
	        }
	        // alert("moon: " + lel + "\n" +
	        //         "sun:  " + sel + "\n" +
	        //         "deltaLambda: " + deltaLambda);
	        
	        // TODO: 結果が振動して収束しないとき用の処理
	        var deltaT = deltaLambda * 29.530589 / 360;
	        dt -= deltaT;
	        // alert("dT: " + deltaT + ",\n t: " + t);
	        if (Math.abs(deltaT) < 1 / (24 * 60 * 60)) {
	            // 1s 未満
	            break;
	        }
	    }
	    // これはバグかと思ったが普通にあるよう
	    // if (t < orig) {
	    //     alert('bug');
	    // }
	    // t が期待する時刻
	    var jst = dt + (9/24);
	    return jst;
	}

	/**
	 * @param t 直前の二分二至の時刻
	 */
	var sakusCache = new Cache();
	function findSakus(t) {
	    var key = int(t);
	    return sakusCache.get(key, function () {
	        return findSakuBous(t, 0); 
	    });
	}
	function findBous(t) {
	    var rv = [];
	    [-180, 180].forEach(function (diff) {
	        findSakuBous(t, diff).forEach(function (bou) {
	            rv.push(bou);
	        });
	    });
	    return rv;
	}
	function findSakuBous(t, diff) {
	    var nibunNishi = t;
	    var rv = [];
	    for (var i = 0; i < 5; ++i) {
	        var saku = findSakuBou(t, diff);
	        if (i != 0 && Math.abs(int(rv[rv.length - 1]) - int(saku)) <= 26) {
	            t = rv[rv.length - 1] + 35;
	            saku = findSakuBou(t, diff);
	        }
	        rv.push(saku);
	        t = saku + 30;
	    }
	    
	    if (diff) {
	        return rv;
	    }
	    
	    //   初期値の与え方によっては正規化を行っても目的にあった解を得る事ができず、
	    //   朔日行列が正常に組み立てられない場合があります。 本スクリプトでは、以下の
	    //   ２つのケースを想定して対策を施しておきました。
	    if (int(rv[1]) <= int(nibunNishi)) {
	        //      i   二分二至の前の朔の時刻を２組求めてしまう場合。以下の図ように、
	        // alert("hit");
	        rv.shift();
	        rv.push(findSakuBou(rv[3] + 35, diff)); // 前の朔 + 35
	    }
	    // TODO: 文献の以下のケースへの対応
	    else if (int(rv[0]) >= int(nibunNishi)) {
	        //     ii   二分二至の後の朔の時刻を求めてしまう場合。以下の図ように、
	        //    ［朔１の時刻］≧［直前の二分二至の時刻］
	        rv.pop();
	        rv.unshift(findSakuBou(rv[0] - 27, diff));
	    }

	    return rv;
	}

	function isSameDay(a, b) {
	    // alert(a + ", " + b);
	    if (a == null || b == null) {
	        return false;
	    }
	    return a.getFullYear() == b.getFullYear() &&
	        a.getMonth() == b.getMonth() &&
	        a.getDate() == b.getDate();
	}

	// FIXME:
	// http://www.hottatakeshi.com/moon.html
	// のうち、以下の日付だけ正しく満月・新月が計算できていない
	// 2007/09/27
	// 2010/01/01

	/**
	 * Moon クラス
	 */
	function Moon(year, month) {
	    var jd = juliusDate(this.lastDay(year, month));
	    var newmoons = [];
	    findSakus(jd).forEach(function (saku) {
	        newmoons.push(fromJuliusDate(saku));
	    });
	    this.newmoons = newmoons;
	    var fullmoons = [];
	    findBous(jd).forEach(function (bou) {
	        fullmoons.push(fromJuliusDate(bou));
	    });
	    // alert(fullmoons.join("\n"));
	    this.fullmoons = fullmoons;
	}

	Moon.prototype = {
	    lastDay: function (y, m) {
	        var nextDay = new Date(y, m + 1);
	        var rv = new Date();
	        rv.setTime(nextDay.getTime() - 24 * 60 * 60 * 1000);
	        return rv;
	    },
	    fullmoonOf: function (date) {
	        var rv = null;
	        this.fullmoons.forEach(function (fullmoon) {
	            if (isSameDay(date, fullmoon)) {
	                rv = fullmoon;
	            }
	        });
	        return rv;
	    },
	    newmoonOf: function (date) {
	        var rv = null;
	        this.newmoons.forEach(function (newmoon) {
	            if (isSameDay(date, newmoon)) {
	                rv = newmoon;
	            }
	        });
	        return rv;
	    },
	};


	function calcMoons(y, m) {
	    
	}

	function oldMonth(el) {
	    var months = [2, 5, 8, 11];
	    return months[el / 90];
	}

	/**
	 * OldDate クラス
	 */
	function OldDate(leap, month, day) {
	    this.leap  = leap;
	    this.month = month;
	    this.day   = day;
	}
	OldDate.prototype = {
	    toString: function () {
	        var s = "";
	        if (this.leap) {
	            s += "閏";
	        }
	        s += this.month + "月";
	        s += this.day   + "日";
	        return s;
	    },
	};

	/**
	 * @param jd ユリウス日
	 */
	var bugAlerted = new Cache();
	function oldCalendar(jd) {
	    jd = int(jd);
	    var gd = fromJuliusDate(jd);
	    
	    var nibunNishi = findNibunNishi(jd);
	    // alert(nibunNishi); // OK
	    var chukis = findChukis(nibunNishi[1]);
	    // alert(chukis.join('\n')); // OK
	    var sakus = findSakus(nibunNishi[1]);
	    // alert(sakus.join('\n')); // OK
	    var oMonth = oldMonth(nibunNishi[0]);
	    // alert(oMonth);
	    // MEMO: sakus[0] == oldMonth
	    
	    var matrix = [];
	    sakus.forEach(function (saku) {
	        var jd = int(saku);
	        // 閏？, 旧暦の月, ユリウス日, グレゴリオ暦
	        matrix.push([false, 0, jd, fromJuliusDate(jd)]);
	    });
	    var cond1 = sakus[4] <= chukis[2];
	    chukis.push(nibunNishi[1]); // 二分二至も必ず中気なので中気判定に追加しています。
	    for (var i = 0; i < matrix.length; ++i) {
	        var start = matrix[i][2];
	        var next  = 0;
	        if (i + 1 < matrix.length) {
	            next = matrix[i + 1][2];
	        }
	        var containsChuki = false;
	        chukis.forEach(function (chuki) {
	            var chukiDate = int(chuki);
	            if (start <= chukiDate && (!next || chukiDate < next)) {
	                containsChuki = true;
	            }
	        });
	        var isLeapMonth = cond1 && !containsChuki;
	        matrix[i][0] = isLeapMonth;
	        if (isLeapMonth) {
	            --oMonth;
	        }
	        matrix[i][1] = (oMonth - 1) % 12 + 1;
	        ++oMonth;
	    }
	    
	    var oldDate = new OldDate();
	    for (var i = 0; i < matrix.length; ++i) {
	        var nextDate = null;
	        if (i + 1 < matrix.length) {
	            nextDate = matrix[i + 1][3];
	        }
	        if (!nextDate || gd < nextDate) {
	            oldDate.leap = matrix[i][0];
	            oldDate.month = matrix[i][1];
	            
	            var oldDay = jd - matrix[i][2] + 1;
	            oldDate.day = oldDay;
	            break;
	        }
	    }
	    if (typeof(oldDate.month) == "undefined") {
	        // 2015/03/20,
	        // 2017/09/20-22の旧暦が計算できていないよう
	        bugAlerted.get(jd, function () {
	            alert("旧暦計算に不具合があります:\n" + fromJuliusDate(jd).toLocaleDateString());
	            return true;
	        });
	    }
	    // alert(matrix.join('\n'));
	    // alert(oldDate);
	    return oldDate;
	}

	function allRokkis() {
	    return [
	        "先勝", "友引", "先負", "空亡", "大安", "赤口"
	    ];
	}
	function rokki(oldDate) {
	    return allRokkis()[(oldDate.month + oldDate.day - 2) % 6];
	}

	var gAllEtos = null;
	function allEtos() {
	    if (!gAllEtos) {
	        var kJikkan = "甲乙丙丁戊己庚辛壬癸";
	        var kJunishi = "子丑寅卯辰巳午未申酉戌亥";
	        gAllEtos = [];
	        for (var i = 0; i < 60; ++i) {
	            gAllEtos.push(kJikkan[i % kJikkan.length] + kJunishi[i % kJunishi.length]);
	        }
	    }
	    return gAllEtos;
	}
	function eto(jd) {
	    var kJikkan = "甲乙丙丁戊己庚辛壬癸";
	    var kJunishi = "子丑寅卯辰巳午未申酉戌亥";
	    // 1873年 1月12日 が甲子の基準日
	    var days = int(jd) - int(juliusDate(new Date(1873, 0, 12)));
	    return kJikkan[days % kJikkan.length] +
	           kJunishi[days % kJunishi.length];
	}

	function allKyuseis() {
	    return [
	        "一白", "二黒", "三碧", "四緑", "五黄", "六白", "七赤", "八白", "九紫",        
	    ];
	}
	function kyusei(jd) {
	    // 本実装では、主に以下を参照しました。
	    // https://ja.wikipedia.org/wiki/%E4%B9%9D%E6%98%9F
	    // http://koyomi.vis.ne.jp/doc/mlwa/200703270.htm
	    var kKyuseis = allKyuseis();
	    jd = int(jd);
	    // 対象の日を含む二至
	    var nishi = findSekki(jd+1, 180, 90);
	    // 次の二至
	    var theOther = findSekki(nishi[1]+240, 180, 90);
	    // alert(nishi);
	    // alert(theOther);
	    
	    var days;
	    var d1 = int(nishi[1]);
	    while (eto(d1) != "甲子") {
	        --d1;
	    }
	    days = int(nishi[1]) - d1;
	    if (days > 29) {
	        d1 += 60; // 基準日
	    }
	    
	    var d2 = int(theOther[1]);
	    while (eto(d2) != "甲子") {
	        --d2;
	    }
	    days = int(theOther[1]) - d2;
	    if (days > 29) {
	        d2 += 60; // 基準日
	    }
	    
	    var diff = d2 - d1;
	    days = jd - d1;
	    var targetNishi = nishi;
	    if (days >= diff) {
	        days -= diff;
	        targetNishi = theOther;
	    }
	    
	    var isYouton = targetNishi[0] == 270;
	    var i = isYouton ? 0 : 8;
	    var dir = isYouton ? +1 : -1;
	    if (diff == 180) {
	    } else if (diff == 240) {
	        // alert("特殊ケース:" + fromJuliusDate(d1+180+30));
	        // 今回の陽遁・陰遁の長さが 240 日になる場合、
	        // 最後の 60 日は閏となり
	        // 特に最後の 30 日は次の陰遁・陽遁の一部になります。
	        // 特別扱いが必要なのはこの最後の 30 日だけです。
	        if (180 + 30 <= days) {
	            days -= 240 + 1; // days はマイナスになる
	            i = isYouton ? 6 : 2;
	        }
	    } else {
	        alert("想定外のエラー:" + fromJuliusDate(jd));
	    }
	    
	    i += days * dir;
	    while (i < 0) {
	        i += kKyuseis.length;
	    }
	    // alert(i);
	    return kKyuseis[i % kKyuseis.length];
	}

	function findSetsugetsu(jd) {
	    // findSekki() は「前」の日付を探しに行くため、当日も含めるには +1 する
	    // 必要があります。
	    // FIXME: 元にしたスクリプトの仕様に引きずられている部分…
	    jd = int(jd) + 1;
	    var sekki = findSekki(jd, 30, 15);
	    return [(normalizeAngle(sekki[0] + 15) / 30 + 1) % 12 + 1, sekki[1]]
	}

	function allChokus() {
	    return "建除満平定執破危成納開閉".split("");
	}
	function choku(jd) {
	    // 正月 寅 	二月 卯 	三月 辰 	四月 巳
	    // 五月 午 	六月 未 	七月 申 	八月 酉
	    // 九月 戌 	十月 亥 	十一月 子 	十二月 丑
	    var kEto = "寅卯辰巳午未申酉戌亥子丑";
	    var kChokus = "建除満平定執破危成納開閉";
	    var s = findSetsugetsu(jd);
	    var etoToFind = kEto[s[0]-1];
	    // alert(fromJuliusDate(s[1]));
	    // alert(s[0] + "=>" + etoToFind);
	    var first = int(s[1]);
	    for (var i = 0; i < kEto.length; ++i) {
	        if (etoToFind == eto(first + i).charAt(1)) {
	            // ここで first + i が建となる日
	            var ken = first + i;
	            // alert(fromJuliusDate(ken));
	            var days = int(jd) - ken;
	            while (days < 0) {
	                days += kChokus.length;
	            }
	            // alert(days);
	            return kChokus[days % kChokus.length];
	        }
	    }
	    // alert("NG");
	}

	function allShukus() {
	    return "角亢氐房心尾箕斗女虚危室壁奎婁胃昴畢觜参井鬼柳星張翼軫".split("");
	}
	function shuku(oldDate) {
	    var kShukus = "角亢氐房心尾箕斗女虚危室壁奎婁胃昴畢觜参井鬼柳星張翼軫";
	    var kStarts = "室奎胃畢参鬼張角氐心斗虚";
	    var start = kStarts.charAt(oldDate.month - 1);
	    var i = kShukus.indexOf(start);
	    i += oldDate.day - 1;
	    return kShukus[i % kShukus.length];
	}

	function allNattins() {
	    return [
	        "海中金", "爐中火", "大林木", "路傍土", "剣鋒金",
	        "山頭火", "澗下水", "城頭土", "白蝋金", "楊柳木",
	        "井泉水", "屋上土", "霹靂火", "松柏木", "長流水",
	        "沙中金", "山下火", "平地木", "壁上土", "金箔金",
	        "覆燈火", "天河水", "大駅土", "剣釧金", "桑柘木",
	        "大渓水", "沙中土", "天上火", "柘榴木", "大海水",        
	    ];
	}
	function nattin(jd) {
	    // FIXME: 甲子の日を求めるのが非効率なロジック…
	    var kousi = jd;
	    while (eto(kousi) != "甲子") {
	        --kousi;
	    }
	    return allNattins()[int((jd - kousi) / 2)];
	}

	/**
	 * 本日が二十四節気の切り替わり日ならその節気を返す。
	 */
	function nijuShisekki(jd) {
	    jd = int(jd);
	    var kSekkis = [
	        "春分", "清明", "穀雨", "立夏", "小満", "芒種",
	        "夏至", "小暑", "大暑", "立秋", "処暑", "白露",
	        "秋分", "寒露", "霜降", "立冬", "小雪", "大雪",
	        "冬至", "小寒", "大寒", "立春", "雨水", "啓蟄",
	    ];
	    var sekki = findSekki(jd+1, 15);
	    // alert(sekki);
	    if (int(sekki[1]) == jd) {
	        return kSekkis[sekki[0] / 15];
	    }
	    return "";
	}

	function isSetsubun(jd) {
	    return nijuShisekki(jd+1) == "立春";
	}
	function isHachijuHachiya(jd) {
	    return nijuShisekki(jd-87) == "立春";
	}
	function isHiganStart(jd) {
	    return ["春分", "秋分"].indexOf(nijuShisekki(jd+3)) > -1;
	}
	function isHiganEnd(jd) {
	    return ["春分", "秋分"].indexOf(nijuShisekki(jd-3)) > -1;
	}
	function isSyanichi(jd) {
	    var theEto = eto(jd);
	    if (theEto.charAt(0) != "戊") {
	        return "";
	    }
	    var nibun = findSekki(jd+10, 180);
	    var syunsya = nibun[0] == 0;
	    nibun = int(nibun[1]);
	    if (Math.abs(nibun - jd) > 10) {
	        return "";
	    }
	    var daysBefore = 0;
	    while (eto(nibun - daysBefore).charAt(0) != "戊") {
	        ++daysBefore;
	    }
	    var daysAfter = 0;
	    while (eto(nibun + daysAfter).charAt(0) != "戊") {
	        ++daysAfter;
	    }
	    var syanichi = nibun + ((daysBefore < daysAfter) ? -daysBefore : daysAfter);
	    return syanichi == int(jd) ? ("社日(" + (syunsya ? "春" : "秋") + ")") : "";
	}
	function findSanpuku(jd) {
	    var theEto = eto(jd);
	    if (theEto.charAt(0) != "庚") {
	        return "";
	    }
	    var kSekkis = [
	        [90, [2, 3]], // 夏至以降の3,4回目
	        [135, [0]], // 立秋以降の最初
	    ];
	    var results = [];
	    kSekkis.forEach(function (aPair) {
	        var indices = aPair[1];
	        var adjustment = 10 * (indices[indices.length - 1] + 1);
	        var sekki = findSekki(jd + adjustment, 360, -aPair[0]);
	        sekki = int(sekki[1]);
	        // alert(fromJuliusDate(sekki));
	        var index = 0;
	        var daysAfter = 0;
	        while (indices.length) {
	            if (eto(sekki).charAt(0) == "庚") {
	                if (indices[0] == index) {
	                    results.push(sekki);
	                    indices.shift();
	                }
	                ++index;
	            }
	            ++sekki;
	        }
	    });
	    return results;
	}
	function isSanpuku(jd) {
	    var sanpuku = findSanpuku(jd);
	    for (var i = 0; i < sanpuku.length; ++i) {
	        if (int(sanpuku[i]) == int(jd)) {
	            return ["初伏", "中伏", "末伏"][i]
	        }
	    }
	    return "";
	}
	function isNyubai(jd) {
	    var nyubai = int(findSekki(jd+1, 360, -80)[1]);
	    return int(jd) == nyubai;
	}
	function isHangesyo(jd) {
	    var hangesyo = int(findSekki(jd+1, 360, -100)[1]);
	    return int(jd) == hangesyo;
	}
	function isDoyoStart(jd) {
	    var doyoStart = findSekki(jd+1, 90, -27);
	    return int(jd) == int(doyoStart[1]) ? "春夏秋冬".charAt((doyoStart[0]-27)/90%4) + "土用入" : "";
	}
	function isDoyoEnd(jd) {
	    var kYonritsu = ["立夏", "立秋", "立冬", "立春"];
	    var found = kYonritsu.indexOf(nijuShisekki(jd+1));
	    if (found < 0) {
	        return "";
	    }
	    return "春夏秋冬".charAt(found) + "土用明";
	}
	function isDaysFromRissyun(days, jd) {
	    return nijuShisekki(jd-days+1) == "立春";
	}
	function isJippouGureStart(jd) {
	    return eto(jd) == "甲申";
	}
	function isJippouGureEnd(jd) {
	    return eto(jd) == "癸巳";
	}
	function isTenichiTenjoStart(jd) {
	    return eto(jd) == "癸巳";
	}
	function isTenichiTenjoEnd(jd) {
	    return eto(jd) == "戊申";
	}
	function isIchiryuManbai(jd) {
	    var kEtosForSetsugetsu = [
	        "丑午", "酉寅", "子卯", "卯辰", "巳午", "酉午",
	        "子未", "卯申", "酉午", "酉戌", "亥子", "卯子",
	    ];
	    var s = findSetsugetsu(jd);
	    var etos = kEtosForSetsugetsu[s[0]-1];
	    var todayJunishi = eto(jd)[1];
	    return etos.indexOf(todayJunishi) > -1;
	}
	function isTensya(jd) {
	    var kEtoForSeason = [
	        "戊寅", "甲午", "戊申", "甲子"
	    ];
	    var etoToFind = kEtoForSeason[findSeason(jd)];
	    return eto(jd) == etoToFind;
	}
	function isFujoju(oldDate) {
	    var kFujojus = [
	        [3, 11, 19, 27],
	        [2, 10, 18, 26],
	        [1,  9, 17, 25],
	        [4, 12, 20, 28],
	        [5, 13, 21, 29],
	        [6, 14, 22, 30],
	    ];
	    var days = kFujojus[(oldDate.month - 1) % 6];
	    if (typeof(days) === "undefined") {
	        // FIXME: 月表示が更新されないよりはマシな動作に調整中。
	        return false;
	    }
	    return days.indexOf(oldDate.day) > -1;
	}
	function isHassen(jd) {
	    var kHassens = [
	        "壬子", "甲寅", "乙卯", "丁巳",
	        "己未", "庚申", "辛酉", "癸亥",
	    ];
	    return kHassens.indexOf(eto(jd)) > -1;
	}
	function isSanrinbou(jd) {
	    var kEtoForSetsugetsu = "亥寅午亥寅午亥寅午亥寅午";
	    var s = findSetsugetsu(jd);
	    var etoToFind = kEtoForSetsugetsu[s[0]-1];
	    var todayJunishi = eto(jd)[1];
	    return etoToFind === todayJunishi;
	}

	function sekku(date) {
	    var kSekkus = [
	        [[1, 7], "七草"],
	        [[3, 3], "雛祭"],
	        [[5, 5], "端午"],
	        [[7, 7], "七夕"],
	        [[9, 9], "重陽"],
	    ];
	    var rv = "";
	    kSekkus.forEach(function (aSekku) {
	        var sekkuDate = aSekku[0];
	        if (date.getMonth() + 1 == sekkuDate[0] &&
	            date.getDate()      == sekkuDate[1])
	        {
	            rv = aSekku[1];
	        }
	    });
	    return rv;
	}

	// monthly.js でしか使わないが、旧暦と関連するロジック
	function heiseiYear(y) {
	    return "平成" + (y - 1988) + "年";
	}
	function jaMonth(m) {
	    var kJaNames = [
	        "睦月",
	        "如月",
	        "弥生",
	        "卯月",
	        "皐月",
	        "水無月",
	        "文月",
	        "葉月",
	        "長月",
	        "神無月",
	        "霜月",
	        "師走",
	    ];
	    return kJaNames[m];
	}

	// 播磨陰陽暦における暦注
	function tagsForDate(date, moon) {
	    var jd = juliusDate(date);
	    var tags = [];
	    var newSekku = sekku(date);
	    if (newSekku) {
	        tags.push(["sekku", newSekku]);
	    }
	    var newNijuShisekki = nijuShisekki(jd);
	    if (newNijuShisekki) {
	        tags.push(["nijuShisekki", newNijuShisekki]);
	    }
	    if (isSetsubun(jd)) {
	        tags.push(["zassetsu", "節分"]);
	    }
	    if (isHachijuHachiya(jd)) {
	        tags.push(["zassetsu", "八十八夜"]);
	    }
	    if (isNyubai(jd)) {
	        tags.push(["zassetsu", "入梅"]);
	    }
	    if (isHangesyo(jd)) {
	        tags.push(["zassetsu", "半夏生"]);
	    }
	    var syanichi = isSyanichi(jd);
	    if (syanichi) {
	        tags.push(["zassetsu", syanichi]);
	    }
	    var doyoStart = isDoyoStart(jd);
	    if (doyoStart) {
	        tags.push(["zassetsu", doyoStart]);
	    }
	    var doyoEnd = isDoyoEnd(jd);
	    if (doyoEnd) {
	        tags.push(["zassetsu", doyoEnd]);
	    }
	    if (isHiganStart(jd)) {
	        tags.push(["zassetsu", "彼岸入"]);
	    }
	    if (isHiganEnd(jd)) {
	        tags.push(["zassetsu", "彼岸明"]);
	    }
	    if (isDaysFromRissyun(210, jd)) {
	        tags.push(["zassetsu", "二百十日"]);
	    }
	    if (isDaysFromRissyun(220, jd)) {
	        tags.push(["zassetsu", "二百二十日"]);
	    }
	    if (isJippouGureStart(jd)) {
	        tags.push(["badDay", "十方暮入"]);
	    }
	    if (isJippouGureEnd(jd)) {
	        tags.push(["badDay", "十方暮終"]);
	    }
	    if (isTenichiTenjoStart(jd)) {
	        tags.push(["goodDay", "天天上入"]);
	    }
	    if (isTenichiTenjoEnd(jd)) {
	        tags.push(["goodDay", "天天上終"]);
	    }
	    var sanpuku = isSanpuku(jd);
	    if (sanpuku) {
	        tags.push(["badDay", sanpuku]);
	    }
	    if (isSanrinbou(jd)) {
	        tags.push(["goodDay", "三輪宝"]);
	    }
	    if (isFujoju(oldCalendar(jd))) {
	        tags.push(["badDay", "不成就日"]);
	    }
	    if (isIchiryuManbai(jd)) {
	        tags.push(["goodDay", "一粒万倍日"]);
	    }
	    if (isTensya(jd)) {
	        tags.push(["goodDay", "天赦日"]);
	    }
	    if (isHassen(jd)) {
	        tags.push(["badDay", "八専"]);
	    }
	    if (!moon) {
	        moon = new Moon(date.getFullYear(), date.getMonth());
	    }
	    var fullmoon = moon.fullmoonOf(date); 
	    if (fullmoon) {
	        tags.push(["fullmoon", "満月", fullmoon]);
	    }
	    var newmoon = moon.newmoonOf(date);
	    if (newmoon) {
	        tags.push(["newmoon", "新月", newmoon]);
	    }
	    return tags;
	}

	if (true) {
	    // node.js でテストする時用の exports
	    // 厳密には今時 browserify を使うべきだが、ひとまず簡易な仕組みで対応する。
	    module.exports = {
	        juliusDate: juliusDate,
	        fromJuliusDate: fromJuliusDate,
	        dynamicalTime: dynamicalTime,
	        solarEclipticLongitude: solarEclipticLongitude,
	        lunarEclipticLongitude: lunarEclipticLongitude, 
	        findNibunNishi: findNibunNishi,
	        findSeason: findSeason,
	        findChukis: findChukis,
	        findSaku: findSaku,
	        findSakus: findSakus,
	        oldCalendar: oldCalendar,
	        rokki: rokki,
	        OldDate: OldDate,
	        eto: eto,
	        kyusei: kyusei,
	        findSetsugetsu: findSetsugetsu,
	        choku: choku,
	        shuku: shuku,
	        nattin: nattin,
	        nijuShisekki: nijuShisekki,
	        isSetsubun: isSetsubun,
	        isHachijuHachiya: isHachijuHachiya,
	        isHiganStart: isHiganStart,
	        isHiganEnd: isHiganEnd,
	        isSyanichi: isSyanichi,
	        isSanpuku: isSanpuku,
	        isNyubai: isNyubai,
	        isHangesyo: isHangesyo,
	        isDoyoStart: isDoyoStart,
	        isDoyoEnd: isDoyoEnd,
	        isDaysFromRissyun: isDaysFromRissyun,
	        isJippouGureStart: isJippouGureStart,
	        isJippouGureEnd: isJippouGureEnd,
	        isTenichiTenjoStart: isTenichiTenjoStart,
	        isTenichiTenjoEnd: isTenichiTenjoEnd,
	        isIchiryuManbai: isIchiryuManbai,
	        isTensya: isTensya,
	        isFujoju: isFujoju,
	        isHassen: isHassen,
	        isSanrinbou: isSanrinbou,
	        tagsForDate: tagsForDate,
	        heiseiYear: heiseiYear,
	        jaMonth: jaMonth,
	        isSameDay: isSameDay,
	        allRokkis: allRokkis,
	        allEtos: allEtos,
	        allKyuseis: allKyuseis,
	        allChokus: allChokus,
	        allShukus: allShukus,
	        allNattins: allNattins,

	        Moon: Moon, 
	    };
	}


/***/ },
/* 2 */
/***/ function(module, exports) {

	function parseHash(url) {
	    var parts = url.split('#');
	    if (parts.length < 2) {
	        return null;
	    }
	    return decodeURIComponent(parts[1]);
	}

	module.exports = {
	    parseHash: parseHash,
	};


/***/ }
/******/ ]);