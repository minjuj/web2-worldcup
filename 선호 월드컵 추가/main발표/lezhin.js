if(!window['lezhin']) {
	lezhin = {};
	( function (_O) {
    _O.init = () => {
      const v = _O.Vars;
      v.curRound = 16;
      v.curStage = 0;
      v.gameHistory = {
        '16': [],
        '8': [],
        '4': [],
        '2': [],
        '1': []
      };
      v.lists = _O.Ctrl.getLists();
      _O.Ctrl.prevCancelOnOff();
    };
    _O.start = () => {
      _O.init();
      _O.Ctrl.gameNewStart.bind(_O.Ctrl)();
    };
    _O.Vars = {
      lists:null,
      curRound: 0,
      curStage: 0,
      maxRound: 16,
      gameHistory: null
    };
    _O.Ctrl = {
      getLists() {
        return [
          {
            name:'우도환',
                        imgSrc:'https://blog.kakaocdn.net/dn/k75ib/btqE74B7cRt/IJirOvfWWYGbWkSuFIBwk0/img.png'
            ,selected:false
            },
            {
                        name:'송강',
                        imgSrc:'https://www.cosinkorea.com/data/photos/20200104/art_15796551566318_40cb82.jpg',
                        selected:false
            },
            {
                        name:'김선호',
                        imgSrc:'https://newsimg.hankookilbo.com/cms/articlerelease/2021/10/20/6d26b3f0-a250-404d-bf6b-1fdee23c471f.jpg',
                        selected:false
            },
            {
                        name:'김재영',
                        imgSrc:'https://w.namu.la/s/c4077ee2286d9b72bf483aaaafc7e01d4a7c6dad564bb867f59101a70a64d8bdb316548360117440943325a0e8446703d2b8c5a90096e8c60349f3b65b1d3ba72f128d2077e766b5505ed97fc9fe2e24',
                        selected:false
            },
            {
                        name:'서강준',
                        imgSrc:'https://mblogthumb-phinf.pstatic.net/MjAyMDAyMjZfNjkg/MDAxNTgyNjk0MjgwMTAw.E-Yyx3oVoPMaIQJpu_tJMPTtmJfjsOsOc9GL0iOAw6cg.SZ2iRZLALXhhifeEQWvn9Ac4y73kDYk08Co6Xj7gu5Mg.JPEG.eett7777/IMG_4124.jpg?type=w800',
                        selected:false
            },
            {
                        name:'공명',
                        imgSrc:'https://blog.kakaocdn.net/dn/btnj95/btrcuIGzuG3/mSzZ87dPAvELaZAUw1TD3k/img.jpg',
                        selected:false
            },
            {
                        name:'이도현',
                        imgSrc:'https://t1.daumcdn.net/cfile/tistory/992F75375FE3579411',
                        selected:false
            },
            {
                        name:'김수현',
                        imgSrc:'https://img.hankyung.com/photo/202008/BF.23393413.1.jpg',
                        selected:false
            },
            {
                        name:'이종석',
                        imgSrc:'https://mblogthumb-phinf.pstatic.net/MjAyMDA0MTdfMTE0/MDAxNTg3MTEyNjg1MTgy.MODHxVr9PZlAKeYQ8M5M3wqU2RHazeaAdyF9wtSbMp4g.msjj2BW_2OPRRWv57WOO5thpL139Dx5PJnwt_bNuKRYg.PNG.thirdsky30/CropArea0008.png?type=w800',
                        selected:false
            },
            {
                        name:'송중기',
                        imgSrc:'https://w.namu.la/s/96cf778fbf9bcb7b7de87dde37622335511e4da7ec33d08c66e3325e51562663b837c2b3df7daab286b2b9247e700357bb127061b5de1a8f169a4b29d7f5d923aa9691b9e8fe5ff24e37d4a375f0e997deac7b76bcf85557f4088809b792df69',
                        selected:false
            },
            {
                        name:'강하늘',
                        imgSrc:'https://mblogthumb-phinf.pstatic.net/MjAxOTA5MjJfOTYg/MDAxNTY5MTE2MDU1MjA4.D405M6URcSzaXWSuSiqYZ0K9nM0ywCsMWRJygBqjBs8g.q4cJSB0JCVH6w-Qnr22JChYbjyv-9RB8JoK0mW3ybt0g.JPEG.pola0216/D0IpWEXWkAUHggj.jpg?type=w800',
                        selected:false
            },
            {
                        name:'지창욱',
                        imgSrc:'https://img.sportsworldi.com/content/image/2020/12/01/20201201516452.jpg',
                        selected:false
            },
            {
                        name:'구교환',
                        imgSrc:'https://entertainimg.kbsmedia.co.kr/cms/uploads/BBSIMAGE_20210905125744_e0809112c9cfd807b6b35dfdeeed529d.jpg',
                        selected:false
            },
            {
                        name:'주지훈',
                        imgSrc:'http://topclass.chosun.com/news_img/2004/2004_056.jpg',
                        selected:false
            },
            {
                        name:'이민기',
                        imgSrc:'https://t1.daumcdn.net/liveboard/tab/7959a86b93ea46ddaac8f6b1b057f679.JPG',
                        selected:false
            },
            {
                        name:'배현성',
                        imgSrc:'https://t1.daumcdn.net/liveboard/newsade/a9965382afd34a2887cdf3128e8e2ecc.JPG',
                        selected:false
            }
        ];
      },
      rndLists(arr) { //배열 랜덤 섞음
        return arr.map((n) => { return [Math.random(), n] }).sort().map((n) => {  return n[1] });//n[1].selected = false;
      },
      selectedLists(arr) {
        return arr.filter((n) => n.selected === true);
      },
      gameNewStart() {
        const v = _O.Vars;
        v.gameHistory[v.curRound.toString()] = this.rndLists(v.lists);
        _O.Html.set.bind(_O.Html)();
      },
      copyObj(obj) { //Deep Copy
        let copy = {};
        for (let attr in obj) {
          if (obj.hasOwnProperty(attr)) {
            copy[attr] = obj[attr];
          }
        }
        copy.selected = false;
        return copy;
      },
      nextRound() {
        const v = _O.Vars;
        if(v.curRound <= 1) return;
        v.lists = _O.Ctrl.selectedLists(v.gameHistory[v.curRound.toString()]).map((n) => _O.Ctrl.copyObj(n));
        if(v.curRound > 1) v.curRound /= 2;
        v.curStage = 0;
        v.gameHistory[v.curRound.toString()] = this.rndLists(v.lists);
        // console.log('v.lists::',v.lists, 'v.gameHistory::',v.gameHistory);
        _O.Html.setRoundTitle();
      },
      prevCancelOnOff() {
        const footerObj = document.getElementById('footer');
        if(_O.Vars.curRound === _O.Vars.maxRound) {
          if(_O.Vars.curRound > 1 && _O.Vars.curStage > 0) footerObj.className = 'footer';
          else footerObj.className = 'footer soff';
        } else {
          if(_O.Vars.curRound > 1) footerObj.className = 'footer';
          else footerObj.className = 'footer soff';
        }
      }
    };
    _O.Event = {
      clickItem(obj) {
        const v = _O.Vars;
        if(v.curRound === 1) return;
        const idx = obj.id.split('_')[1];
        v.gameHistory[v.curRound.toString()][idx].selected = true;
        if(v.curStage < v.curRound/2) v.curStage++;
        if(v.curStage === v.curRound/2) _O.Ctrl.nextRound();
        _O.Html.setItem();
        _O.Ctrl.prevCancelOnOff();
      },
      overItem(obj) {
        const objs = document.querySelectorAll('#list_ideal li a[hover="true"]');
        objs.forEach((itm) => itm.setAttribute('hover', 'false'));
        if(obj.getAttribute('hover') === 'true') return;
        obj.setAttribute('hover', 'true');
      },
      outItem(obj) {
        if(obj.getAttribute('hover') === 'false') return;
        obj.setAttribute('hover', 'false');
      },
      clickCancel() {
        _O.start();
      },
      clickPrev() {
        const v = _O.Vars;
        if(v.curStage > 0) v.curStage--;
        else {
          v.gameHistory[v.curRound.toString()] = [];
          if(v.curRound < _O.Vars.maxRound) {
            v.curRound *= 2;
            v.curStage = v.curRound / 2 - 1;
          }
          _O.Html.setRoundTitle();
          v.lists = v.gameHistory[v.curRound.toString()];
        }

        v.lists[v.curStage * 2].selected = false;
        v.lists[v.curStage * 2 + 1].selected = false;
        _O.Html.setItem();
        _O.Ctrl.prevCancelOnOff();
      }
    };
    _O.Html = {
      set() {
        this.setRoundTitle();
        this.setContent();
      },
      setHistory() {
        const tObj = document.getElementById('modal');
        let key, roundDiv, imgObj, roundTitleDiv, roundImgWrapDiv;
        let historyTitleDiv = document.createElement('DIV');
        historyTitleDiv.className = 'tit';
        tObj.appendChild(historyTitleDiv);
        let wrapDiv = document.createElement('DIV');
        wrapDiv.className = 'history_box';
        for(key in _O.Vars.gameHistory) {
          roundDiv = document.createElement('DIV');
          roundDiv.className = 'round';
          roundTitleDiv = document.createElement('h5');
          roundTitleDiv.innerText = (key === '1' ? `최종 이상형` : `${key}강`);
          roundDiv.appendChild(roundTitleDiv);
          roundImgWrapDiv = document.createElement('DIV');
          _O.Vars.gameHistory[key].forEach((itm) => {
            imgObj = document.createElement('IMG');
            imgObj.setAttribute('src', itm.imgSrc);
            imgObj.className = `history_item ${itm.selected ? '' : (key !== '1' ? 'dim' : '')}`;
            roundImgWrapDiv.appendChild(imgObj);
          });
          roundDiv.appendChild(roundImgWrapDiv);
          wrapDiv.appendChild(roundDiv);
        }
        tObj.appendChild(wrapDiv);
      },
      setRoundTitle() {
        if(_O.Vars.curRound > 1) document.getElementById('roundTitle').innerText = `${_O.Vars.curRound}강 선택`;
        else document.getElementById('roundTitle').innerText = `최종 이상형이 선정되었습니다.`;
      },
      setItem() {
        const s = _O.Html.getItem();
        const tObj = document.getElementById('list_ideal');
        if(!tObj) return;
        tObj.innerHTML = s;
        if(_O.Vars.curRound === 1) _O.Html.setHistory();
      },
      getItem() {
        let s = '', i = _O.Vars.curStage * 2, length = i + (_O.Vars.curRound > 1 ? 2 : _O.Vars.curRound);
        for(i; i < length && length <= _O.Vars.curRound; i++) {
          s += `
          <li>
            <a class="item ${_O.Vars.curRound === 1 ? 'final' : ''}" id="item_${i}" hover="false" href="javascript:void(0);" onclick="lezhin.Event.clickItem(this);" onmouseover="lezhin.Event.overItem(this);" onmouseout="lezhin.Event.outItem(this);">
              <span class="thumb"><img src="${_O.Vars.gameHistory[_O.Vars.curRound.toString()][i]['imgSrc']}" alt="사진"></span>
              <strong> ${_O.Vars.gameHistory[_O.Vars.curRound.toString()][i]['name']}</strong>
            </a>
          </li>
          `;
          if(_O.Vars.curRound === 1) {
            s += `
            <li id="history">
              <a class="modal final" id="modal" href="javascript:void(0);"></a>
            </li>
            `;
          }
        }
        return s;
      },
      setContent() {
        const tObj = document.getElementById('content');
        tObj.className = 'content in_game';
        let s = `
          <ul class="list_ideal" id="list_ideal">
          ${this.getItem()}
          </ul>
        `;
        tObj.innerHTML = s;
      }
    }
	}) (lezhin);
}