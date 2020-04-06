// Generated by CoffeeScript 1.10.0
define(["jquery", "utils"], function($, utils) {
  var allDicts, dictManager;
  console.log("[dict] init");
  allDicts = [
    {
      'dictName': "必应词典",
      'windowUrl': 'http://cn.bing.com/dict/search?q=<word>',
      'windowUrlMatch': '[^\\w]q=([^&]+)',
      "resources": {
        styles: ['css/bing.css']
      }
    }, {
      'dictName': '金山词霸',
      'windowUrl': 'http://www.iciba.com/<word>',
      'windowUrlMatch': 'iciba.com/([^&]+)',
      "resources": {
        styles: ['css/iciba.css']
      }
    }, {
      'dictName': '有道词典',
      'entry': 'youdao',
      'windowUrl': 'http://dict.youdao.com/w/eng/<word>',
      'windowUrlMatch': '/eng/([^&/?]+)',
      "resources": {
        styles: ['css/youdao.css']
      }
    }, {
      'dictName': '海词词典',
      'entry': 'dict-cn',
      'windowUrl': 'http://dict.cn/<word>',
      'windowUrlMatch': 'dict.cn/([^&/?]+)',
      "resources": {
        styles: ['css/dict-cn.css']
      }
    }, {
      'dictName': '沪江词典',
      'entry': 'hjenglish',
      'windowUrl': 'https://dict.hjenglish.com/w/<word>',
      'windowUrlMatch': '/w/([^&/?]+)',
      "resources": {
        styles: ['css/hjenglish.css']
      }
    }, {
      'dictName': '人人词典',
      'entry': '91dict',
      'windowUrl': 'http://www.91dict.com/words?w=<word>',
      'windowUrlMatch': '[^\\w]w=([^&]+)',
      "resources": {
        styles: ['css/91dict.css']
      }
    }, {
      'dictName': '欧陆词典',
      'entry': 'eudic',
      'windowUrl': 'https://dict.eudic.net/dicts/en/<word>',
      'windowUrlMatch': '/en/([^&/?]+)',
      "resources": {
        styles: ['css/eudic.css']
      }
    }, {
      'dictName': '汉典',
      'entry': 'zdic',
      'windowUrl': 'http://www.zdic.net/search/?c=3&q=<word>',
      'windowUrlMatch': '[^\\w]q=([^&]+)',
      "resources": {
        styles: ['css/zdic.css']
      }
    }, {
      'dictName': '百度词典（汉语）',
      'entry': 'baidu-dict',
      'windowUrl': 'http://dict.baidu.com/s?wd=<word>',
      'windowUrlMatch': '[^\\w]wd=([^&]+)',
      "resources": {
        styles: ['css/baidu-dict.css']
      }
    }, {
      'dictName': 'Oxford Learner',
      'entry': 'OxfordLearner',
      'windowUrl': 'http://www.oxfordlearnersdictionaries.com/definition/english/<word>',
      'windowUrlMatch': '/english/([^&/?]+)',
      "resources": {
        styles: ['css/oxfordlearner.css']
      }
    }, {
      'dictName': 'Oxford Living Dictionaries',
      'entry': 'Oxfordliving',
      'windowUrl': 'https://en.oxforddictionaries.com/definition/<word>',
      'windowUrlMatch': '/definition/([^&/?]+)',
      "resources": {
        styles: ['css/oxfordliving.css']
      }
    }, {
      'dictName': 'Cambridge English',
      'entry': 'CambridgeEnglish',
      'windowUrl': 'http://dictionary.cambridge.org/dictionary/english/<word>',
      'windowUrlMatch': '/english/([^&/?]+)',
      "resources": {
        styles: ['css/cambridgeenglish.css']
      }
    }, {
      'dictName': 'Longman English',
      'entry': 'LongmanEnglish',
      'windowUrl': 'http://www.ldoceonline.com/dictionary/<word>',
      'windowUrlMatch': '/dictionary/([^&/?]+)',
      "resources": {
        styles: ['css/longmanenglish.css']
      }
    }, {
      'dictName': 'Urban Dictionary',
      'windowUrl': 'http://zh.urbandictionary.com/define.php?term=<word>',
      'windowUrlMatch': '[^\\w]term=([^&]+)',
      "resources": {
        styles: ['css/urban.css']
      }
    }, {
      'dictName': 'Dictionary.com',
      'windowUrl': 'http://www.dictionary.com/browse/<word>',
      'windowUrlMatch': '/browse/([^&/?]+)',
      "resources": {
        styles: ['css/dictionary-com.css']
      }
    }, {
      'dictName': 'Thesaurus.com',
      'windowUrl': 'http://www.thesaurus.com/browse/<word>',
      'windowUrlMatch': '/browse/([^&/?]+)',
      "resources": {
        styles: ['css/dictionary-com.css']
      }
    }, {
      'dictName': 'Macmilland Dictionary',
      'windowUrl': 'http://www.macmillandictionary.com/dictionary/british/<word>',
      'windowUrlMatch': '/british/([^&/?]+)',
      "resources": {
        styles: ['css/macmilland.css']
      }
    }, {
      'dictName': 'Merriam-webster Dictionary',
      'windowUrl': 'https://www.merriam-webster.com/dictionary/<word>',
      'windowUrlMatch': '/dictionary/([^&/?]+)',
      "resources": {
        styles: ['css/merriamwebster.css']
      }
    }, {
      'dictName': 'Merriam-webster Thesaurus',
      'windowUrl': 'https://www.merriam-webster.com/thesaurus/<word>',
      'windowUrlMatch': '/thesaurus/([^&/?]+)',
      "resources": {
        styles: ['css/merriamwebster.css']
      }
    }, {
      'dictName': 'Collins English Dictionary',
      'windowUrl': 'https://www.collinsdictionary.com/dictionary/english/<word>',
      'windowUrlMatch': '/english/([^&/?]+)',
      "resources": {
        styles: ['css/collins.css']
      }
    }, {
      'dictName': 'Collins English Thesaurus',
      'windowUrl': 'https://www.collinsdictionary.com/dictionary/english-thesaurus/<word>',
      'windowUrlMatch': '/english-thesaurus/([^&/?]+)',
      "resources": {
        styles: ['css/collins.css']
      }
    }, {
      'dictName': 'Easton\'s 1897 Bible Dictionary',
      'entry': 'Aonaware',
      'baseUrl': 'http://services.aonaware.com/DictService/DictService.asmx/DefineInDict',
      'queryType': 'post',
      'params': {
        'dictId': 'easton'
      },
      'queryKey': 'word'
    }
  ];
  dictManager = {
    allDicts: allDicts,
    getDict: function(dictName) {
      var dict;
      dict = allDicts.find(function(d) {
        return d.dictName === dictName;
      });
      return dict || allDicts[0];
    },
    getDictResources: function(dictName) {
      var dict;
      dict = this.getDict(dictName);
      if (dict.windowUrl) {
        return dict.resources;
      }
    },
    getWordFromUrl: function(url, dictName) {
      var dict, m, ref, s;
      dict = this.getDict(dictName);
      if (dict.windowUrlMatch) {
        m = new RegExp(dict.windowUrlMatch);
        s = url != null ? (ref = url.match(m)) != null ? ref[1] : void 0 : void 0;
        if (s) {
          s = s.replace(/[+_]/g, ' ');
          return decodeURI(s);
        }
      }
    },
    query: function(word, dictName) {
      var dfd, dict, params, url;
      dfd = $.Deferred();
      dict = this.getDict(dictName);
      params = $.extend(true, {}, dict.params);
      if (dict.queryKey) {
        params[dict.queryKey] = word;
      }
      if (dict.baseUrl) {
        url = dict.baseUrl;
      }
      if (dict.headerUrl) {
        url = dict.headerUrl + encodeURI(word);
      }
      if (url) {
        return $[dict.queryType || 'get'](url, params, null, 'text').then((function(_this) {
          return function(res) {
            return {
              html: _this['parse' + dict.entry](res)
            };
          };
        })(this));
      } else if (dict.windowUrl) {
        return dfd.resolve({
          windowUrl: dict.windowUrl.replace('<word>', word)
        });
      } else {
        return dfd.resolve({
          html: this['parse' + dict.entry](word)
        });
      }
    },
    queryWordPain: function(word) {
      var url;
      url = "http://xtk.azurewebsites.net/BingDictService.aspx?Word=" + word + "&Samples=false";
      return $.get(url);
    },
    parseAonaware: function(text) {
      var xml;
      xml = $.parseXML(text);
      return '<pre>' + $('Definitions WordDefinition', xml).text() + '</pre>';
    },
    parseIciba: function(text) {
      var d, xml;
      d = $(document.createElement('div'));
      xml = $.parseXML(text);
      d.append('<h4></h4>');
      $('ps', xml).each(function(index, el) {
        var audio, n, t;
        t = $(el).text();
        audio = $(el).next('pron').text();
        n = '<span class="pron">' + t + '&nbsp<i class="fa fa-volume-up sound"></i>' + '<audio src="' + audio + '"></audio>&nbsp&nbsp&nbsp&nbsp' + '</span>';
        return $('h4', d).append(n);
      });
      $('pos', xml).each(function(i, el) {
        var m, s;
        m = $(el).next('acceptation').text();
        s = '<p>' + $(el).text() + '<b>' + m + '</b>' + '</p>';
        return d.append(s);
      });
      $('orig, fy', xml).each(function(i, el) {
        var m, s, s2;
        m = $(el).next('trans').text();
        s = '<p class="example"><i class="fa fa-coffee"></i>' + $(el).text() + '</p>';
        s2 = '<p>' + m + '</p>';
        d.append(s);
        return d.append(s2);
      });
      return d.html();
    },
    parseWebster: function(text) {
      var wrapper, xml;
      wrapper = $(document.createElement('div'));
      wrapper.addClass('webster');
      xml = $.parseXML(text);
      $('entry', xml).each(function(index, entry) {
        var audio, baseUrl, d, entryId, et, ms, n, n2, pro, soundEl, subp, url, wpr;
        entryId = $(entry).attr('id');
        wrapper.append('<div entry="' + entryId + '"> </div>');
        d = $('div[entry]', wrapper).last();
        pro = $('pr', entry).text();
        soundEl = $('sound', entry);
        audio = $('wav', soundEl).text();
        wpr = $('wpr', soundEl).text();
        baseUrl = 'http://media.merriam-webster.com/soundc11/';
        subp = audio[0];
        ms = audio.match(/^bix|^gg|^\d+/);
        if (ms) {
          subp = ms[0];
        }
        url = baseUrl + subp + '/' + audio;
        n = '<h4><b>' + entryId + '</b>' + '<span class="pron">' + pro + '&nbsp<i class="fa fa-volume-up sound"></i>' + '<audio src="' + url + '"></audio>&nbsp' + wpr + '&nbsp&nbsp&nbsp&nbsp</span></h4>';
        d.append(n);
        et = $('et', entry).html();
        n2 = '<p>' + et + '</p>';
        d.append(n2);
        return $(entry).children('def').each(function(j, defEl) {
          var date, vt;
          vt = $('vt', defEl).text();
          date = $('date', defEl).text();
          d.append('<p>' + vt + ', ' + date + '</p>');
          return $('sn', defEl).each(function(k, snEl) {
            var sntext;
            sntext = $(snEl).nextUtil('sn').text();
            return d.append('<p>' + sntext + '</p>');
          });
        });
      });
      return wrapper.htm();
    }
  };
  return dictManager;
});