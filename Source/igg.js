     document.querySelectorAll('.page-button').forEach(button => {
            button.addEventListener('click', function() {
                document.querySelectorAll('.page-button').forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                document.querySelectorAll('.menu-page').forEach(page => page.classList.remove('active'));
                document.getElementById(this.getAttribute('data-page')).classList.add('active');
            });
        });

        // Dragging functionality
        const header = document.querySelector('.header');
        const menu = document.querySelector('.mod-menu');
        let isDragging = false;
        let offsetX, offsetY;

        header.addEventListener('mousedown', (e) => {
            isDragging = true;
            offsetX = e.clientX - menu.getBoundingClientRect().left;
            offsetY = e.clientY - menu.getBoundingClientRect().top;
            menu.style.transition = 'none';
        });

        document.addEventListener('mousemove', (e) => {
            if (isDragging) {
                menu.style.left = `${e.clientX - offsetX}px`;
                menu.style.top = `${e.clientY - offsetY}px`;
            }
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
            menu.style.transition = 'left 0.2s ease, top 0.2s ease';
        });
  
function insta() {
  location.href = "https://www.instagram.com/h4xstar/";
}

function dis() {
    location.href = "https://discord.gg/haxstar";
}



function s105s() {
  alert('AWM SCOPE DONE')
  h5gg.clearResults();
  h5gg.searchNumber('31101603021', 'I64', '0x100000000', '0x160000000');
  var count = h5gg.getResultsCount();
  var r = h5gg.getResults(count);
  var cnt = 0;
  for (var i = 0; i < count; i++) {
    var addr1 = r[i].address;
    var dizhi0 = (Number(addr1) + 8);
    {
      h5gg.setValue(dizhi0, 2139095040, "I32");
    }
  }
  vant.showNotify({
    type: 'success',
    message: 'AWM自瞄'
  });
}

function s101s() {
  alert('AWM SWITCH DONE')
    h5gg.clearResults();
    h5gg.searchNumber('4603687625386098688', 'I64', '0x100000000', '0x160000000');
    var count = h5gg.getResultsCount();
    var r = h5gg.getResults(count);
    var cnt = 0;
    for (var i = 0; i < count; i++) {
        var addr1 = r[i].address;
        var dizhi0 = (Number(addr1) + 36);
        var dizhi1 = (Number(addr1) + 40);
        {
            h5gg.setValue(dizhi0, 0.01, "F32");
            h5gg.setValue(dizhi1, 0.01, "F32");
        }
    }
    vant.showNotify({
        type: 'success',
        message: 'AWM快切'
    });
}

function aim180() {
  alert('AIM 180 DONE ')
  h5gg.clearResults();
  h5gg.searchNumber('1057048494', 'I32', '0x100000000', '0x160000000');
  h5gg.editAll('-2000', 'I32');
  h5gg.clearResults();
  h5gg.searchNumber('1054951342', 'I32', '0x100000000', '0x160000000');
  h5gg.editAll('-2000', 'I32');
  h5gg.clearResults();
  h5gg.searchNumber('1053273620', 'I32', '0x100000000', '0x160000000');
  h5gg.editAll('-2000', 'I32');
  h5gg.clearResults();
}
function HeadshotCu() {
  alert('HEAD SHOT CU DONE ')
        function searchAndReplace(searchValue, replaceValue, type) {
        h5gg.clearResults(); h5gg.searchNumber(searchValue, type, '0x100000000', '0x200000000'); var results = h5gg.getResults(h5gg.getResultsCount()); for (var i = 0; i < results.length; i++) {
        h5gg.setValue(results[i].address, replaceValue.toString(), type)}}
        searchAndReplace(2018908708, 96688289, 'I32')
}
    
function Norecoil() {
  h5gg.clearResults();
  h5gg.searchNumber('1016018816', 'I32', '0x100000000', '0x160000000');
  h5gg.editAll('0016018816', 'I32');
  alert("Norecoil On");
  h5gg.clearResults();
  codeStatus = true;
}
        
function buffdame() {
  alert('BUFF DAMAGE')
  h5gg.clearResults();
  h5gg.searchNumber('5.5', 'F32', '0x100000000', '0x160000000');
  h5gg.editAll('10000000', 'F32');
  h5gg.clearResults();
  h5gg.searchNumber('0.75', 'F32', '0x100000000', '0x160000000');
  h5gg.editAll('10000000', 'F32');
  h5gg.clearResults();
}

function s100s() {
  alert('aim awm done')
  h5gg.clearResults();
  h5gg.searchNumber('4603687625386098688', 'I64', '0x100000000', '0x160000000');
  var count = h5gg.getResultsCount();
  var r = h5gg.getResults(count);
  var cnt = 0;
  for (var i = 0; i < count; i++) {
    var addr1 = r[i].address;
    var dizhi0 = (Number(addr1) + 36);
    var dizhi1 = (Number(addr1) + 40);
    var dizhi2 = (Number(addr1) + -308);
    {
      h5gg.setValue(dizhi0, 0.01, "F32");
      h5gg.setValue(dizhi1, 0.01, "F32");
      h5gg.setValue(dizhi2, 0, "I32");
    }
  }
  vant.showNotify({
    type: 'success',
    message: 'AWM快切準心'
  });
}
function so88() {
  alert('MAJIC BULET DONE')
  h5gg.clearResults();
  h5gg.searchNumber('4333543704410193920', 'I64', '0x100000000', '0x160000000');
  h5gg.searchNearby('0.01', 'F32', '0x8');
  h5gg.searchNearby('0.0219~0.02975', 'F32', '0x32')
  h5gg.searchNearby('0.1035~0.1070', 'F32', '0x4');
  h5gg.searchNearby('2.802597e-45', 'F32', '0x4');
  h5gg.searchNumber('0.1035~0.1070', 'F32', '0x100000000', '0x160000000');
  h5gg.editAll('1.875', "F32");
  vant.showNotify({
    type: 'success',
    message: '人物範圍'
  });
}

function so90() {
  alert('ANTENA V1 DONE')
  h5gg.clearResults();
  h5gg.searchNumber('4575657222469899220', 'I64', '0x100000000', '0x160000000');
  h5gg.editAll('4848124999925814228', 'I64');
  h5gg.clearResults();
  h5gg.searchNumber('4575657222469336965', 'I64', '0x100000000', '0x160000000');
  h5gg.editAll('4848124999925251973', 'I64');
  vant.showNotify({
    type: 'success',
    message: '肩膀天線'
  });
}
function so91() {
  alert('ANTENA V2 DONE')
  h5gg.clearResults();
  h5gg.searchNumber('1051196712', 'I64', '0x100000000', '0x160000000');
  var count = h5gg.getResultsCount();
  var r = h5gg.getResults(count);
  var cnt = 0;
  for (var i = 0; i < count; i++) {
    var addr1 = r[i].address;
    var dizhi0 = (Number(addr1) + 20);
    {
      h5gg.setValue(dizhi0, 200, "F32");
    }
  }
  h5gg.clearResults();
  h5gg.searchNumber('4575657224610966592', 'I64', '0x100000000', '0x160000000');
  h5gg.editAll('4848125002066881600', 'I64');
  vant.showNotify({
    type: 'success',
    message: '超細手線'
  });


}
function so92() {
  alert('ANTENA V3 DONE')
  h5gg.clearResults();
  h5gg.searchNumber('4575657222443971598', 'I64', '0x100000000', '0x130000000');
  h5gg.editAll('4848124999899886606', 'I64');
  h5gg.clearResults();
  h5gg.searchNumber('4575657224578539469', 'I64', '0x100000000', '0x130000000');
  h5gg.editAll('4848125002034454477', 'I64');
  vant.showNotify({
    type: 'success',
    message: '微粗手線'
  });
}
function so01() {
    h5gg.clearResults();
    h5gg.searchNumber('4397530849764387586', 'I64', '0x100000000', '0x200000000');
    alert('搜索(' + h5gg.getResultsCount() + '/1)');
}

function so03() {
  alert('RESTORE DONE')
  h5gg.editAll('4397530849764387586', 'I64');
  vant.showNotify({
    type: 'success',
    message: '還原'
  });

}

function so05() {
  alert('SPEED X50 DONE ')
  h5gg.editAll('4397530849741637681', 'I64');
  vant.showNotify({
    type: 'success',
    message: '50x'
  });
}
function x100() {
  h5gg.clearResults();
  h5gg.searchNumber('4397530849764387586', 'I64', '0x100000000', '0x160000000');
  h5gg.editAll('4397530849735000000', 'I64');
  alert("Speed x100 On");
  codeStatus = true;
}
function x150() {
  h5gg.clearResults();
  h5gg.searchNumber('4397530849764387586', 'I64', '0x100000000', '0x160000000');
  h5gg.editAll('4397530849732000000', 'I64');
  alert("Speed x150 On");
  codeStatus = true;
}
function x300() {
  h5gg.clearResults();
  h5gg.searchNumber('4397530849764387586', 'I64', '0x100000000', '0x160000000');
  h5gg.editAll('4397530849728000000', 'I64');
  alert("Speed x300 On");
  codeStatus = true;
}
function x600() {
  h5gg.clearResults();
  h5gg.searchNumber('4397530849764387586', 'I64', '0x100000000', '0x160000000');
  h5gg.editAll('4397530849726000000', 'I64');
  alert("Speed x600 On");
  codeStatus = true;
}
function x1000() {
  h5gg.clearResults();
  h5gg.searchNumber('4397530849764387586', 'I64', '0x100000000', '0x160000000');
  h5gg.editAll('4397530849723000000', 'I64');
  alert("Speed x1000 On");
  codeStatus = true;
}
function x5000() {
  h5gg.clearResults();
  h5gg.searchNumber('4397530849764387586', 'I64', '0x100000000', '0x160000000');
  h5gg.editAll('4397530849715000000', 'I64');
  alert("Speed x5000 On");
  codeStatus = true;
}
function x10000() {
  h5gg.clearResults();
  h5gg.searchNumber('4397530849764387586', 'I64', '0x100000000', '0x160000000');
  h5gg.editAll('4397530849710000000', 'I64');
  alert("Speed x10000 On");
  codeStatus = true;
}
function x80() {
  h5gg.clearResults();
  h5gg.searchNumber('4397530849764387586', 'I64', '0x100000000', '0x160000000');
  h5gg.editAll('4397530849736000000', 'I64');
  alert("Speed x80 On");
  codeStatus = true;
}
function x50000() {
  h5gg.clearResults();
  h5gg.searchNumber('4397530849764387586', 'I64', '0x100000000', '0x160000000');
  h5gg.editAll('4397530849700000000', 'I64');
  alert("Speed x50000 On");
  codeStatus = true;
}
function x25000() {
  h5gg.clearResults();
  h5gg.searchNumber('4397530849764387586', 'I64', '0x100000000', '0x160000000');
  h5gg.editAll('4397530849705000000', 'I64');
  alert("Speed X100K On");
  codeStatus = true;
}
function x500k() {
  h5gg.clearResults();
  h5gg.searchNumber('4397530849764387586', 'I64', '0x100000000', '0x160000000');
  h5gg.editAll('4397530849702000000', 'I64');
  alert("Speed x500K On");
  codeStatus = true;
}
function x1M() {
  h5gg.clearResults();
  h5gg.searchNumber('4397530849764387586', 'I64', '0x100000000', '0x160000000');
  h5gg.editAll('4397530849701000000', 'I64');
  alert("Speed X1M On");
  codeStatus = true;
}

//RARAS
function Camcao() {    modifyValue1(-0.05, Number(prompt("𝐂𝐚𝐦 𝐂𝐚𝐨 - 𝟎.𝟎𝟓 -> ...  :", "")), 'F00', null,);
    vant.showNotify({
        type: 'success',        message: '𝐂𝐚𝐦 𝐂𝐚𝐨'
   });  
  }
function Camxa() {
    modifyValue1(2.5, Number(prompt(" 𝐂𝐚𝐦 𝐗𝐚 - 𝟐.𝟓 -> ... :", "")), 'F04', null,);  
  vant.showNotify({
        type: 'success',        message: '𝐂𝐚𝐦 𝐗𝐚 '
   });   
  }
function modifyValue(searchValue, replaceValue, addressEndsWith, addressEndsWith2, alertMessage) {    h5gg.clearResults(); h5gg.searchNumber(searchValue, 'I32', '0x100000000', '0x160000000'); const results = h5gg.getResults(h5gg.getResultsCount()); let modifiedCount = 0; results.forEach(result=> {
        if (result.address.endsWith(addressEndsWith) || result.address.endsWith(addressEndsWith2)) {            h5gg.setValue(result.address, replaceValue.toString(), 'I32'); modifiedCount++;
        }}); if (modifiedCount > 0) {        if (alertMessage)alert(alertMessage)} else if (alertMessage) {
        alert("Không tìm thấy kết quả phù hợp để thay đổi.")}}var Nhayman = 15;
var nhayngam = 10;

function modifyValue1(searchValue, replaceValue, addressEndsWith, addressEndsWith2, alertMessage) {    h5gg.clearResults();
    h5gg.searchNumber(searchValue, 'F32', '0x100000000', '0x160000000');    const results = h5gg.getResults(h5gg.getResultsCount());
    let modifiedCount = 0;
    results.forEach(result => {        if (result.address.endsWith(addressEndsWith) || (addressEndsWith2 && result.address.endsWith(addressEndsWith2))) {
            h5gg.setValue(result.address, replaceValue.toString(), 'F32');            modifiedCount++;
              if (searchValue === Nhayman) Nhayman = replaceValue;            if (searchValue === nhayngam) nhayngam = replaceValue;
        }    });
    if (modifiedCount > 0 && alertMessage) {
        alert(alertMessage);    } else if (alertMessage) {
        alert("Không tìm thấy kết quả phù hợp để thay đổi.");    }
}
function Campc() {    modifyValue1(-0.05, Number(prompt("𝐂𝐚𝐦 PC - 𝟎.𝟎𝟓 -> ...  :", "")), 'F00', null,);
    vant.showNotify({
        type: 'success',        message: '𝐂𝐚𝐦 PC'
   });  
  }



   function lock() {
  h5gg.clearResults();
  modifyValue(1077936128, -20001, 'A04');
  modifyValue(1069547520, 1148829696, 'A10');
  alert("AimLock ON");
  h5gg.clearResults();
  codeStatus = true;
}
function scar() {
  alert('SCAR LVL 7 done')
  h5gg.editAll('909000068', 'I64');

  vant.showNotify({
    type: 'success',
    message: 'Đã Bật Mod'
  });

}
function xm8() {
  alert('XM8 LVL 7 done')
  h5gg.editAll('909000085', 'I64');

  vant.showNotify({
    type: 'success',
    message: 'Đã Bật Mod'
  });

}
function ak() {
  alert('AK LVL 7 done')
  h5gg.editAll('909000063', 'I64');

  vant.showNotify({
    type: 'success',
    message: 'Đã Bật Mod'
  });

}
function famas() {
  alert('FAMAS LVL 7 done')
  h5gg.editAll('909000090', 'I64');

  vant.showNotify({
    type: 'success',
    message: 'Đã Bật Mod'
  });

}
function m1014a() {
  alert('M1014A LVL 7 done')
  h5gg.editAll('909000081', 'I64');

  vant.showNotify({
    type: 'success',
    message: 'Đã Bật Mod'
  });

}
function ump() {
  alert('UMP LVL 7 done')
  h5gg.editAll('909000098', 'I64');

  vant.showNotify({
    type: 'success',
    message: 'Đã Bật Mod'
  });

}
function mp5() {
  alert('MP5 LVL 7 done')
  h5gg.editAll('909033002', 'I64');

  vant.showNotify({
    type: 'success',
    message: 'Đã Bật Mod'
  });

}
function m1887() {
  alert('M1887 LVL 7 done')
  h5gg.editAll('909035007', 'I64');

  vant.showNotify({
    type: 'success',
    message: 'Đã Bật Mod'
  });

}
function m4a1() {
  alert('M4A1 LVL 7 done')
  h5gg.editAll('909033001', 'I64');

  vant.showNotify({
    type: 'success',
    message: 'Đã Bật Mod'
  });

}
function an94() {
  alert('AN94 LVL 7 done')
  h5gg.editAll('909035012', 'I64');

  vant.showNotify({
    type: 'success',
    message: 'Đã Bật Mod'
  });

}
function thomson() {
  alert('THOMSON LVL 7 done')
  h5gg.editAll('909038010', 'I64');

  vant.showNotify({
    type: 'success',
    message: 'Đã Bật Mod'
  });

}
function groda() {
  alert('GROZA LVL 7 done')
  h5gg.editAll('909041005', 'I64');

  vant.showNotify({
    type: 'success',
    message: 'Đã Bật Mod'
  });

}
function parafal() {
  alert('PARAFAL LVL 7 done')
  h5gg.editAll('909045001', 'I64');

  vant.showNotify({
    type: 'success',
    message: 'Đã Bật Mod'
  });

}
function lv100() {
  alert('LVL 100 done ')
  h5gg.editAll('909042007', 'I64');

  vant.showNotify({
    type: 'success',
    message: 'Đã Bật Mod'
  });

}
function lockscope() {
  alert('LOCK SCOPE DONE')
  h5gg.clearResults();
  h5gg.searchNumber('1075000115', 'I32', '0x100000000', '0x160000000');
  h5gg.editAll('-5', 'I32');
  h5gg.clearResults();
  h5gg.searchNearby('3', 'I32', '0x100');
  h5gg.editAll('-5', 'I32');
  h5gg.clearResults();
  h5gg.searchNumber('1075000115', 'I32', '0x100000000', '0x160000000');
  h5gg.editAll('-5', 'I32');
  h5gg.clearResults();
  vant.showNotify({
    type: 'success',
    message: '𝐋𝐨𝐜𝐤 𝐒𝐜𝐨𝐩𝐞'
  });

}
function aimscope() {  
  alert('AIM SCOPE DONE')
  h5gg.clearResults();
        h5gg.searchNumber('0.09','F32','0x0', '0x20000000000');        h5gg.editAll('180', 'F32'); 
        h5gg.clearResults();    vant.showNotify({
        type: 'success',        message: '𝐀𝐢𝐦 𝐂𝐨𝐩𝐞'
   });    }
function antiban() {
  h5gg.clearResults();
  modifyValue(134402, 84148993, '');
  modifyValue(132228, 133890, '');
  modifyValue(132176, 133890, '');
  h5gg.clearResults();
  alert("Antiban Lobby On");
  h5gg.clearResults();
  codeStatus = true;
}
function bypass() {
  h5gg.clearResults();
  modifyValue(-1042808832, 1120403456, '');
  alert("Antiban Login On");
  h5gg.clearResults();
  codeStatus = true;
}
function sk() {    h5gg.clearResults();
    var hk1 = prompt("請輸入想要的靈敏");    h5gg.searchNumber('4417130516484980736', 'I64', '0x100000000', '0x160000000');
    var count = h5gg.getResultsCount();    var r = h5gg.getResults(count);
    var cnt = 0;    for (var i = 0; i < count; i++) {
        var addr1 = r[i].address;        var dizhi0 = (Number(addr1) + -4);
        var dizhi1 = (Number(addr1) + -8);        var dizhi2 = (Number(addr1) + -12);
        var dizhi3 = (Number(addr1) + -0);

        {
            h5gg.setValue(dizhi0, hk1, "F32");            h5gg.setValue(dizhi1, hk1, "F32");
            h5gg.setValue(dizhi2, hk1, "F32");            h5gg.setValue(dizhi3, hk1, "F32");
        }
    }    vant.showNotify({
        type: 'success',        message: '𝐁𝐮𝐟𝐟 𝐒𝐞𝐧𝐬𝐢𝐭𝐢𝐯𝐭𝐲 '
    });
 }
 function so89() {  
   h5gg.clearResults();
    h5gg.searchNumber('72340173878198272', 'I64', '0x100000000', '0x130000000');    h5gg.editAll('72340172821233664', 'I64');
    vant.showNotify({        type: 'success',
        message: '𝐀𝐫𝐦 𝐒𝐰𝐢𝐭𝐜𝐡'    });

 }
 function aimdrag() { 
	  alert('AIM DRAG DONE ')
        function searchAndReplace(searchValue, replaceValue, type) {
        h5gg.clearResults();
        h5gg.searchNumber(searchValue, type, '0x100000000', '0x160000000');
        var results = h5gg.getResults(h5gg.getResultsCount());
        for (var i = 0; i < results.length && i < 10; i++) {
            h5gg.setValue(results[i].address, replaceValue.toString(), type);
        }
    }
    searchAndReplace(3145840, 49, 'I32');
}