(function(){
    var script = {
 "mouseWheelEnabled": true,
 "start": "this.playAudioList([this.audio_05A3D501_1E1B_99C3_41A9_91EDDED47A26]); this.init(); this.syncPlaylists([this.ThumbnailList_13597A7A_1D4B_FE0C_41B0_B45120DB2B4F_playlist,this.mainPlayList])",
 "children": [
  "this.MainViewer",
  "this.Container_13D6F5E3_0F5D_4726_419A_51C2A588B974",
  "this.Label_0BB4529A_19B9_C0E0_41B4_3A45B4A93DC8",
  "this.Label_0B01F180_19C7_40E0_41B7_0393C88A3E1B",
  "this.Label_0B634445_19CB_4060_41B8_EDD3964C9744",
  "this.Label_0DAA94A1_19FB_4020_41AC_FD8C7A105B27",
  "this.Label_0A64507B_19CB_4020_41A4_0C7BF6B71113",
  "this.Label_00EBB067_1A49_C020_41AB_54606EFF722C",
  "this.ThumbnailList_13597A7A_1D4B_FE0C_41B0_B45120DB2B4F",
  "this.IconButton_120FFF40_1D4F_167C_419F_CC1AC516C6E2"
 ],
 "id": "rootPlayer",
 "width": "100%",
 "overflow": "visible",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "definitions": [{
 "class": "PlayList",
 "items": [
  {
   "class": "VideoPlayListItem",
   "media": "this.video_0C4AF30A_1E38_99C1_4196_B3BC446ECE8D",
   "start": "this.viewer_uidEA955C8A_F927_1599_41CD_B06EFA977B34VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_EA956C89_F927_159B_41E5_97EFBD802D6D, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_EA956C89_F927_159B_41E5_97EFBD802D6D, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uidEA955C8A_F927_1599_41CD_B06EFA977B34VideoPlayer)",
   "player": "this.viewer_uidEA955C8A_F927_1599_41CD_B06EFA977B34VideoPlayer"
  }
 ],
 "id": "playList_EA956C89_F927_159B_41E5_97EFBD802D6D"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 178.53,
  "pitch": 0
 },
 "id": "camera_EDEBAEE3_F927_158F_41DD_D99AAD6B2CDD"
},
{
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "id": "window_24953AEB_3256_7F1B_41BD_08D8476D61CF",
 "horizontalAlign": "center",
 "width": 400,
 "backgroundOpacity": 1,
 "closeButtonIconHeight": 12,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "overflow": "scroll",
 "titleFontColor": "#000000",
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "titlePaddingRight": 5,
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "minHeight": 20,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "modal": true,
 "propagateClick": false,
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [],
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "height": 600,
 "title": "",
 "borderSize": 0,
 "headerPaddingLeft": 10,
 "titleFontStyle": "normal",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "class": "Window",
 "headerPaddingRight": 10,
 "backgroundColorDirection": "vertical",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerHeight": 5,
 "scrollBarColor": "#000000",
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 3,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "children": [
  "this.htmlText_2493EAEB_3256_7F1B_41BD_0744024AE6D7",
  "this.image_uidEA934C86_F927_1589_41CB_5EB93B9CDF2D_1"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "closeButtonBorderRadius": 11,
 "shadowOpacity": 0.5,
 "titleFontSize": "1.29vmin",
 "shadowVerticalLength": 0,
 "bodyBackgroundColorDirection": "vertical",
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "backgroundColorRatios": [],
 "headerPaddingBottom": 10,
 "borderRadius": 5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "layout": "vertical",
 "closeButtonIconWidth": 12,
 "titlePaddingLeft": 5,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "paddingTop": 0,
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 5,
 "bodyPaddingRight": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "headerBackgroundColorDirection": "vertical",
 "data": {
  "name": "Window36853"
 },
 "titleFontFamily": "Arial",
 "closeButtonBackgroundColor": [],
 "shadowSpread": 1
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "VideoPlayListItem",
   "media": "this.video_0C4AF30A_1E38_99C1_4196_B3BC446ECE8D",
   "start": "this.viewer_uidEA94CC8A_F927_1599_41C1_BDB7C069CE4CVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_EA951C8A_F927_1599_41E2_575CD7FA0248, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_EA951C8A_F927_1599_41E2_575CD7FA0248, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uidEA94CC8A_F927_1599_41C1_BDB7C069CE4CVideoPlayer)",
   "player": "this.viewer_uidEA94CC8A_F927_1599_41C1_BDB7C069CE4CVideoPlayer"
  }
 ],
 "id": "playList_EA951C8A_F927_1599_41E2_575CD7FA0248"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -170.26,
  "pitch": 0
 },
 "id": "camera_ED966E51_F927_148A_41C1_71950BCF864E"
},
{
 "class": "PhotoAlbum",
 "playList": "this.album_263A3B3A_326A_DD7A_41A4_88CAA612E6D9_AlbumPlayList",
 "id": "album_263A3B3A_326A_DD7A_41A4_88CAA612E6D9",
 "label": "Photo Album info klas",
 "thumbnailUrl": "media/album_263A3B3A_326A_DD7A_41A4_88CAA612E6D9_t.png"
},
{
 "label": "LORONG TANGGA",
 "hfovMin": "120%",
 "id": "panorama_1C8531AD_12F9_495A_4190_01D89A3CAF80",
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 79.76,
   "distance": 1,
   "backwardYaw": -177.47,
   "panorama": "this.panorama_2F4B9540_0FAB_C762_41AD_692E126E6290"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 5.16,
   "distance": 1,
   "backwardYaw": 177.34,
   "panorama": "this.panorama_1F140574_12F9_49BE_41A1_BBA26E292B88"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -85.29,
   "distance": 1,
   "backwardYaw": -171.84,
   "panorama": "this.panorama_2FBABA98_0FAB_4DE2_41A4_F41F4C69A336"
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.overlay_0023A382_130F_C916_41A3_323FE889F585",
  "this.overlay_0BADDDD3_1309_D99C_41A3_33164FFEE44D",
  "this.overlay_07CD4102_1371_DCC2_4196_3EA32D19D1A9"
 ],
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_1C8531AD_12F9_495A_4190_01D89A3CAF80_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_1C8531AD_12F9_495A_4190_01D89A3CAF80_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1C8531AD_12F9_495A_4190_01D89A3CAF80_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1C8531AD_12F9_495A_4190_01D89A3CAF80_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1C8531AD_12F9_495A_4190_01D89A3CAF80_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_1C8531AD_12F9_495A_4190_01D89A3CAF80_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1C8531AD_12F9_495A_4190_01D89A3CAF80_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1C8531AD_12F9_495A_4190_01D89A3CAF80_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1C8531AD_12F9_495A_4190_01D89A3CAF80_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_1C8531AD_12F9_495A_4190_01D89A3CAF80_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1C8531AD_12F9_495A_4190_01D89A3CAF80_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1C8531AD_12F9_495A_4190_01D89A3CAF80_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1C8531AD_12F9_495A_4190_01D89A3CAF80_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_1C8531AD_12F9_495A_4190_01D89A3CAF80_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1C8531AD_12F9_495A_4190_01D89A3CAF80_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1C8531AD_12F9_495A_4190_01D89A3CAF80_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1C8531AD_12F9_495A_4190_01D89A3CAF80_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1C8531AD_12F9_495A_4190_01D89A3CAF80_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_1C8531AD_12F9_495A_4190_01D89A3CAF80_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1C8531AD_12F9_495A_4190_01D89A3CAF80_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1C8531AD_12F9_495A_4190_01D89A3CAF80_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1C8531AD_12F9_495A_4190_01D89A3CAF80_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_1C8531AD_12F9_495A_4190_01D89A3CAF80_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1C8531AD_12F9_495A_4190_01D89A3CAF80_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1C8531AD_12F9_495A_4190_01D89A3CAF80_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_1C8531AD_12F9_495A_4190_01D89A3CAF80_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "label": "KELAS",
 "hfovMin": "120%",
 "id": "panorama_2DF0ED7C_0FAF_4722_4197_CF60E74696F9",
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 153.15,
   "distance": 1,
   "backwardYaw": 30.18,
   "panorama": "this.panorama_2FBABA98_0FAB_4DE2_41A4_F41F4C69A336"
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.overlay_0031E8CA_1331_AD64_416A_25345132BBF0",
  "this.overlay_20DF3387_326F_CD0B_4198_16D662874049",
  "this.overlay_2167AF38_326E_5505_41B3_828DEC01DBC8",
  "this.overlay_21D3C20E_326A_4F1A_41AE_076A7BDAF776"
 ],
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_2DF0ED7C_0FAF_4722_4197_CF60E74696F9_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2DF0ED7C_0FAF_4722_4197_CF60E74696F9_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2DF0ED7C_0FAF_4722_4197_CF60E74696F9_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2DF0ED7C_0FAF_4722_4197_CF60E74696F9_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_2DF0ED7C_0FAF_4722_4197_CF60E74696F9_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2DF0ED7C_0FAF_4722_4197_CF60E74696F9_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2DF0ED7C_0FAF_4722_4197_CF60E74696F9_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2DF0ED7C_0FAF_4722_4197_CF60E74696F9_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2DF0ED7C_0FAF_4722_4197_CF60E74696F9_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2DF0ED7C_0FAF_4722_4197_CF60E74696F9_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2DF0ED7C_0FAF_4722_4197_CF60E74696F9_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2DF0ED7C_0FAF_4722_4197_CF60E74696F9_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2DF0ED7C_0FAF_4722_4197_CF60E74696F9_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2DF0ED7C_0FAF_4722_4197_CF60E74696F9_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2DF0ED7C_0FAF_4722_4197_CF60E74696F9_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2DF0ED7C_0FAF_4722_4197_CF60E74696F9_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_2DF0ED7C_0FAF_4722_4197_CF60E74696F9_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2DF0ED7C_0FAF_4722_4197_CF60E74696F9_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2DF0ED7C_0FAF_4722_4197_CF60E74696F9_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2DF0ED7C_0FAF_4722_4197_CF60E74696F9_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2DF0ED7C_0FAF_4722_4197_CF60E74696F9_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_2DF0ED7C_0FAF_4722_4197_CF60E74696F9_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2DF0ED7C_0FAF_4722_4197_CF60E74696F9_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2DF0ED7C_0FAF_4722_4197_CF60E74696F9_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2DF0ED7C_0FAF_4722_4197_CF60E74696F9_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_2DF0ED7C_0FAF_4722_4197_CF60E74696F9_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "id": "window_0E4D24DA_1DCD_6AB8_4194_2D0FF1226861",
 "horizontalAlign": "center",
 "width": 400,
 "backgroundOpacity": 1,
 "closeButtonBorderColor": "#FFFFFF",
 "closeButtonIconHeight": 12,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "overflow": "scroll",
 "titleFontColor": "#FFFFFF",
 "closeButtonBackgroundColorDirection": "vertical",
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "titlePaddingRight": 5,
 "closeButtonRollOverIconLineWidth": 1,
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "minHeight": 20,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "closeButtonRollOverBorderColor": "#FFFFFF",
 "modal": true,
 "propagateClick": false,
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#000000"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#2D2D2D",
 "closeButtonRollOverBorderSize": 0,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [],
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerBackgroundColorRatios": [
  0
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "height": 600,
 "closeButtonPressedBackgroundOpacity": 1,
 "title": "PETUNJUK",
 "borderSize": 0,
 "headerPaddingLeft": 10,
 "bodyBackgroundOpacity": 1,
 "titleFontStyle": "normal",
 "bodyBackgroundColor": [
  "#000000"
 ],
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "class": "Window",
 "headerPaddingRight": 10,
 "backgroundColorDirection": "vertical",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerHeight": 5,
 "scrollBarColor": "#000000",
 "closeButtonPressedIconLineWidth": 1,
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#000000"
 ],
 "closeButtonPaddingRight": 0,
 "bodyBorderColor": "#000000",
 "footerBorderColor": "#000000",
 "shadow": true,
 "shadowHorizontalLength": 3,
 "bodyBackgroundColorRatios": [
  0
 ],
 "closeButtonBackgroundColorRatios": [
  0.2
 ],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "closeButtonPaddingLeft": 0,
 "bodyPaddingTop": 5,
 "children": [
  "this.htmlText_0E4F64DA_1DCD_6AB8_41B8_E3A1BAFB6241",
  "this.image_uidEA82DC7A_F927_1579_41EB_B8C48AFA20B0_1"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "closeButtonBorderSize": 0,
 "paddingRight": 0,
 "closeButtonBorderRadius": 11,
 "shadowOpacity": 0.5,
 "titleFontSize": "1.29vmin",
 "footerBorderSize": 0,
 "bodyBackgroundColorDirection": "vertical",
 "closeButtonBackgroundOpacity": 1,
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "backgroundColorRatios": [],
 "headerPaddingBottom": 10,
 "borderRadius": 5,
 "footerBackgroundOpacity": 1,
 "closeButtonPaddingBottom": 0,
 "headerBackgroundColorRatios": [
  0
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "layout": "vertical",
 "closeButtonPressedBorderColor": "#FFFFFF",
 "closeButtonIconWidth": 12,
 "titlePaddingLeft": 5,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "shadowVerticalLength": 0,
 "gap": 10,
 "paddingBottom": 0,
 "paddingTop": 0,
 "closeButtonRollOverBackgroundOpacity": 1,
 "closeButtonIconColor": "#FF0000",
 "bodyPaddingBottom": 5,
 "bodyPaddingRight": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "bodyBorderSize": 0,
 "closeButtonPaddingTop": 0,
 "closeButtonPressedBorderSize": 0,
 "headerBackgroundColorDirection": "vertical",
 "data": {
  "name": "Window28425"
 },
 "titleFontFamily": "Arial",
 "closeButtonBackgroundColor": [
  "#999999"
 ],
 "shadowSpread": 1
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 178.61,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_ED591DAA_F927_1799_41E0_2E72E8C3E0E6"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -2.66,
  "pitch": 0
 },
 "initialSequence": "this.sequence_EACAACF2_F927_158E_41D1_C6E53625B813",
 "id": "camera_EACADCF2_F927_158E_41D1_DD98F37FDF6F"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -0.17,
  "pitch": -0.05
 },
 "id": "panorama_2F4B9540_0FAB_C762_41AD_692E126E6290_camera"
},
{
 "class": "Photo",
 "duration": 5000,
 "id": "photo_57A72BC3_447A_8C42_41C6_368128ACFA34",
 "width": 1245,
 "label": "info lab ujikom",
 "image": {
  "levels": [
   {
    "url": "media/photo_57A72BC3_447A_8C42_41C6_368128ACFA34.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "thumbnailUrl": "media/photo_57A72BC3_447A_8C42_41C6_368128ACFA34_t.png",
 "height": 1761
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_1F140574_12F9_49BE_41A1_BBA26E292B88",
   "camera": "this.panorama_1F140574_12F9_49BE_41A1_BBA26E292B88_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_13597A7A_1D4B_FE0C_41B0_B45120DB2B4F_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_375CA3CB_272B_B698_418A_27B1A3767B14",
   "camera": "this.panorama_375CA3CB_272B_B698_418A_27B1A3767B14_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_13597A7A_1D4B_FE0C_41B0_B45120DB2B4F_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_2DF0ED7C_0FAF_4722_4197_CF60E74696F9",
   "camera": "this.panorama_2DF0ED7C_0FAF_4722_4197_CF60E74696F9_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_13597A7A_1D4B_FE0C_41B0_B45120DB2B4F_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_2F299F25_0FAB_4322_41A4_7E7C91C19BB3",
   "camera": "this.panorama_2F299F25_0FAB_4322_41A4_7E7C91C19BB3_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_13597A7A_1D4B_FE0C_41B0_B45120DB2B4F_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_2FBABA98_0FAB_4DE2_41A4_F41F4C69A336",
   "camera": "this.panorama_2FBABA98_0FAB_4DE2_41A4_F41F4C69A336_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_13597A7A_1D4B_FE0C_41B0_B45120DB2B4F_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_2F4DB3F5_0FAB_4323_41A1_9616D3077287",
   "camera": "this.panorama_2F4DB3F5_0FAB_4323_41A1_9616D3077287_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_13597A7A_1D4B_FE0C_41B0_B45120DB2B4F_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_2FBA4CAA_0FAB_4526_419C_1A01B06BA5F2",
   "camera": "this.panorama_2FBA4CAA_0FAB_4526_419C_1A01B06BA5F2_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_13597A7A_1D4B_FE0C_41B0_B45120DB2B4F_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_2F4B9540_0FAB_C762_41AD_692E126E6290",
   "camera": "this.panorama_2F4B9540_0FAB_C762_41AD_692E126E6290_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_13597A7A_1D4B_FE0C_41B0_B45120DB2B4F_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_2FBA9DCA_0FAB_C766_414D_827A2822C3FA",
   "camera": "this.panorama_2FBA9DCA_0FAB_C766_414D_827A2822C3FA_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_13597A7A_1D4B_FE0C_41B0_B45120DB2B4F_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_2F64D6C9_0FAB_C562_419D_D1F42B2FF9F0",
   "camera": "this.panorama_2F64D6C9_0FAB_C562_419D_D1F42B2FF9F0_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_13597A7A_1D4B_FE0C_41B0_B45120DB2B4F_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_2FBABF32_0FAB_C326_41A6_6E5201897A35",
   "camera": "this.panorama_2FBABF32_0FAB_C326_41A6_6E5201897A35_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_13597A7A_1D4B_FE0C_41B0_B45120DB2B4F_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_1F044C6B_12FB_5FA3_41B2_6838DDBDC3BE",
   "camera": "this.panorama_1F044C6B_12FB_5FA3_41B2_6838DDBDC3BE_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_13597A7A_1D4B_FE0C_41B0_B45120DB2B4F_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_1C8531AD_12F9_495A_4190_01D89A3CAF80",
   "camera": "this.panorama_1C8531AD_12F9_495A_4190_01D89A3CAF80_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_13597A7A_1D4B_FE0C_41B0_B45120DB2B4F_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_0C2A3A6E_1A48_C020_41B6_F7DB48EAA229",
   "camera": "this.panorama_0C2A3A6E_1A48_C020_41B6_F7DB48EAA229_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_13597A7A_1D4B_FE0C_41B0_B45120DB2B4F_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_0C2110F6_1A48_C021_4194_3180B6EBF789",
   "camera": "this.panorama_0C2110F6_1A48_C021_4194_3180B6EBF789_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_13597A7A_1D4B_FE0C_41B0_B45120DB2B4F_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_00B9BDF2_1A79_4020_41B8_B948F9596DC6",
   "camera": "this.panorama_00B9BDF2_1A79_4020_41B8_B948F9596DC6_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_13597A7A_1D4B_FE0C_41B0_B45120DB2B4F_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "VideoPlayListItem",
   "media": "this.video_0A0AF181_1E39_98C3_41BA_F85DA1E1A464",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_13597A7A_1D4B_FE0C_41B0_B45120DB2B4F_playlist, 16, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_13597A7A_1D4B_FE0C_41B0_B45120DB2B4F_playlist, 16)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_13597A7A_1D4B_FE0C_41B0_B45120DB2B4F_playlist, 16, 17)",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "class": "VideoPlayListItem",
   "media": "this.video_0C4AF30A_1E38_99C1_4196_B3BC446ECE8D",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_13597A7A_1D4B_FE0C_41B0_B45120DB2B4F_playlist, 17, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_13597A7A_1D4B_FE0C_41B0_B45120DB2B4F_playlist, 17)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_13597A7A_1D4B_FE0C_41B0_B45120DB2B4F_playlist, 17, 18)",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "class": "VideoPlayListItem",
   "media": "this.video_0CB062C3_1E08_9840_41B9_D1B87E9753E3",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_13597A7A_1D4B_FE0C_41B0_B45120DB2B4F_playlist, 18, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_13597A7A_1D4B_FE0C_41B0_B45120DB2B4F_playlist, 18)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_13597A7A_1D4B_FE0C_41B0_B45120DB2B4F_playlist, 18, 19)",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "class": "VideoPlayListItem",
   "media": "this.video_0DFB5DD1_1E09_8843_41A1_10DAC293F48B",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_13597A7A_1D4B_FE0C_41B0_B45120DB2B4F_playlist, 19, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_13597A7A_1D4B_FE0C_41B0_B45120DB2B4F_playlist, 19)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_13597A7A_1D4B_FE0C_41B0_B45120DB2B4F_playlist, 19, 20)",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "class": "VideoPlayListItem",
   "media": "this.video_0DF957D6_1E08_7841_41B3_2303FFD76BF5",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_13597A7A_1D4B_FE0C_41B0_B45120DB2B4F_playlist, 20, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_13597A7A_1D4B_FE0C_41B0_B45120DB2B4F_playlist, 20)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_13597A7A_1D4B_FE0C_41B0_B45120DB2B4F_playlist, 20, 21)",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "class": "VideoPlayListItem",
   "media": "this.video_0AE736B3_1E09_F8C0_41B3_47EC6C0808B4",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_13597A7A_1D4B_FE0C_41B0_B45120DB2B4F_playlist, 21, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_13597A7A_1D4B_FE0C_41B0_B45120DB2B4F_playlist, 21)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_13597A7A_1D4B_FE0C_41B0_B45120DB2B4F_playlist, 21, 22)",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "class": "VideoPlayListItem",
   "media": "this.video_056FE6F0_1E08_B840_41B1_ECF170B30E18",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_13597A7A_1D4B_FE0C_41B0_B45120DB2B4F_playlist, 22, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_13597A7A_1D4B_FE0C_41B0_B45120DB2B4F_playlist, 22)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_13597A7A_1D4B_FE0C_41B0_B45120DB2B4F_playlist, 22, 23)",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_13597A7A_1D4B_FE0C_41B0_B45120DB2B4F_playlist, 23, 0)",
   "class": "PhotoAlbumPlayListItem",
   "media": "this.album_263A3B3A_326A_DD7A_41A4_88CAA612E6D9",
   "player": "this.MainViewerPhotoAlbumPlayer"
  }
 ],
 "id": "ThumbnailList_13597A7A_1D4B_FE0C_41B0_B45120DB2B4F_playlist"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 168.76,
  "pitch": 0
 },
 "id": "camera_ED2B0D75_F927_148B_41AD_61305E5C44E6"
},
{
 "to": "left",
 "class": "SlideOutEffect",
 "duration": 400,
 "id": "effect_49353574_570C_A542_41D0_43B05AC58F9B",
 "easing": "quad_in"
},
{
 "class": "Photo",
 "duration": 5000,
 "id": "photo_55D17B3E_444B_8DC2_41CB_78E86D24CBCF",
 "width": 1708,
 "label": "SELAMAT DATANG DI VIRTUAL TOUR PRODI TEKNIK INFORMATIKA (6)",
 "image": {
  "levels": [
   {
    "url": "media/photo_55D17B3E_444B_8DC2_41CB_78E86D24CBCF.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "thumbnailUrl": "media/photo_55D17B3E_444B_8DC2_41CB_78E86D24CBCF_t.png",
 "height": 2664
},
{
 "class": "Video",
 "label": "lab lanjut",
 "scaleMode": "fit_inside",
 "width": 1080,
 "thumbnailUrl": "media/video_056FE6F0_1E08_B840_41B1_ECF170B30E18_t.jpg",
 "loop": false,
 "id": "video_056FE6F0_1E08_B840_41B1_ECF170B30E18",
 "height": 1080,
 "video": {
  "width": 1080,
  "class": "VideoResource",
  "mp4Url": "media/video_056FE6F0_1E08_B840_41B1_ECF170B30E18.mp4",
  "height": 1080
 }
},
{
 "class": "Video",
 "label": "vid klas",
 "scaleMode": "fit_inside",
 "width": 1080,
 "thumbnailUrl": "media/video_0CB062C3_1E08_9840_41B9_D1B87E9753E3_t.jpg",
 "loop": false,
 "id": "video_0CB062C3_1E08_9840_41B9_D1B87E9753E3",
 "height": 1080,
 "video": {
  "width": 1080,
  "class": "VideoResource",
  "mp4Url": "media/video_0CB062C3_1E08_9840_41B9_D1B87E9753E3.mp4",
  "height": 1080
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "VideoPlayListItem",
   "media": "this.video_056FE6F0_1E08_B840_41B1_ECF170B30E18",
   "start": "this.viewer_uidEA946C8B_F927_159F_41D1_3809CFA73525VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_EA948C8B_F927_159F_4173_30E9595C015A, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_EA948C8B_F927_159F_4173_30E9595C015A, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uidEA946C8B_F927_159F_41D1_3809CFA73525VideoPlayer)",
   "player": "this.viewer_uidEA946C8B_F927_159F_41D1_3809CFA73525VideoPlayer"
  }
 ],
 "id": "playList_EA948C8B_F927_159F_4173_30E9595C015A"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 94.71,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_EDCD2EC8_F927_159A_41A3_E33C94DA8804"
},
{
 "class": "SlideInEffect",
 "duration": 400,
 "id": "effect_00AB7156_1A49_C061_41A4_FF7B1FEB4EA8",
 "from": "left",
 "easing": "quad_in"
},
{
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "id": "window_24CE00F0_3256_4B05_41C4_CE56E04513F7",
 "horizontalAlign": "center",
 "width": 400,
 "backgroundOpacity": 1,
 "closeButtonIconHeight": 12,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "overflow": "scroll",
 "titleFontColor": "#000000",
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "titlePaddingRight": 5,
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "minHeight": 20,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "modal": true,
 "propagateClick": false,
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [],
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "height": 600,
 "title": "",
 "borderSize": 0,
 "headerPaddingLeft": 10,
 "titleFontStyle": "normal",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "class": "Window",
 "headerPaddingRight": 10,
 "backgroundColorDirection": "vertical",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerHeight": 5,
 "scrollBarColor": "#000000",
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 3,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "children": [
  "this.htmlText_24CFC0F0_3256_4B05_41C5_FF31EEB04E58",
  "this.viewer_uidEA92FC87_F927_1597_41B5_9608D004E79C"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "closeButtonBorderRadius": 11,
 "shadowOpacity": 0.5,
 "titleFontSize": "1.29vmin",
 "shadowVerticalLength": 0,
 "bodyBackgroundColorDirection": "vertical",
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "backgroundColorRatios": [],
 "headerPaddingBottom": 10,
 "borderRadius": 5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "layout": "vertical",
 "closeButtonIconWidth": 12,
 "titlePaddingLeft": 5,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "closeButtonIconColor": "#000000",
 "close": "this.playList_EA930C87_F927_1597_41D7_D2FB15248092.set('selectedIndex', -1);",
 "bodyPaddingBottom": 5,
 "bodyPaddingRight": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "headerBackgroundColorDirection": "vertical",
 "data": {
  "name": "Window35860"
 },
 "titleFontFamily": "Arial",
 "closeButtonBackgroundColor": [],
 "shadowSpread": 1
},
{
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "id": "window_24885DF6_3255_F50D_41C5_64B87AC2AC66",
 "horizontalAlign": "center",
 "width": 400,
 "backgroundOpacity": 1,
 "closeButtonIconHeight": 12,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "overflow": "scroll",
 "titleFontColor": "#000000",
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "titlePaddingRight": 5,
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "minHeight": 20,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "modal": true,
 "propagateClick": false,
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [],
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "height": 600,
 "title": "",
 "borderSize": 0,
 "headerPaddingLeft": 10,
 "titleFontStyle": "normal",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "class": "Window",
 "headerPaddingRight": 10,
 "backgroundColorDirection": "vertical",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerHeight": 5,
 "scrollBarColor": "#000000",
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 3,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "children": [
  "this.htmlText_248AFDFC_3255_F4FD_41AE_6F965490E8D0",
  "this.viewer_uidEA929C88_F927_1599_41C7_868EB8DDA181"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "closeButtonBorderRadius": 11,
 "shadowOpacity": 0.5,
 "titleFontSize": "1.29vmin",
 "shadowVerticalLength": 0,
 "bodyBackgroundColorDirection": "vertical",
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "backgroundColorRatios": [],
 "headerPaddingBottom": 10,
 "borderRadius": 5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "layout": "vertical",
 "closeButtonIconWidth": 12,
 "titlePaddingLeft": 5,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "closeButtonIconColor": "#000000",
 "close": "this.playList_EA92BC88_F927_1599_41E7_CF0FF8B31D0E.set('selectedIndex', -1);",
 "bodyPaddingBottom": 5,
 "bodyPaddingRight": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "headerBackgroundColorDirection": "vertical",
 "data": {
  "name": "Window35056"
 },
 "titleFontFamily": "Arial",
 "closeButtonBackgroundColor": [],
 "shadowSpread": 1
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -174.84,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_EABF5CD7_F927_15B6_41E4_285665D0197F"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 169.8,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_ED0BED4D_F927_149A_41D0_5A3D1F39FBBA"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": "this.sequence_034CA1E0_1332_5F39_4164_B2B001251D18",
 "id": "panorama_2FBABF32_0FAB_C326_41A6_6E5201897A35_camera"
},
{
 "class": "Video",
 "label": "vid lab d",
 "scaleMode": "fit_inside",
 "width": 1080,
 "thumbnailUrl": "media/video_0C4AF30A_1E38_99C1_4196_B3BC446ECE8D_t.jpg",
 "loop": false,
 "id": "video_0C4AF30A_1E38_99C1_4196_B3BC446ECE8D",
 "height": 1080,
 "video": {
  "width": 1080,
  "class": "VideoResource",
  "mp4Url": "media/video_0C4AF30A_1E38_99C1_4196_B3BC446ECE8D.mp4",
  "height": 1080
 }
},
{
 "to": "left",
 "class": "SlideOutEffect",
 "duration": 400,
 "id": "effect_030CF946_1E08_8841_419A_D665C0FA63C6",
 "easing": "quad_in"
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "VideoPlayListItem",
   "media": "this.video_0DF957D6_1E08_7841_41B3_2303FFD76BF5",
   "start": "this.viewer_uidEA940C8E_F927_1599_41E8_16606E384E65VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_EA942C8E_F927_1599_41BA_022523C9985D, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_EA942C8E_F927_1599_41BA_022523C9985D, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uidEA940C8E_F927_1599_41E8_16606E384E65VideoPlayer)",
   "player": "this.viewer_uidEA940C8E_F927_1599_41E8_16606E384E65VideoPlayer"
  }
 ],
 "id": "playList_EA942C8E_F927_1599_41BA_022523C9985D"
},
{
 "class": "SlideInEffect",
 "duration": 400,
 "id": "effect_0B3DC1E4_19FF_C020_41A1_140B6B68B1B0",
 "from": "left",
 "easing": "quad_in"
},
{
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "id": "window_2672A932_326B_BD0A_41C8_70268101A61D",
 "horizontalAlign": "center",
 "width": 400,
 "backgroundOpacity": 1,
 "closeButtonIconHeight": 12,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "overflow": "scroll",
 "titleFontColor": "#000000",
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "titlePaddingRight": 5,
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "minHeight": 20,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "modal": true,
 "propagateClick": false,
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [],
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "height": 600,
 "title": "",
 "borderSize": 0,
 "headerPaddingLeft": 10,
 "titleFontStyle": "normal",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "class": "Window",
 "headerPaddingRight": 10,
 "backgroundColorDirection": "vertical",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerHeight": 5,
 "scrollBarColor": "#000000",
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 3,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "children": [
  "this.htmlText_26727937_326B_BD0A_419A_F2BE724FE598",
  "this.viewer_uidEA931C84_F927_1589_41CB_31026B176D68"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "closeButtonBorderRadius": 11,
 "shadowOpacity": 0.5,
 "titleFontSize": "1.29vmin",
 "shadowVerticalLength": 0,
 "bodyBackgroundColorDirection": "vertical",
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "backgroundColorRatios": [],
 "headerPaddingBottom": 10,
 "borderRadius": 5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "layout": "vertical",
 "closeButtonIconWidth": 12,
 "titlePaddingLeft": 5,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "closeButtonIconColor": "#000000",
 "close": "this.playList_EA932C84_F927_1589_41D5_70EA376E016E.set('selectedIndex', -1);",
 "bodyPaddingBottom": 5,
 "bodyPaddingRight": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "headerBackgroundColorDirection": "vertical",
 "data": {
  "name": "Window12532"
 },
 "titleFontFamily": "Arial",
 "closeButtonBackgroundColor": [],
 "shadowSpread": 1
},
{
 "class": "SlideInEffect",
 "duration": 400,
 "id": "effect_0B0F0235_19C9_4020_41A3_7E5AEFDE6436",
 "from": "left",
 "easing": "quad_in"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_2DF0ED7C_0FAF_4722_4197_CF60E74696F9_camera"
},
{
 "to": "left",
 "class": "SlideOutEffect",
 "duration": 400,
 "id": "effect_112869ED_311E_0034_41C2_70A247245BB7",
 "easing": "quad_in"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 167.37,
  "pitch": 0
 },
 "id": "camera_EAE17D19_F927_14BB_41B3_0A31F9D48F56"
},
{
 "class": "SlideInEffect",
 "duration": 400,
 "id": "effect_4983BDE0_570B_E541_41B3_32D6394D0ACC",
 "from": "left",
 "easing": "quad_in"
},
{
 "class": "Photo",
 "duration": 5000,
 "id": "photo_2691A0AB_3276_4B1B_41AF_8F701051E093",
 "width": 1245,
 "label": "info lab dasar",
 "image": {
  "levels": [
   {
    "url": "media/photo_2691A0AB_3276_4B1B_41AF_8F701051E093.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "thumbnailUrl": "media/photo_2691A0AB_3276_4B1B_41AF_8F701051E093_t.png",
 "height": 1761
},
{
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "id": "window_23885104_326A_CD0D_41C5_D75F61B07641",
 "horizontalAlign": "center",
 "width": 400,
 "backgroundOpacity": 1,
 "closeButtonIconHeight": 12,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "overflow": "scroll",
 "titleFontColor": "#000000",
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "titlePaddingRight": 5,
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "minHeight": 20,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "modal": true,
 "propagateClick": false,
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [],
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "height": 600,
 "title": "",
 "borderSize": 0,
 "headerPaddingLeft": 10,
 "titleFontStyle": "normal",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "class": "Window",
 "headerPaddingRight": 10,
 "backgroundColorDirection": "vertical",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerHeight": 5,
 "scrollBarColor": "#000000",
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 3,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "children": [
  "this.htmlText_2389E104_326A_CD0D_41C7_92D98AD64ECF",
  "this.viewer_uidEA911C80_F927_1589_41E5_A0763E464D6C"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "closeButtonBorderRadius": 11,
 "shadowOpacity": 0.5,
 "titleFontSize": "1.29vmin",
 "shadowVerticalLength": 0,
 "bodyBackgroundColorDirection": "vertical",
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "backgroundColorRatios": [],
 "headerPaddingBottom": 10,
 "borderRadius": 5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "layout": "vertical",
 "closeButtonIconWidth": 12,
 "titlePaddingLeft": 5,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "closeButtonIconColor": "#000000",
 "close": "this.playList_EA912C80_F927_1589_41BA_F8A57CF852AD.set('selectedIndex', -1);",
 "bodyPaddingBottom": 5,
 "bodyPaddingRight": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "headerBackgroundColorDirection": "vertical",
 "data": {
  "name": "Window7586"
 },
 "titleFontFamily": "Arial",
 "closeButtonBackgroundColor": [],
 "shadowSpread": 1
},
{
 "class": "SlideInEffect",
 "duration": 400,
 "id": "effect_086FE434_19C9_4020_41B8_F243927DB7C7",
 "from": "left",
 "easing": "quad_in"
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "VideoPlayListItem",
   "media": "this.video_0A0AF181_1E39_98C3_41BA_F85DA1E1A464",
   "start": "this.viewer_uidEA90AC81_F927_158B_41ED_2CDD87E9165CVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_EA90CC81_F927_158B_41DA_6C0F3A711494, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_EA90CC81_F927_158B_41DA_6C0F3A711494, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uidEA90AC81_F927_158B_41ED_2CDD87E9165CVideoPlayer)",
   "player": "this.viewer_uidEA90AC81_F927_158B_41ED_2CDD87E9165CVideoPlayer"
  }
 ],
 "id": "playList_EA90CC81_F927_158B_41DA_6C0F3A711494"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 172.88,
  "pitch": 0
 },
 "initialSequence": "this.sequence_ED21CD68_F927_149A_41E3_4B3C78B7F5C2",
 "id": "camera_ED21FD67_F927_1495_4195_677129D1785A"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_375CA3CB_272B_B698_418A_27B1A3767B14_camera"
},
{
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "id": "window_096E156B_1E17_9847_419B_DD8B1B367B20",
 "horizontalAlign": "center",
 "width": 400,
 "backgroundOpacity": 1,
 "closeButtonIconHeight": 12,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "overflow": "scroll",
 "titleFontColor": "#000000",
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "titlePaddingRight": 5,
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "minHeight": 20,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "modal": true,
 "propagateClick": false,
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [],
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "height": 600,
 "title": "",
 "borderSize": 0,
 "headerPaddingLeft": 10,
 "titleFontStyle": "normal",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "class": "Window",
 "headerPaddingRight": 10,
 "backgroundColorDirection": "vertical",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerHeight": 5,
 "scrollBarColor": "#000000",
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 3,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "children": [
  "this.htmlText_096CE56C_1E17_9840_41BD_D43CA8571094",
  "this.image_uidEA846C7C_F927_1579_41E1_3045FA8DEA67_1"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "closeButtonBorderRadius": 11,
 "shadowOpacity": 0.5,
 "titleFontSize": "1.29vmin",
 "shadowVerticalLength": 0,
 "bodyBackgroundColorDirection": "vertical",
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "backgroundColorRatios": [],
 "headerPaddingBottom": 10,
 "borderRadius": 5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "layout": "vertical",
 "closeButtonIconWidth": 12,
 "titlePaddingLeft": 5,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "paddingTop": 0,
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 5,
 "bodyPaddingRight": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "headerBackgroundColorDirection": "vertical",
 "data": {
  "name": "Window26856"
 },
 "titleFontFamily": "Arial",
 "closeButtonBackgroundColor": [],
 "shadowSpread": 1
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "VideoPlayListItem",
   "media": "this.video_056FE6F0_1E08_B840_41B1_ECF170B30E18",
   "start": "this.viewer_uidEA97CC8C_F927_1599_41E7_CF44D2E55074VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_EA941C8C_F927_1599_41EC_DDC429C3F436, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_EA941C8C_F927_1599_41EC_DDC429C3F436, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uidEA97CC8C_F927_1599_41E7_CF44D2E55074VideoPlayer)",
   "player": "this.viewer_uidEA97CC8C_F927_1599_41E7_CF44D2E55074VideoPlayer"
  }
 ],
 "id": "playList_EA941C8C_F927_1599_41EC_DDC429C3F436"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 86.32,
  "pitch": 0
 },
 "initialSequence": "this.sequence_ED8A0E29_F927_149B_41DE_705082BFB5D1",
 "id": "camera_ED8A3E29_F927_149B_41C4_E3C31C5E19CB"
},
{
 "class": "SlideInEffect",
 "duration": 400,
 "id": "effect_B408C7EA_9491_7855_41DD_127E3B34D959",
 "from": "left",
 "easing": "quad_in"
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_05A3D501_1E1B_99C3_41A9_91EDDED47A26.ogg",
  "mp3Url": "media/audio_05A3D501_1E1B_99C3_41A9_91EDDED47A26.mp3"
 },
 "id": "audio_05A3D501_1E1B_99C3_41A9_91EDDED47A26",
 "data": {
  "label": "BS"
 }
},
{
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "id": "window_2431D880_326E_5B05_41A1_68426412418C",
 "horizontalAlign": "center",
 "width": 400,
 "backgroundOpacity": 1,
 "closeButtonIconHeight": 12,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "overflow": "scroll",
 "titleFontColor": "#000000",
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "titlePaddingRight": 5,
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "minHeight": 20,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "modal": true,
 "propagateClick": false,
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [],
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "height": 600,
 "title": "",
 "borderSize": 0,
 "headerPaddingLeft": 10,
 "titleFontStyle": "normal",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "class": "Window",
 "headerPaddingRight": 10,
 "backgroundColorDirection": "vertical",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerHeight": 5,
 "scrollBarColor": "#000000",
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 3,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "children": [
  "this.htmlText_24310880_326E_5B05_41C5_08F4D47C3CFE",
  "this.viewer_uidEA97AC8F_F927_1597_41D6_476D2B6D0AC4"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "closeButtonBorderRadius": 11,
 "shadowOpacity": 0.5,
 "titleFontSize": "1.29vmin",
 "shadowVerticalLength": 0,
 "bodyBackgroundColorDirection": "vertical",
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "backgroundColorRatios": [],
 "headerPaddingBottom": 10,
 "borderRadius": 5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "layout": "vertical",
 "closeButtonIconWidth": 12,
 "titlePaddingLeft": 5,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "closeButtonIconColor": "#000000",
 "close": "this.playList_EA97FC8F_F927_1597_41D3_8A26C6FAAC56.set('selectedIndex', -1);",
 "bodyPaddingBottom": 5,
 "bodyPaddingRight": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "headerBackgroundColorDirection": "vertical",
 "data": {
  "name": "Window31244"
 },
 "titleFontFamily": "Arial",
 "closeButtonBackgroundColor": [],
 "shadowSpread": 1
},
{
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "id": "window_268C06BA_327E_F705_41C1_A0167375326E",
 "horizontalAlign": "center",
 "width": 400,
 "backgroundOpacity": 1,
 "closeButtonIconHeight": 12,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "overflow": "scroll",
 "titleFontColor": "#000000",
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "titlePaddingRight": 5,
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "minHeight": 20,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "modal": true,
 "propagateClick": false,
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [],
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "height": 600,
 "title": "",
 "borderSize": 0,
 "headerPaddingLeft": 10,
 "titleFontStyle": "normal",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "class": "Window",
 "headerPaddingRight": 10,
 "backgroundColorDirection": "vertical",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerHeight": 5,
 "scrollBarColor": "#000000",
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 3,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "children": [
  "this.htmlText_268C36BA_327E_F705_4191_6D24B714390A",
  "this.image_uidEA8E5C7E_F927_1579_41E4_282E9D6611D1_1"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "closeButtonBorderRadius": 11,
 "shadowOpacity": 0.5,
 "titleFontSize": "1.29vmin",
 "shadowVerticalLength": 0,
 "bodyBackgroundColorDirection": "vertical",
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "backgroundColorRatios": [],
 "headerPaddingBottom": 10,
 "borderRadius": 5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "layout": "vertical",
 "closeButtonIconWidth": 12,
 "titlePaddingLeft": 5,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "paddingTop": 0,
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 5,
 "bodyPaddingRight": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "headerBackgroundColorDirection": "vertical",
 "data": {
  "name": "Window18665"
 },
 "titleFontFamily": "Arial",
 "closeButtonBackgroundColor": [],
 "shadowSpread": 1
},
{
 "class": "Video",
 "label": "vid prodi",
 "scaleMode": "fit_inside",
 "width": 1080,
 "thumbnailUrl": "media/video_0A0AF181_1E39_98C3_41BA_F85DA1E1A464_t.jpg",
 "loop": false,
 "id": "video_0A0AF181_1E39_98C3_41BA_F85DA1E1A464",
 "height": 1080,
 "video": {
  "width": 1080,
  "class": "VideoResource",
  "mp4Url": "media/video_0A0AF181_1E39_98C3_41BA_F85DA1E1A464.mp4",
  "height": 1080
 }
},
{
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "id": "window_274FB6D4_326E_570D_41C8_BB662D60E02E",
 "horizontalAlign": "center",
 "width": 400,
 "backgroundOpacity": 1,
 "closeButtonIconHeight": 12,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "overflow": "scroll",
 "titleFontColor": "#000000",
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "titlePaddingRight": 5,
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "minHeight": 20,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "modal": true,
 "propagateClick": false,
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [],
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "height": 600,
 "title": "",
 "borderSize": 0,
 "headerPaddingLeft": 10,
 "titleFontStyle": "normal",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "class": "Window",
 "headerPaddingRight": 10,
 "backgroundColorDirection": "vertical",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerHeight": 5,
 "scrollBarColor": "#000000",
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 3,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "children": [
  "this.htmlText_274D46D4_326E_570D_41C0_2049BEEC474B",
  "this.image_uidEA948C8E_F927_1599_41E4_EE92D4B6DA94_1"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "closeButtonBorderRadius": 11,
 "shadowOpacity": 0.5,
 "titleFontSize": "1.29vmin",
 "shadowVerticalLength": 0,
 "bodyBackgroundColorDirection": "vertical",
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "backgroundColorRatios": [],
 "headerPaddingBottom": 10,
 "borderRadius": 5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "layout": "vertical",
 "closeButtonIconWidth": 12,
 "titlePaddingLeft": 5,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "paddingTop": 0,
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 5,
 "bodyPaddingRight": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "headerBackgroundColorDirection": "vertical",
 "data": {
  "name": "Window30404"
 },
 "titleFontFamily": "Arial",
 "closeButtonBackgroundColor": [],
 "shadowSpread": 1
},
{
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "id": "window_244B8A5A_326D_BF3E_41B3_0AF012B83EFB",
 "horizontalAlign": "center",
 "width": 400,
 "backgroundOpacity": 1,
 "closeButtonIconHeight": 12,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "overflow": "scroll",
 "titleFontColor": "#000000",
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "titlePaddingRight": 5,
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "minHeight": 20,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "modal": true,
 "propagateClick": false,
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [],
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "height": 600,
 "title": "",
 "borderSize": 0,
 "headerPaddingLeft": 10,
 "titleFontStyle": "normal",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "class": "Window",
 "headerPaddingRight": 10,
 "backgroundColorDirection": "vertical",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerHeight": 5,
 "scrollBarColor": "#000000",
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 3,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "children": [
  "this.htmlText_244B4A60_326D_BF05_41C2_4A6DF2B60110",
  "this.viewer_uidEA940C8E_F927_1599_41E8_16606E384E65"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "closeButtonBorderRadius": 11,
 "shadowOpacity": 0.5,
 "titleFontSize": "1.29vmin",
 "shadowVerticalLength": 0,
 "bodyBackgroundColorDirection": "vertical",
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "backgroundColorRatios": [],
 "headerPaddingBottom": 10,
 "borderRadius": 5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "layout": "vertical",
 "closeButtonIconWidth": 12,
 "titlePaddingLeft": 5,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "closeButtonIconColor": "#000000",
 "close": "this.playList_EA942C8E_F927_1599_41BA_022523C9985D.set('selectedIndex', -1);",
 "bodyPaddingBottom": 5,
 "bodyPaddingRight": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "headerBackgroundColorDirection": "vertical",
 "data": {
  "name": "Window32040"
 },
 "titleFontFamily": "Arial",
 "closeButtonBackgroundColor": [],
 "shadowSpread": 1
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -26.85,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_EDDA7ED5_F927_158A_41D8_7D7183728F09"
},
{
 "class": "Photo",
 "duration": 5000,
 "id": "photo_52CB5A8E_447F_8CC2_41C9_E0B5A9ECC2ED",
 "width": 1708,
 "label": "SELAMAT DATANG DI VIRTUAL TOUR PRODI TEKNIK INFORMATIKA (6)",
 "image": {
  "levels": [
   {
    "url": "media/photo_52CB5A8E_447F_8CC2_41C9_E0B5A9ECC2ED.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "thumbnailUrl": "media/photo_52CB5A8E_447F_8CC2_41C9_E0B5A9ECC2ED_t.png",
 "height": 2664
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 1.1,
  "pitch": 4.39
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_2FBA9DCA_0FAB_C766_414D_827A2822C3FA_camera"
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "VideoPlayListItem",
   "media": "this.video_0DFB5DD1_1E09_8843_41A1_10DAC293F48B",
   "start": "this.viewer_uidEA919C80_F927_1589_41D7_46498C633474VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_EA91BC80_F927_1589_41D2_E8C9D4D5E0AC, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_EA91BC80_F927_1589_41D2_E8C9D4D5E0AC, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uidEA919C80_F927_1589_41D7_46498C633474VideoPlayer)",
   "player": "this.viewer_uidEA919C80_F927_1589_41D7_46498C633474VideoPlayer"
  }
 ],
 "id": "playList_EA91BC80_F927_1589_41D2_E8C9D4D5E0AC"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -149.82,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_ED67FDB6_F927_17F6_41E7_D4CDE2AEBDF7"
},
{
 "class": "Photo",
 "duration": 5000,
 "id": "photo_2B8D6980_2729_D289_41A9_4A7EA8B9264C",
 "width": 1245,
 "label": "CREDIT",
 "image": {
  "levels": [
   {
    "url": "media/photo_2B8D6980_2729_D289_41A9_4A7EA8B9264C.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "thumbnailUrl": "media/photo_2B8D6980_2729_D289_41A9_4A7EA8B9264C_t.png",
 "height": 1761
},
{
 "class": "Photo",
 "duration": 5000,
 "id": "photo_2762E7CD_326A_7519_41B6_B990C9B9893C",
 "width": 1245,
 "label": "info komputer lab lanjutan",
 "image": {
  "levels": [
   {
    "url": "media/photo_2762E7CD_326A_7519_41B6_B990C9B9893C.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "thumbnailUrl": "media/photo_2762E7CD_326A_7519_41B6_B990C9B9893C_t.png",
 "height": 1761
},
{
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "id": "window_272C9028_3276_CB05_415B_B4896348B414",
 "horizontalAlign": "center",
 "width": 400,
 "backgroundOpacity": 1,
 "closeButtonIconHeight": 12,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "overflow": "scroll",
 "titleFontColor": "#000000",
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "titlePaddingRight": 5,
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "minHeight": 20,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "modal": true,
 "propagateClick": false,
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [],
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "height": 600,
 "title": "",
 "borderSize": 0,
 "headerPaddingLeft": 10,
 "titleFontStyle": "normal",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "class": "Window",
 "headerPaddingRight": 10,
 "backgroundColorDirection": "vertical",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerHeight": 5,
 "scrollBarColor": "#000000",
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 3,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "children": [
  "this.htmlText_272CA028_3276_CB05_41B0_1509D299CFCF",
  "this.image_uidEA95CC89_F927_159B_41D9_97D9571DA727_1"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "closeButtonBorderRadius": 11,
 "shadowOpacity": 0.5,
 "titleFontSize": "1.29vmin",
 "shadowVerticalLength": 0,
 "bodyBackgroundColorDirection": "vertical",
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "backgroundColorRatios": [],
 "headerPaddingBottom": 10,
 "borderRadius": 5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "layout": "vertical",
 "closeButtonIconWidth": 12,
 "titlePaddingLeft": 5,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "paddingTop": 0,
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 5,
 "bodyPaddingRight": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "headerBackgroundColorDirection": "vertical",
 "data": {
  "name": "Window22832"
 },
 "titleFontFamily": "Arial",
 "closeButtonBackgroundColor": [],
 "shadowSpread": 1
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 157.24,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_EAB5ACBB_F927_15FE_41B0_893A7563EE1C"
},
{
 "label": "PRODI",
 "hfovMin": "120%",
 "id": "panorama_375CA3CB_272B_B698_418A_27B1A3767B14",
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 172.97,
   "distance": 1,
   "backwardYaw": -22.76,
   "panorama": "this.panorama_2FBA9DCA_0FAB_C766_414D_827A2822C3FA"
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.overlay_375C83CB_272B_B698_419A_8B7DD9B13F41",
  "this.overlay_22B3A7CD_325A_551F_41C6_04C06D134177",
  "this.overlay_233D5A84_325E_DF0E_41A4_8F0EBAE7611A",
  "this.overlay_23536FFE_3255_B4FD_41B9_D68236D688D7"
 ],
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_375CA3CB_272B_B698_418A_27B1A3767B14_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_375CA3CB_272B_B698_418A_27B1A3767B14_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_375CA3CB_272B_B698_418A_27B1A3767B14_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_375CA3CB_272B_B698_418A_27B1A3767B14_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_375CA3CB_272B_B698_418A_27B1A3767B14_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_375CA3CB_272B_B698_418A_27B1A3767B14_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_375CA3CB_272B_B698_418A_27B1A3767B14_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_375CA3CB_272B_B698_418A_27B1A3767B14_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_375CA3CB_272B_B698_418A_27B1A3767B14_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_375CA3CB_272B_B698_418A_27B1A3767B14_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_375CA3CB_272B_B698_418A_27B1A3767B14_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_375CA3CB_272B_B698_418A_27B1A3767B14_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_375CA3CB_272B_B698_418A_27B1A3767B14_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_375CA3CB_272B_B698_418A_27B1A3767B14_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_375CA3CB_272B_B698_418A_27B1A3767B14_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_375CA3CB_272B_B698_418A_27B1A3767B14_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_375CA3CB_272B_B698_418A_27B1A3767B14_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_375CA3CB_272B_B698_418A_27B1A3767B14_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_375CA3CB_272B_B698_418A_27B1A3767B14_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_375CA3CB_272B_B698_418A_27B1A3767B14_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_375CA3CB_272B_B698_418A_27B1A3767B14_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_375CA3CB_272B_B698_418A_27B1A3767B14_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_375CA3CB_272B_B698_418A_27B1A3767B14_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_375CA3CB_272B_B698_418A_27B1A3767B14_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_375CA3CB_272B_B698_418A_27B1A3767B14_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_375CA3CB_272B_B698_418A_27B1A3767B14_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "to": "left",
 "class": "SlideOutEffect",
 "duration": 400,
 "id": "effect_27C1F008_310D_FFFB_41A2_B5C1794EE5C9",
 "easing": "quad_in"
},
{
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "id": "window_21D9E65A_326A_D705_4196_505F5148F9D6",
 "horizontalAlign": "center",
 "width": 400,
 "backgroundOpacity": 1,
 "closeButtonIconHeight": 12,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "overflow": "scroll",
 "titleFontColor": "#000000",
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "titlePaddingRight": 5,
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "minHeight": 20,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "modal": true,
 "propagateClick": false,
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [],
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "height": 600,
 "title": "",
 "borderSize": 0,
 "headerPaddingLeft": 10,
 "titleFontStyle": "normal",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "class": "Window",
 "headerPaddingRight": 10,
 "backgroundColorDirection": "vertical",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerHeight": 5,
 "scrollBarColor": "#000000",
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 3,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "children": [
  "this.htmlText_21D9965A_326A_D705_41B5_0404577E6393",
  "this.container_EA93CC83_F927_158F_41D0_C3A808E382EB"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "closeButtonBorderRadius": 11,
 "shadowOpacity": 0.5,
 "titleFontSize": "1.29vmin",
 "shadowVerticalLength": 0,
 "bodyBackgroundColorDirection": "vertical",
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "backgroundColorRatios": [],
 "headerPaddingBottom": 10,
 "borderRadius": 5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "layout": "vertical",
 "closeButtonIconWidth": 12,
 "titlePaddingLeft": 5,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "closeButtonIconColor": "#000000",
 "close": "this.playList_EA902C82_F927_1589_41D3_153AECD7523B.set('selectedIndex', -1);",
 "bodyPaddingBottom": 5,
 "bodyPaddingRight": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "headerBackgroundColorDirection": "vertical",
 "data": {
  "name": "Window13332"
 },
 "titleFontFamily": "Arial",
 "closeButtonBackgroundColor": [],
 "shadowSpread": 1
},
{
 "class": "Video",
 "label": "vid parkir",
 "scaleMode": "fit_inside",
 "width": 1080,
 "thumbnailUrl": "media/video_0DFB5DD1_1E09_8843_41A1_10DAC293F48B_t.jpg",
 "loop": false,
 "id": "video_0DFB5DD1_1E09_8843_41A1_10DAC293F48B",
 "height": 1080,
 "video": {
  "width": 1080,
  "class": "VideoResource",
  "mp4Url": "media/video_0DFB5DD1_1E09_8843_41A1_10DAC293F48B.mp4",
  "height": 1080
 }
},
{
 "class": "Photo",
 "duration": 5000,
 "id": "photo_09217473_1DCD_298A_4183_BAF13C142F58",
 "width": 776,
 "label": "MENUJU",
 "image": {
  "levels": [
   {
    "url": "media/photo_09217473_1DCD_298A_4183_BAF13C142F58.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "thumbnailUrl": "media/photo_09217473_1DCD_298A_4183_BAF13C142F58_t.png",
 "height": 683
},
{
 "class": "Video",
 "label": "vid lab ujikom",
 "scaleMode": "fit_inside",
 "width": 1080,
 "thumbnailUrl": "media/video_0AE736B3_1E09_F8C0_41B3_47EC6C0808B4_t.jpg",
 "loop": false,
 "id": "video_0AE736B3_1E09_F8C0_41B3_47EC6C0808B4",
 "height": 1080,
 "video": {
  "width": 1080,
  "class": "VideoResource",
  "mp4Url": "media/video_0AE736B3_1E09_F8C0_41B3_47EC6C0808B4.mp4",
  "height": 1080
 }
},
{
 "class": "Photo",
 "duration": 5000,
 "id": "photo_23073E28_3256_5705_41C3_B4CA3ADD5F6C",
 "width": 1245,
 "label": "info prodi",
 "image": {
  "levels": [
   {
    "url": "media/photo_23073E28_3256_5705_41C3_B4CA3ADD5F6C.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "thumbnailUrl": "media/photo_23073E28_3256_5705_41C3_B4CA3ADD5F6C_t.png",
 "height": 1761
},
{
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "id": "window_22ACEF7F_3256_75FA_41C5_F87A61BCBBE1",
 "horizontalAlign": "center",
 "width": 400,
 "backgroundOpacity": 1,
 "closeButtonIconHeight": 12,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "overflow": "scroll",
 "titleFontColor": "#000000",
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "titlePaddingRight": 5,
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "minHeight": 20,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "modal": true,
 "propagateClick": false,
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [],
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "height": 600,
 "title": "",
 "borderSize": 0,
 "headerPaddingLeft": 10,
 "titleFontStyle": "normal",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "class": "Window",
 "headerPaddingRight": 10,
 "backgroundColorDirection": "vertical",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerHeight": 5,
 "scrollBarColor": "#000000",
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 3,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "children": [
  "this.htmlText_22AC0F80_3256_7506_41AD_01D56F319E8C",
  "this.image_uidEA908C81_F927_158B_41D9_EEAF950823F8_1"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "closeButtonBorderRadius": 11,
 "shadowOpacity": 0.5,
 "titleFontSize": "1.29vmin",
 "shadowVerticalLength": 0,
 "bodyBackgroundColorDirection": "vertical",
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "backgroundColorRatios": [],
 "headerPaddingBottom": 10,
 "borderRadius": 5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "layout": "vertical",
 "closeButtonIconWidth": 12,
 "titlePaddingLeft": 5,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "paddingTop": 0,
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 5,
 "bodyPaddingRight": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "headerBackgroundColorDirection": "vertical",
 "data": {
  "name": "Window6578"
 },
 "titleFontFamily": "Arial",
 "closeButtonBackgroundColor": [],
 "shadowSpread": 1
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_2F64D6C9_0FAB_C562_419D_D1F42B2FF9F0_camera"
},
{
 "label": "LAB KOMPUTER LANJUT",
 "hfovMin": "120%",
 "id": "panorama_2FBABF32_0FAB_C326_41A6_6E5201897A35",
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 98.94,
   "distance": 1,
   "backwardYaw": -99.89,
   "panorama": "this.panorama_2F4B9540_0FAB_C762_41AD_692E126E6290"
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.overlay_065A7883_1309_C67B_41A6_3836B3A2963B",
  "this.overlay_272294B5_3277_CB0F_41C8_92C1BDFC9BB4",
  "this.overlay_27FC1E89_3277_B707_4197_2E4F27B4761C",
  "this.overlay_27340DDF_3276_753A_4177_8EDADF0F4110"
 ],
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_2FBABF32_0FAB_C326_41A6_6E5201897A35_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2FBABF32_0FAB_C326_41A6_6E5201897A35_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2FBABF32_0FAB_C326_41A6_6E5201897A35_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2FBABF32_0FAB_C326_41A6_6E5201897A35_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_2FBABF32_0FAB_C326_41A6_6E5201897A35_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2FBABF32_0FAB_C326_41A6_6E5201897A35_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2FBABF32_0FAB_C326_41A6_6E5201897A35_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2FBABF32_0FAB_C326_41A6_6E5201897A35_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2FBABF32_0FAB_C326_41A6_6E5201897A35_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2FBABF32_0FAB_C326_41A6_6E5201897A35_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2FBABF32_0FAB_C326_41A6_6E5201897A35_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2FBABF32_0FAB_C326_41A6_6E5201897A35_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2FBABF32_0FAB_C326_41A6_6E5201897A35_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2FBABF32_0FAB_C326_41A6_6E5201897A35_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2FBABF32_0FAB_C326_41A6_6E5201897A35_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2FBABF32_0FAB_C326_41A6_6E5201897A35_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_2FBABF32_0FAB_C326_41A6_6E5201897A35_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2FBABF32_0FAB_C326_41A6_6E5201897A35_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2FBABF32_0FAB_C326_41A6_6E5201897A35_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2FBABF32_0FAB_C326_41A6_6E5201897A35_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2FBABF32_0FAB_C326_41A6_6E5201897A35_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_2FBABF32_0FAB_C326_41A6_6E5201897A35_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2FBABF32_0FAB_C326_41A6_6E5201897A35_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2FBABF32_0FAB_C326_41A6_6E5201897A35_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2FBABF32_0FAB_C326_41A6_6E5201897A35_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_2FBABF32_0FAB_C326_41A6_6E5201897A35_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_2FBABA98_0FAB_4DE2_41A4_F41F4C69A336_camera"
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "VideoPlayListItem",
   "media": "this.video_0DF957D6_1E08_7841_41B3_2303FFD76BF5",
   "start": "this.viewer_uidEA97AC8F_F927_1597_41D6_476D2B6D0AC4VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_EA97FC8F_F927_1597_41D3_8A26C6FAAC56, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_EA97FC8F_F927_1597_41D3_8A26C6FAAC56, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uidEA97AC8F_F927_1597_41D6_476D2B6D0AC4VideoPlayer)",
   "player": "this.viewer_uidEA97AC8F_F927_1597_41D6_476D2B6D0AC4VideoPlayer"
  }
 ],
 "id": "playList_EA97FC8F_F927_1597_41D3_8A26C6FAAC56"
},
{
 "label": "LORONG LAB 3",
 "hfovMin": "120%",
 "id": "panorama_2FBA4CAA_0FAB_4526_419C_1A01B06BA5F2",
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -89.46,
   "distance": 1,
   "backwardYaw": 87.6,
   "panorama": "this.panorama_2F4DB3F5_0FAB_4323_41A1_9616D3077287"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -10.2,
   "distance": 1,
   "backwardYaw": 85.39,
   "panorama": "this.panorama_2F64D6C9_0FAB_C562_419D_D1F42B2FF9F0"
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.overlay_052AB9EF_1356_6F4C_4191_873A68EDB766",
  "this.overlay_05D784C0_1351_E5B3_419A_EC33757DC56E",
  "this.overlay_241FBB5D_326B_DD3F_41B1_06DCF11F29DE",
  "this.overlay_24D03FEF_326A_551A_4187_D8DAE584F6FB",
  "this.overlay_24AF520A_326A_4F05_4190_1E3E09D98E72"
 ],
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_2FBA4CAA_0FAB_4526_419C_1A01B06BA5F2_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2FBA4CAA_0FAB_4526_419C_1A01B06BA5F2_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2FBA4CAA_0FAB_4526_419C_1A01B06BA5F2_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2FBA4CAA_0FAB_4526_419C_1A01B06BA5F2_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_2FBA4CAA_0FAB_4526_419C_1A01B06BA5F2_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2FBA4CAA_0FAB_4526_419C_1A01B06BA5F2_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2FBA4CAA_0FAB_4526_419C_1A01B06BA5F2_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2FBA4CAA_0FAB_4526_419C_1A01B06BA5F2_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2FBA4CAA_0FAB_4526_419C_1A01B06BA5F2_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2FBA4CAA_0FAB_4526_419C_1A01B06BA5F2_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2FBA4CAA_0FAB_4526_419C_1A01B06BA5F2_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2FBA4CAA_0FAB_4526_419C_1A01B06BA5F2_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2FBA4CAA_0FAB_4526_419C_1A01B06BA5F2_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2FBA4CAA_0FAB_4526_419C_1A01B06BA5F2_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2FBA4CAA_0FAB_4526_419C_1A01B06BA5F2_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2FBA4CAA_0FAB_4526_419C_1A01B06BA5F2_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_2FBA4CAA_0FAB_4526_419C_1A01B06BA5F2_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2FBA4CAA_0FAB_4526_419C_1A01B06BA5F2_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2FBA4CAA_0FAB_4526_419C_1A01B06BA5F2_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2FBA4CAA_0FAB_4526_419C_1A01B06BA5F2_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2FBA4CAA_0FAB_4526_419C_1A01B06BA5F2_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_2FBA4CAA_0FAB_4526_419C_1A01B06BA5F2_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2FBA4CAA_0FAB_4526_419C_1A01B06BA5F2_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2FBA4CAA_0FAB_4526_419C_1A01B06BA5F2_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2FBA4CAA_0FAB_4526_419C_1A01B06BA5F2_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_2FBA4CAA_0FAB_4526_419C_1A01B06BA5F2_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_0C2A3A6E_1A48_C020_41B6_F7DB48EAA229_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 2.53,
  "pitch": 0
 },
 "id": "camera_EAC4ACE5_F927_158B_41D5_B9EF4D74E6E5"
},
{
 "label": "LORONG LAB 2",
 "hfovMin": "120%",
 "id": "panorama_2F4DB3F5_0FAB_4323_41A1_9616D3077287",
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -93.68,
   "distance": 1,
   "backwardYaw": 0.15,
   "panorama": "this.panorama_2F4B9540_0FAB_C762_41AD_692E126E6290"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -7.12,
   "distance": 1,
   "backwardYaw": -12.63,
   "panorama": "this.panorama_0C2A3A6E_1A48_C020_41B6_F7DB48EAA229"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 87.6,
   "distance": 1,
   "backwardYaw": -89.46,
   "panorama": "this.panorama_2FBA4CAA_0FAB_4526_419C_1A01B06BA5F2"
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.overlay_0542D21F_1352_BCCA_41A9_F0E8DBEDBC31",
  "this.overlay_06BF93B8_1353_A3D5_41A2_0F28C08AEC89",
  "this.overlay_0691091C_1351_ACCD_41B3_504BE60C2029"
 ],
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_2F4DB3F5_0FAB_4323_41A1_9616D3077287_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2F4DB3F5_0FAB_4323_41A1_9616D3077287_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2F4DB3F5_0FAB_4323_41A1_9616D3077287_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2F4DB3F5_0FAB_4323_41A1_9616D3077287_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_2F4DB3F5_0FAB_4323_41A1_9616D3077287_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2F4DB3F5_0FAB_4323_41A1_9616D3077287_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2F4DB3F5_0FAB_4323_41A1_9616D3077287_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2F4DB3F5_0FAB_4323_41A1_9616D3077287_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2F4DB3F5_0FAB_4323_41A1_9616D3077287_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2F4DB3F5_0FAB_4323_41A1_9616D3077287_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2F4DB3F5_0FAB_4323_41A1_9616D3077287_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2F4DB3F5_0FAB_4323_41A1_9616D3077287_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2F4DB3F5_0FAB_4323_41A1_9616D3077287_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2F4DB3F5_0FAB_4323_41A1_9616D3077287_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2F4DB3F5_0FAB_4323_41A1_9616D3077287_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2F4DB3F5_0FAB_4323_41A1_9616D3077287_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_2F4DB3F5_0FAB_4323_41A1_9616D3077287_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2F4DB3F5_0FAB_4323_41A1_9616D3077287_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2F4DB3F5_0FAB_4323_41A1_9616D3077287_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2F4DB3F5_0FAB_4323_41A1_9616D3077287_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2F4DB3F5_0FAB_4323_41A1_9616D3077287_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_2F4DB3F5_0FAB_4323_41A1_9616D3077287_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2F4DB3F5_0FAB_4323_41A1_9616D3077287_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2F4DB3F5_0FAB_4323_41A1_9616D3077287_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2F4DB3F5_0FAB_4323_41A1_9616D3077287_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_2F4DB3F5_0FAB_4323_41A1_9616D3077287_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "class": "PlayList",
 "change": "this.showComponentsWhileMouseOver(this.container_EA93CC83_F927_158F_41D0_C3A808E382EB, [this.htmltext_EA93AC83_F927_158F_41D2_09720396B43C,this.component_EA939C84_F927_1589_41CA_36617B0B90C3,this.component_EA936C84_F927_1589_41E9_AD88036A9B01], 2000)",
 "items": [
  "this.albumitem_EA93EC82_F927_1589_41C5_0ACFDBD34C65"
 ],
 "id": "playList_EA902C82_F927_1589_41D3_153AECD7523B"
},
{
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "id": "window_26A849C2_3275_BD05_41C0_02A607C29D17",
 "horizontalAlign": "center",
 "width": 400,
 "backgroundOpacity": 1,
 "closeButtonIconHeight": 12,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "overflow": "scroll",
 "titleFontColor": "#000000",
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "titlePaddingRight": 5,
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "minHeight": 20,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "modal": true,
 "propagateClick": false,
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [],
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "height": 600,
 "title": "",
 "borderSize": 0,
 "headerPaddingLeft": 10,
 "titleFontStyle": "normal",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "class": "Window",
 "headerPaddingRight": 10,
 "backgroundColorDirection": "vertical",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerHeight": 5,
 "scrollBarColor": "#000000",
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 3,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "children": [
  "this.htmlText_26A809C3_3275_BD0B_41BA_E2A9CE1524D2",
  "this.viewer_uidEA955C8A_F927_1599_41CD_B06EFA977B34"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "closeButtonBorderRadius": 11,
 "shadowOpacity": 0.5,
 "titleFontSize": "1.29vmin",
 "shadowVerticalLength": 0,
 "bodyBackgroundColorDirection": "vertical",
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "backgroundColorRatios": [],
 "headerPaddingBottom": 10,
 "borderRadius": 5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "layout": "vertical",
 "closeButtonIconWidth": 12,
 "titlePaddingLeft": 5,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "closeButtonIconColor": "#000000",
 "close": "this.playList_EA956C89_F927_159B_41E5_97EFBD802D6D.set('selectedIndex', -1);",
 "bodyPaddingBottom": 5,
 "bodyPaddingRight": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "headerBackgroundColorDirection": "vertical",
 "data": {
  "name": "Window22026"
 },
 "titleFontFamily": "Arial",
 "closeButtonBackgroundColor": [],
 "shadowSpread": 1
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 169.48,
  "pitch": 0
 },
 "id": "camera_ED15ED5A_F927_14BE_41D9_CC94E629F512"
},
{
 "to": "left",
 "class": "SlideOutEffect",
 "duration": 400,
 "id": "effect_027037E0_1E17_9841_4193_482DE9D8B54F",
 "easing": "quad_in"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_1C8531AD_12F9_495A_4190_01D89A3CAF80_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_2F299F25_0FAB_4322_41A4_7E7C91C19BB3_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -100.24,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_ED7F2E01_F927_148B_418B_098418292EA2"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -2.28,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_EAF43D33_F927_148F_41CB_C73A47006299"
},
{
 "label": "RUANG KETUA LAB",
 "hfovMin": "150%",
 "id": "panorama_0C2110F6_1A48_C021_4194_3180B6EBF789",
 "partial": true,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -11.24,
   "distance": 1,
   "backwardYaw": -1.47,
   "panorama": "this.panorama_0C2A3A6E_1A48_C020_41B6_F7DB48EAA229"
  }
 ],
 "hfov": 30,
 "overlays": [
  "this.overlay_0111D2C2_1AB9_C060_41A2_05F24F0F1F5E"
 ],
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_0C2110F6_1A48_C021_4194_3180B6EBF789_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_0C2110F6_1A48_C021_4194_3180B6EBF789_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 35,
      "width": 17920,
      "tags": "ondemand",
      "rowCount": 35,
      "height": 17920
     },
     {
      "url": "media/panorama_0C2110F6_1A48_C021_4194_3180B6EBF789_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 18,
      "width": 9216,
      "tags": "ondemand",
      "rowCount": 18,
      "height": 9216
     },
     {
      "url": "media/panorama_0C2110F6_1A48_C021_4194_3180B6EBF789_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_0C2110F6_1A48_C021_4194_3180B6EBF789_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_0C2110F6_1A48_C021_4194_3180B6EBF789_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0C2110F6_1A48_C021_4194_3180B6EBF789_0/f/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0C2110F6_1A48_C021_4194_3180B6EBF789_0/f/6/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 22.5,
 "thumbnailUrl": "media/panorama_0C2110F6_1A48_C021_4194_3180B6EBF789_t.jpg",
 "hfovMax": 30,
 "pitch": 0
},
{
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "id": "window_267274E2_327E_4B05_41C7_5D197AB7D3D8",
 "horizontalAlign": "center",
 "width": 400,
 "backgroundOpacity": 1,
 "closeButtonIconHeight": 12,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "overflow": "scroll",
 "titleFontColor": "#000000",
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "titlePaddingRight": 5,
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "minHeight": 20,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "modal": true,
 "propagateClick": false,
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [],
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "height": 600,
 "title": "",
 "borderSize": 0,
 "headerPaddingLeft": 10,
 "titleFontStyle": "normal",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "class": "Window",
 "headerPaddingRight": 10,
 "backgroundColorDirection": "vertical",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerHeight": 5,
 "scrollBarColor": "#000000",
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 3,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "children": [
  "this.htmlText_267024E3_327E_4B0B_41BB_54C4755C14BE",
  "this.viewer_uidEA919C80_F927_1589_41D7_46498C633474"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "closeButtonBorderRadius": 11,
 "shadowOpacity": 0.5,
 "titleFontSize": "1.29vmin",
 "shadowVerticalLength": 0,
 "bodyBackgroundColorDirection": "vertical",
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "backgroundColorRatios": [],
 "headerPaddingBottom": 10,
 "borderRadius": 5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "layout": "vertical",
 "closeButtonIconWidth": 12,
 "titlePaddingLeft": 5,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "closeButtonIconColor": "#000000",
 "close": "this.playList_EA91BC80_F927_1589_41D2_E8C9D4D5E0AC.set('selectedIndex', -1);",
 "bodyPaddingBottom": 5,
 "bodyPaddingRight": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "headerBackgroundColorDirection": "vertical",
 "data": {
  "name": "Window17051"
 },
 "titleFontFamily": "Arial",
 "closeButtonBackgroundColor": [],
 "shadowSpread": 1
},
{
 "label": "LAB JARINGAN KOMPUTER DAN HARDWARE",
 "hfovMin": "150%",
 "id": "panorama_0C2A3A6E_1A48_C020_41B6_F7DB48EAA229",
 "partial": true,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 9.74,
   "distance": 1,
   "backwardYaw": -10.52,
   "panorama": "this.panorama_00B9BDF2_1A79_4020_41B8_B948F9596DC6"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -12.63,
   "distance": 1,
   "backwardYaw": -7.12,
   "panorama": "this.panorama_2F4DB3F5_0FAB_4323_41A1_9616D3077287"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -1.47,
   "distance": 1,
   "backwardYaw": -11.24,
   "panorama": "this.panorama_0C2110F6_1A48_C021_4194_3180B6EBF789"
  }
 ],
 "hfov": 30,
 "overlays": [
  "this.overlay_028E8084_1A79_40E1_41B0_1D28DB22F1A1",
  "this.overlay_031ED124_1A79_4020_4193_A92E984AAB4F",
  "this.overlay_00B07FB2_1A58_C020_41B0_47288960F8A1",
  "this.overlay_27E19991_326D_FD07_41C2_0730ABCEAD39",
  "this.overlay_27E65AB3_326E_7F0B_41A0_017F979D923A",
  "this.overlay_27D11E4B_326E_D71B_4193_30A48EBC6279"
 ],
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_0C2A3A6E_1A48_C020_41B6_F7DB48EAA229_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_0C2A3A6E_1A48_C020_41B6_F7DB48EAA229_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 35,
      "width": 17920,
      "tags": "ondemand",
      "rowCount": 35,
      "height": 17920
     },
     {
      "url": "media/panorama_0C2A3A6E_1A48_C020_41B6_F7DB48EAA229_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 18,
      "width": 9216,
      "tags": "ondemand",
      "rowCount": 18,
      "height": 9216
     },
     {
      "url": "media/panorama_0C2A3A6E_1A48_C020_41B6_F7DB48EAA229_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_0C2A3A6E_1A48_C020_41B6_F7DB48EAA229_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_0C2A3A6E_1A48_C020_41B6_F7DB48EAA229_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_0C2A3A6E_1A48_C020_41B6_F7DB48EAA229_0/f/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_0C2A3A6E_1A48_C020_41B6_F7DB48EAA229_0/f/6/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 22.5,
 "thumbnailUrl": "media/panorama_0C2A3A6E_1A48_C020_41B6_F7DB48EAA229_t.jpg",
 "hfovMax": 30,
 "pitch": 0
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "VideoPlayListItem",
   "media": "this.video_0AE736B3_1E09_F8C0_41B3_47EC6C0808B4",
   "start": "this.viewer_uidEA92FC87_F927_1597_41B5_9608D004E79CVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_EA930C87_F927_1597_41D7_D2FB15248092, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_EA930C87_F927_1597_41D7_D2FB15248092, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uidEA92FC87_F927_1597_41B5_9608D004E79CVideoPlayer)",
   "player": "this.viewer_uidEA92FC87_F927_1597_41B5_9608D004E79CVideoPlayer"
  }
 ],
 "id": "playList_EA930C87_F927_1597_41D7_D2FB15248092"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -179.85,
  "pitch": 0
 },
 "id": "camera_EADBAD0B_F927_149E_41E6_337B642E4646"
},
{
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "id": "window_27045446_326B_CB0D_41B5_D69DA767D36F",
 "horizontalAlign": "center",
 "width": 400,
 "backgroundOpacity": 1,
 "closeButtonIconHeight": 12,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "overflow": "scroll",
 "titleFontColor": "#000000",
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "titlePaddingRight": 5,
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "minHeight": 20,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "modal": true,
 "propagateClick": false,
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [],
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "height": 600,
 "title": "",
 "borderSize": 0,
 "headerPaddingLeft": 10,
 "titleFontStyle": "normal",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "class": "Window",
 "headerPaddingRight": 10,
 "backgroundColorDirection": "vertical",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerHeight": 5,
 "scrollBarColor": "#000000",
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 3,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "children": [
  "this.htmlText_27041447_326B_CB0B_41B1_38DDDAD88097",
  "this.viewer_uidEA97CC8C_F927_1599_41E7_CF44D2E55074"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "closeButtonBorderRadius": 11,
 "shadowOpacity": 0.5,
 "titleFontSize": "1.29vmin",
 "shadowVerticalLength": 0,
 "bodyBackgroundColorDirection": "vertical",
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "backgroundColorRatios": [],
 "headerPaddingBottom": 10,
 "borderRadius": 5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "layout": "vertical",
 "closeButtonIconWidth": 12,
 "titlePaddingLeft": 5,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "closeButtonIconColor": "#000000",
 "close": "this.playList_EA941C8C_F927_1599_41EC_DDC429C3F436.set('selectedIndex', -1);",
 "bodyPaddingBottom": 5,
 "bodyPaddingRight": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "headerBackgroundColorDirection": "vertical",
 "data": {
  "name": "Window26906"
 },
 "titleFontFamily": "Arial",
 "closeButtonBackgroundColor": [],
 "shadowSpread": 1
},
{
 "label": "LORONG KELAS",
 "hfovMin": "120%",
 "id": "panorama_2FBABA98_0FAB_4DE2_41A4_F41F4C69A336",
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -1.39,
   "distance": 1,
   "backwardYaw": 179.95,
   "panorama": "this.panorama_2F299F25_0FAB_4322_41A4_7E7C91C19BB3"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -171.84,
   "distance": 1,
   "backwardYaw": -85.29,
   "panorama": "this.panorama_1C8531AD_12F9_495A_4190_01D89A3CAF80"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 30.18,
   "distance": 1,
   "backwardYaw": 153.15,
   "panorama": "this.panorama_2DF0ED7C_0FAF_4722_4197_CF60E74696F9"
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.overlay_06FD2A58_1372_AD49_418C_3E35506758D4",
  "this.overlay_06EDA8DD_134E_AD48_41AF_E5B4B5602BA6",
  "this.overlay_0AD40A60_13F7_EC9A_41AF_619BF2159E90"
 ],
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_2FBABA98_0FAB_4DE2_41A4_F41F4C69A336_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2FBABA98_0FAB_4DE2_41A4_F41F4C69A336_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2FBABA98_0FAB_4DE2_41A4_F41F4C69A336_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2FBABA98_0FAB_4DE2_41A4_F41F4C69A336_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_2FBABA98_0FAB_4DE2_41A4_F41F4C69A336_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2FBABA98_0FAB_4DE2_41A4_F41F4C69A336_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2FBABA98_0FAB_4DE2_41A4_F41F4C69A336_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2FBABA98_0FAB_4DE2_41A4_F41F4C69A336_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2FBABA98_0FAB_4DE2_41A4_F41F4C69A336_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2FBABA98_0FAB_4DE2_41A4_F41F4C69A336_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2FBABA98_0FAB_4DE2_41A4_F41F4C69A336_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2FBABA98_0FAB_4DE2_41A4_F41F4C69A336_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2FBABA98_0FAB_4DE2_41A4_F41F4C69A336_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2FBABA98_0FAB_4DE2_41A4_F41F4C69A336_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2FBABA98_0FAB_4DE2_41A4_F41F4C69A336_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2FBABA98_0FAB_4DE2_41A4_F41F4C69A336_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_2FBABA98_0FAB_4DE2_41A4_F41F4C69A336_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2FBABA98_0FAB_4DE2_41A4_F41F4C69A336_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2FBABA98_0FAB_4DE2_41A4_F41F4C69A336_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2FBABA98_0FAB_4DE2_41A4_F41F4C69A336_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2FBABA98_0FAB_4DE2_41A4_F41F4C69A336_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_2FBABA98_0FAB_4DE2_41A4_F41F4C69A336_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2FBABA98_0FAB_4DE2_41A4_F41F4C69A336_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2FBABA98_0FAB_4DE2_41A4_F41F4C69A336_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2FBABA98_0FAB_4DE2_41A4_F41F4C69A336_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_2FBABA98_0FAB_4DE2_41A4_F41F4C69A336_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "VideoPlayListItem",
   "media": "this.video_0CB062C3_1E08_9840_41B9_D1B87E9753E3",
   "start": "this.viewer_uidEA931C84_F927_1589_41CB_31026B176D68VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_EA932C84_F927_1589_41D5_70EA376E016E, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_EA932C84_F927_1589_41D5_70EA376E016E, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uidEA931C84_F927_1589_41CB_31026B176D68VideoPlayer)",
   "player": "this.viewer_uidEA931C84_F927_1589_41CB_31026B176D68VideoPlayer"
  }
 ],
 "id": "playList_EA932C84_F927_1589_41D5_70EA376E016E"
},
{
 "to": "left",
 "class": "SlideOutEffect",
 "duration": 400,
 "id": "effect_039C1898_1E18_88C1_419F_9737B1E71516",
 "easing": "quad_in"
},
{
 "class": "SlideInEffect",
 "duration": 400,
 "id": "effect_18BBC752_310E_006C_41B5_0D8B802FB057",
 "from": "left",
 "easing": "quad_in"
},
{
 "label": "LORONG LAB",
 "hfovMin": "120%",
 "id": "panorama_2F4B9540_0FAB_C762_41AD_692E126E6290",
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -99.89,
   "distance": 1,
   "backwardYaw": 98.94,
   "panorama": "this.panorama_2FBABF32_0FAB_C326_41A6_6E5201897A35"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -177.47,
   "distance": 1,
   "backwardYaw": 79.76,
   "panorama": "this.panorama_1C8531AD_12F9_495A_4190_01D89A3CAF80"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 0.15,
   "distance": 1,
   "backwardYaw": -93.68,
   "panorama": "this.panorama_2F4DB3F5_0FAB_4323_41A1_9616D3077287"
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.overlay_074C2AB2_1372_ADCA_41A5_255B39E99979",
  "this.overlay_00AD267C_1376_A53D_4194_B9661627479D",
  "this.overlay_07B625AA_1376_67C4_41AD_36028DC672CC"
 ],
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_2F4B9540_0FAB_C762_41AD_692E126E6290_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2F4B9540_0FAB_C762_41AD_692E126E6290_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2F4B9540_0FAB_C762_41AD_692E126E6290_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2F4B9540_0FAB_C762_41AD_692E126E6290_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_2F4B9540_0FAB_C762_41AD_692E126E6290_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2F4B9540_0FAB_C762_41AD_692E126E6290_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2F4B9540_0FAB_C762_41AD_692E126E6290_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2F4B9540_0FAB_C762_41AD_692E126E6290_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2F4B9540_0FAB_C762_41AD_692E126E6290_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2F4B9540_0FAB_C762_41AD_692E126E6290_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2F4B9540_0FAB_C762_41AD_692E126E6290_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2F4B9540_0FAB_C762_41AD_692E126E6290_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2F4B9540_0FAB_C762_41AD_692E126E6290_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2F4B9540_0FAB_C762_41AD_692E126E6290_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2F4B9540_0FAB_C762_41AD_692E126E6290_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2F4B9540_0FAB_C762_41AD_692E126E6290_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_2F4B9540_0FAB_C762_41AD_692E126E6290_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2F4B9540_0FAB_C762_41AD_692E126E6290_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2F4B9540_0FAB_C762_41AD_692E126E6290_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2F4B9540_0FAB_C762_41AD_692E126E6290_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2F4B9540_0FAB_C762_41AD_692E126E6290_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_2F4B9540_0FAB_C762_41AD_692E126E6290_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2F4B9540_0FAB_C762_41AD_692E126E6290_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2F4B9540_0FAB_C762_41AD_692E126E6290_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2F4B9540_0FAB_C762_41AD_692E126E6290_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_2F4B9540_0FAB_C762_41AD_692E126E6290_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "to": "left",
 "class": "SlideOutEffect",
 "duration": 400,
 "id": "effect_2C352674_3AA1_EE57_41A1_BD5B5FE304A0",
 "easing": "quad_in"
},
{
 "class": "Photo",
 "duration": 5000,
 "id": "photo_09D4D31C_1DC5_2F7C_41B9_C8AF54EEEBF0",
 "width": 759,
 "label": "MENUJU (2)",
 "image": {
  "levels": [
   {
    "url": "media/photo_09D4D31C_1DC5_2F7C_41B9_C8AF54EEEBF0.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "thumbnailUrl": "media/photo_09D4D31C_1DC5_2F7C_41B9_C8AF54EEEBF0_t.png",
 "height": 1103
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "VideoPlayListItem",
   "media": "this.video_0DFB5DD1_1E09_8843_41A1_10DAC293F48B",
   "start": "this.viewer_uidEA91CC7F_F927_1577_41DA_7757C0934805VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_EA8E1C7F_F927_1577_4198_6312219D9B09, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_EA8E1C7F_F927_1577_4198_6312219D9B09, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uidEA91CC7F_F927_1577_41DA_7757C0934805VideoPlayer)",
   "player": "this.viewer_uidEA91CC7F_F927_1577_41DA_7757C0934805VideoPlayer"
  }
 ],
 "id": "playList_EA8E1C7F_F927_1577_4198_6312219D9B09"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 172.54,
  "pitch": 0
 },
 "initialSequence": "this.sequence_EDA58E74_F927_148A_41E8_F469270343A5",
 "id": "camera_EDA5BE74_F927_148A_41ED_F27735CE681A"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -107.85,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_EDB1AE9D_F927_15BA_41C2_355C42C7284F"
},
{
 "class": "SlideInEffect",
 "duration": 400,
 "id": "effect_268FAF4D_310E_0075_4179_B2B3CFC7C47E",
 "from": "left",
 "easing": "quad_in"
},
{
 "label": "JALAN KELUAR",
 "hfovMin": "120%",
 "id": "panorama_1F044C6B_12FB_5FA3_41B2_6838DDBDC3BE",
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 5.65,
   "distance": 1,
   "backwardYaw": -7.46,
   "panorama": "this.panorama_1F140574_12F9_49BE_41A1_BBA26E292B88"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 177.72,
   "distance": 1,
   "backwardYaw": 72.15,
   "panorama": "this.panorama_2FBA9DCA_0FAB_C766_414D_827A2822C3FA"
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.overlay_0776C7D9_1338_C9B5_41A0_F3105E1C02B3",
  "this.overlay_074BEEB2_1338_BBF0_41B1_E1AF78551A2D"
 ],
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_1F044C6B_12FB_5FA3_41B2_6838DDBDC3BE_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_1F044C6B_12FB_5FA3_41B2_6838DDBDC3BE_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1F044C6B_12FB_5FA3_41B2_6838DDBDC3BE_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1F044C6B_12FB_5FA3_41B2_6838DDBDC3BE_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1F044C6B_12FB_5FA3_41B2_6838DDBDC3BE_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_1F044C6B_12FB_5FA3_41B2_6838DDBDC3BE_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1F044C6B_12FB_5FA3_41B2_6838DDBDC3BE_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1F044C6B_12FB_5FA3_41B2_6838DDBDC3BE_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1F044C6B_12FB_5FA3_41B2_6838DDBDC3BE_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_1F044C6B_12FB_5FA3_41B2_6838DDBDC3BE_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1F044C6B_12FB_5FA3_41B2_6838DDBDC3BE_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1F044C6B_12FB_5FA3_41B2_6838DDBDC3BE_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1F044C6B_12FB_5FA3_41B2_6838DDBDC3BE_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_1F044C6B_12FB_5FA3_41B2_6838DDBDC3BE_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1F044C6B_12FB_5FA3_41B2_6838DDBDC3BE_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1F044C6B_12FB_5FA3_41B2_6838DDBDC3BE_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1F044C6B_12FB_5FA3_41B2_6838DDBDC3BE_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1F044C6B_12FB_5FA3_41B2_6838DDBDC3BE_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_1F044C6B_12FB_5FA3_41B2_6838DDBDC3BE_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1F044C6B_12FB_5FA3_41B2_6838DDBDC3BE_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1F044C6B_12FB_5FA3_41B2_6838DDBDC3BE_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1F044C6B_12FB_5FA3_41B2_6838DDBDC3BE_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_1F044C6B_12FB_5FA3_41B2_6838DDBDC3BE_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1F044C6B_12FB_5FA3_41B2_6838DDBDC3BE_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1F044C6B_12FB_5FA3_41B2_6838DDBDC3BE_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_1F044C6B_12FB_5FA3_41B2_6838DDBDC3BE_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_1F140574_12F9_49BE_41A1_BBA26E292B88",
   "camera": "this.panorama_1F140574_12F9_49BE_41A1_BBA26E292B88_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_375CA3CB_272B_B698_418A_27B1A3767B14",
   "camera": "this.panorama_375CA3CB_272B_B698_418A_27B1A3767B14_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_2DF0ED7C_0FAF_4722_4197_CF60E74696F9",
   "camera": "this.panorama_2DF0ED7C_0FAF_4722_4197_CF60E74696F9_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_2F299F25_0FAB_4322_41A4_7E7C91C19BB3",
   "camera": "this.panorama_2F299F25_0FAB_4322_41A4_7E7C91C19BB3_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_2FBABA98_0FAB_4DE2_41A4_F41F4C69A336",
   "camera": "this.panorama_2FBABA98_0FAB_4DE2_41A4_F41F4C69A336_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_2F4DB3F5_0FAB_4323_41A1_9616D3077287",
   "camera": "this.panorama_2F4DB3F5_0FAB_4323_41A1_9616D3077287_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_2FBA4CAA_0FAB_4526_419C_1A01B06BA5F2",
   "camera": "this.panorama_2FBA4CAA_0FAB_4526_419C_1A01B06BA5F2_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_2F4B9540_0FAB_C762_41AD_692E126E6290",
   "camera": "this.panorama_2F4B9540_0FAB_C762_41AD_692E126E6290_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_2FBA9DCA_0FAB_C766_414D_827A2822C3FA",
   "camera": "this.panorama_2FBA9DCA_0FAB_C766_414D_827A2822C3FA_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_2F64D6C9_0FAB_C562_419D_D1F42B2FF9F0",
   "camera": "this.panorama_2F64D6C9_0FAB_C562_419D_D1F42B2FF9F0_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_2FBABF32_0FAB_C326_41A6_6E5201897A35",
   "camera": "this.panorama_2FBABF32_0FAB_C326_41A6_6E5201897A35_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_1F044C6B_12FB_5FA3_41B2_6838DDBDC3BE",
   "camera": "this.panorama_1F044C6B_12FB_5FA3_41B2_6838DDBDC3BE_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_1C8531AD_12F9_495A_4190_01D89A3CAF80",
   "camera": "this.panorama_1C8531AD_12F9_495A_4190_01D89A3CAF80_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_0C2A3A6E_1A48_C020_41B6_F7DB48EAA229",
   "camera": "this.panorama_0C2A3A6E_1A48_C020_41B6_F7DB48EAA229_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_0C2110F6_1A48_C021_4194_3180B6EBF789",
   "camera": "this.panorama_0C2110F6_1A48_C021_4194_3180B6EBF789_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_00B9BDF2_1A79_4020_41B8_B948F9596DC6",
   "camera": "this.panorama_00B9BDF2_1A79_4020_41B8_B948F9596DC6_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "VideoPlayListItem",
   "media": "this.video_0A0AF181_1E39_98C3_41BA_F85DA1E1A464",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 16, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 16)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "class": "VideoPlayListItem",
   "media": "this.video_0C4AF30A_1E38_99C1_4196_B3BC446ECE8D",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 17, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 17)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "class": "VideoPlayListItem",
   "media": "this.video_0CB062C3_1E08_9840_41B9_D1B87E9753E3",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 18, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 18)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "class": "VideoPlayListItem",
   "media": "this.video_0DFB5DD1_1E09_8843_41A1_10DAC293F48B",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 19, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 19)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "class": "VideoPlayListItem",
   "media": "this.video_0DF957D6_1E08_7841_41B3_2303FFD76BF5",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 20, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 20)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "class": "VideoPlayListItem",
   "media": "this.video_0AE736B3_1E09_F8C0_41B3_47EC6C0808B4",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 21, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 21)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "class": "VideoPlayListItem",
   "media": "this.video_056FE6F0_1E08_B840_41B1_ECF170B30E18",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 22, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 22)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerVideoPlayer"
  },
  {
   "class": "PhotoAlbumPlayListItem",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 0)",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "media": "this.album_263A3B3A_326A_DD7A_41A4_88CAA612E6D9"
  }
 ],
 "id": "mainPlayList"
},
{
 "to": "left",
 "class": "SlideOutEffect",
 "duration": 400,
 "id": "effect_037E9E92_1E09_88C1_41B1_11041AE50781",
 "easing": "quad_in"
},
{
 "class": "Photo",
 "duration": 5000,
 "id": "album_263A3B3A_326A_DD7A_41A4_88CAA612E6D9_0",
 "width": 1245,
 "label": "info klas",
 "image": {
  "levels": [
   {
    "url": "media/album_263A3B3A_326A_DD7A_41A4_88CAA612E6D9_0.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "thumbnailUrl": "media/album_263A3B3A_326A_DD7A_41A4_88CAA612E6D9_0_t.png",
 "height": 1761
},
{
 "to": "left",
 "class": "SlideOutEffect",
 "duration": 400,
 "id": "effect_F7B8D586_F8EB_2B04_41CA_003F7635BB63",
 "easing": "quad_in"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_0C2110F6_1A48_C021_4194_3180B6EBF789_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -7.03,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_EAFEFD40_F927_1489_41E6_5E7D67A706AB"
},
{
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "id": "window_27688FAC_3275_B51D_41C4_794B7A1400A6",
 "horizontalAlign": "center",
 "width": 400,
 "backgroundOpacity": 1,
 "closeButtonIconHeight": 12,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "overflow": "scroll",
 "titleFontColor": "#000000",
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "titlePaddingRight": 5,
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "minHeight": 20,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "modal": true,
 "propagateClick": false,
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [],
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "height": 600,
 "title": "",
 "borderSize": 0,
 "headerPaddingLeft": 10,
 "titleFontStyle": "normal",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "class": "Window",
 "headerPaddingRight": 10,
 "backgroundColorDirection": "vertical",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerHeight": 5,
 "scrollBarColor": "#000000",
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 3,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "children": [
  "this.htmlText_2766CFB1_3275_B507_41C4_C21FA8C253AA",
  "this.image_uidEA944C8B_F927_159F_41D5_E7F7E4CDE54B_1"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "closeButtonBorderRadius": 11,
 "shadowOpacity": 0.5,
 "titleFontSize": "1.29vmin",
 "shadowVerticalLength": 0,
 "bodyBackgroundColorDirection": "vertical",
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "backgroundColorRatios": [],
 "headerPaddingBottom": 10,
 "borderRadius": 5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "layout": "vertical",
 "closeButtonIconWidth": 12,
 "titlePaddingLeft": 5,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "paddingBottom": 0,
 "paddingTop": 0,
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 5,
 "bodyPaddingRight": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "headerBackgroundColorDirection": "vertical",
 "data": {
  "name": "Window25319"
 },
 "titleFontFamily": "Arial",
 "closeButtonBackgroundColor": [],
 "shadowSpread": 1
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -174.35,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_EAB94CCA_F927_159E_41DF_6C02F34E1B65"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 90.54,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_EAEB5D26_F927_1489_41BC_5B03255177F3"
},
{
 "class": "Photo",
 "duration": 5000,
 "id": "photo_271C612E_326E_CD1A_419D_DF4435DB7F40",
 "width": 1245,
 "label": "info laboratorium hadware dan jaringan",
 "image": {
  "levels": [
   {
    "url": "media/photo_271C612E_326E_CD1A_419D_DF4435DB7F40.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "thumbnailUrl": "media/photo_271C612E_326E_CD1A_419D_DF4435DB7F40_t.png",
 "height": 1761
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": "this.sequence_10073166_1D31_2FD1_41A8_FE78ECA3E574",
 "id": "panorama_2F4DB3F5_0FAB_4323_41A1_9616D3077287_camera"
},
{
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "id": "window_26EC1866_327F_BB0D_41C5_6EEC4C2B7887",
 "horizontalAlign": "center",
 "width": 400,
 "backgroundOpacity": 1,
 "closeButtonIconHeight": 12,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "overflow": "scroll",
 "titleFontColor": "#000000",
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "titlePaddingRight": 5,
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "minHeight": 20,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "modal": true,
 "propagateClick": false,
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [],
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "height": 600,
 "title": "",
 "borderSize": 0,
 "headerPaddingLeft": 10,
 "titleFontStyle": "normal",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "class": "Window",
 "headerPaddingRight": 10,
 "backgroundColorDirection": "vertical",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerHeight": 5,
 "scrollBarColor": "#000000",
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 3,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "children": [
  "this.htmlText_26EDE866_327F_BB0D_41C5_58EB7963FA16",
  "this.viewer_uidEA91CC7F_F927_1577_41DA_7757C0934805"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "closeButtonBorderRadius": 11,
 "shadowOpacity": 0.5,
 "titleFontSize": "1.29vmin",
 "shadowVerticalLength": 0,
 "bodyBackgroundColorDirection": "vertical",
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "backgroundColorRatios": [],
 "headerPaddingBottom": 10,
 "borderRadius": 5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "layout": "vertical",
 "closeButtonIconWidth": 12,
 "titlePaddingLeft": 5,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "closeButtonIconColor": "#000000",
 "close": "this.playList_EA8E1C7F_F927_1577_4198_6312219D9B09.set('selectedIndex', -1);",
 "bodyPaddingBottom": 5,
 "bodyPaddingRight": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "headerBackgroundColorDirection": "vertical",
 "data": {
  "name": "Window17873"
 },
 "titleFontFamily": "Arial",
 "closeButtonBackgroundColor": [],
 "shadowSpread": 1
},
{
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "mouseControlMode": "drag_acceleration"
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "VideoPlayListItem",
   "media": "this.video_0AE736B3_1E09_F8C0_41B3_47EC6C0808B4",
   "start": "this.viewer_uidEA929C88_F927_1599_41C7_868EB8DDA181VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_EA92BC88_F927_1599_41E7_CF0FF8B31D0E, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_EA92BC88_F927_1599_41E7_CF0FF8B31D0E, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uidEA929C88_F927_1599_41C7_868EB8DDA181VideoPlayer)",
   "player": "this.viewer_uidEA929C88_F927_1599_41C7_868EB8DDA181VideoPlayer"
  }
 ],
 "id": "playList_EA92BC88_F927_1599_41E7_CF0FF8B31D0E"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 80.11,
  "pitch": 0
 },
 "id": "camera_ED4C5D9C_F927_17B9_41EE_64DF7A563832"
},
{
 "label": "LORONG KELAS 2",
 "hfovMin": "120%",
 "id": "panorama_2F299F25_0FAB_4322_41A4_7E7C91C19BB3",
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 179.95,
   "distance": 1,
   "backwardYaw": -1.39,
   "panorama": "this.panorama_2FBABA98_0FAB_4DE2_41A4_F41F4C69A336"
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.overlay_06629F76_1372_A359_41A1_E75F9A9D2FDA"
 ],
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_2F299F25_0FAB_4322_41A4_7E7C91C19BB3_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2F299F25_0FAB_4322_41A4_7E7C91C19BB3_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2F299F25_0FAB_4322_41A4_7E7C91C19BB3_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2F299F25_0FAB_4322_41A4_7E7C91C19BB3_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_2F299F25_0FAB_4322_41A4_7E7C91C19BB3_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2F299F25_0FAB_4322_41A4_7E7C91C19BB3_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2F299F25_0FAB_4322_41A4_7E7C91C19BB3_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2F299F25_0FAB_4322_41A4_7E7C91C19BB3_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2F299F25_0FAB_4322_41A4_7E7C91C19BB3_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2F299F25_0FAB_4322_41A4_7E7C91C19BB3_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2F299F25_0FAB_4322_41A4_7E7C91C19BB3_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2F299F25_0FAB_4322_41A4_7E7C91C19BB3_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2F299F25_0FAB_4322_41A4_7E7C91C19BB3_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2F299F25_0FAB_4322_41A4_7E7C91C19BB3_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2F299F25_0FAB_4322_41A4_7E7C91C19BB3_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2F299F25_0FAB_4322_41A4_7E7C91C19BB3_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_2F299F25_0FAB_4322_41A4_7E7C91C19BB3_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2F299F25_0FAB_4322_41A4_7E7C91C19BB3_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2F299F25_0FAB_4322_41A4_7E7C91C19BB3_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2F299F25_0FAB_4322_41A4_7E7C91C19BB3_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2F299F25_0FAB_4322_41A4_7E7C91C19BB3_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_2F299F25_0FAB_4322_41A4_7E7C91C19BB3_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2F299F25_0FAB_4322_41A4_7E7C91C19BB3_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2F299F25_0FAB_4322_41A4_7E7C91C19BB3_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2F299F25_0FAB_4322_41A4_7E7C91C19BB3_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_2F299F25_0FAB_4322_41A4_7E7C91C19BB3_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "class": "VideoPlayer",
 "viewerArea": "this.MainViewer",
 "id": "MainViewerVideoPlayer",
 "displayPlaybackBar": true
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_00B9BDF2_1A79_4020_41B8_B948F9596DC6_camera"
},
{
 "to": "left",
 "class": "SlideOutEffect",
 "duration": 400,
 "id": "effect_02C3A1C9_1E0B_9843_41AD_65C471B904F2",
 "easing": "quad_in"
},
{
 "label": "LAB KOMPUTER DASAR",
 "hfovMin": "120%",
 "id": "panorama_2F64D6C9_0FAB_C562_419D_D1F42B2FF9F0",
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 85.39,
   "distance": 1,
   "backwardYaw": -10.2,
   "panorama": "this.panorama_2FBA4CAA_0FAB_4526_419C_1A01B06BA5F2"
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.overlay_07B6FCC3_1371_E540_419B_18F7F6AF2238",
  "this.overlay_27A96E6F_327A_B71B_41A8_16319F7D75C3",
  "this.overlay_26474EE5_327A_570F_41B3_1F8490478EE8",
  "this.overlay_2196272F_327B_D51A_41A9_73112761B40C"
 ],
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_2F64D6C9_0FAB_C562_419D_D1F42B2FF9F0_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2F64D6C9_0FAB_C562_419D_D1F42B2FF9F0_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2F64D6C9_0FAB_C562_419D_D1F42B2FF9F0_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2F64D6C9_0FAB_C562_419D_D1F42B2FF9F0_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_2F64D6C9_0FAB_C562_419D_D1F42B2FF9F0_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2F64D6C9_0FAB_C562_419D_D1F42B2FF9F0_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2F64D6C9_0FAB_C562_419D_D1F42B2FF9F0_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2F64D6C9_0FAB_C562_419D_D1F42B2FF9F0_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2F64D6C9_0FAB_C562_419D_D1F42B2FF9F0_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2F64D6C9_0FAB_C562_419D_D1F42B2FF9F0_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2F64D6C9_0FAB_C562_419D_D1F42B2FF9F0_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2F64D6C9_0FAB_C562_419D_D1F42B2FF9F0_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2F64D6C9_0FAB_C562_419D_D1F42B2FF9F0_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2F64D6C9_0FAB_C562_419D_D1F42B2FF9F0_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2F64D6C9_0FAB_C562_419D_D1F42B2FF9F0_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2F64D6C9_0FAB_C562_419D_D1F42B2FF9F0_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_2F64D6C9_0FAB_C562_419D_D1F42B2FF9F0_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2F64D6C9_0FAB_C562_419D_D1F42B2FF9F0_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2F64D6C9_0FAB_C562_419D_D1F42B2FF9F0_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2F64D6C9_0FAB_C562_419D_D1F42B2FF9F0_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2F64D6C9_0FAB_C562_419D_D1F42B2FF9F0_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_2F64D6C9_0FAB_C562_419D_D1F42B2FF9F0_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2F64D6C9_0FAB_C562_419D_D1F42B2FF9F0_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2F64D6C9_0FAB_C562_419D_D1F42B2FF9F0_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2F64D6C9_0FAB_C562_419D_D1F42B2FF9F0_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_2F64D6C9_0FAB_C562_419D_D1F42B2FF9F0_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "class": "Video",
 "label": "vid lab jk",
 "scaleMode": "fit_inside",
 "width": 1080,
 "thumbnailUrl": "media/video_0DF957D6_1E08_7841_41B3_2303FFD76BF5_t.jpg",
 "loop": false,
 "id": "video_0DF957D6_1E08_7841_41B3_2303FFD76BF5",
 "height": 1080,
 "video": {
  "width": 1080,
  "class": "VideoResource",
  "mp4Url": "media/video_0DF957D6_1E08_7841_41B3_2303FFD76BF5.mp4",
  "height": 1080
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -94.61,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_ED407D8F_F927_1796_41D7_3B5689C8AE28"
},
{
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "id": "window_26D0EBD9_327A_5D07_41AB_F8077DF38DE5",
 "horizontalAlign": "center",
 "width": 400,
 "backgroundOpacity": 1,
 "closeButtonIconHeight": 12,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "overflow": "scroll",
 "titleFontColor": "#000000",
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "titlePaddingRight": 5,
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "minHeight": 20,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "modal": true,
 "propagateClick": false,
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [],
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "height": 600,
 "title": "",
 "borderSize": 0,
 "headerPaddingLeft": 10,
 "titleFontStyle": "normal",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "class": "Window",
 "headerPaddingRight": 10,
 "backgroundColorDirection": "vertical",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerHeight": 5,
 "scrollBarColor": "#000000",
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 3,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "children": [
  "this.htmlText_26D2ABD9_327A_5D07_41B5_FDBAFC161370",
  "this.viewer_uidEA94CC8A_F927_1599_41C1_BDB7C069CE4C"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "closeButtonBorderRadius": 11,
 "shadowOpacity": 0.5,
 "titleFontSize": "1.29vmin",
 "shadowVerticalLength": 0,
 "bodyBackgroundColorDirection": "vertical",
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "backgroundColorRatios": [],
 "headerPaddingBottom": 10,
 "borderRadius": 5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "layout": "vertical",
 "closeButtonIconWidth": 12,
 "titlePaddingLeft": 5,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "closeButtonIconColor": "#000000",
 "close": "this.playList_EA951C8A_F927_1599_41E2_575CD7FA0248.set('selectedIndex', -1);",
 "bodyPaddingBottom": 5,
 "bodyPaddingRight": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "headerBackgroundColorDirection": "vertical",
 "data": {
  "name": "Window21225"
 },
 "titleFontFamily": "Arial",
 "closeButtonBackgroundColor": [],
 "shadowSpread": 1
},
{
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "id": "window_27118875_326A_7B0F_419F_325FA5B0A7A0",
 "horizontalAlign": "center",
 "width": 400,
 "backgroundOpacity": 1,
 "closeButtonIconHeight": 12,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "overflow": "scroll",
 "titleFontColor": "#000000",
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "titlePaddingRight": 5,
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "minHeight": 20,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "modal": true,
 "propagateClick": false,
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [],
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "height": 600,
 "title": "",
 "borderSize": 0,
 "headerPaddingLeft": 10,
 "titleFontStyle": "normal",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "class": "Window",
 "headerPaddingRight": 10,
 "backgroundColorDirection": "vertical",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerHeight": 5,
 "scrollBarColor": "#000000",
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 3,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "children": [
  "this.htmlText_27134876_326A_7B0D_41B3_8500D07715B3",
  "this.viewer_uidEA946C8B_F927_159F_41D1_3809CFA73525"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "closeButtonBorderRadius": 11,
 "shadowOpacity": 0.5,
 "titleFontSize": "1.29vmin",
 "shadowVerticalLength": 0,
 "bodyBackgroundColorDirection": "vertical",
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "backgroundColorRatios": [],
 "headerPaddingBottom": 10,
 "borderRadius": 5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "layout": "vertical",
 "closeButtonIconWidth": 12,
 "titlePaddingLeft": 5,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "closeButtonIconColor": "#000000",
 "close": "this.playList_EA948C8B_F927_159F_4173_30E9595C015A.set('selectedIndex', -1);",
 "bodyPaddingBottom": 5,
 "bodyPaddingRight": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "headerBackgroundColorDirection": "vertical",
 "data": {
  "name": "Window27693"
 },
 "titleFontFamily": "Arial",
 "closeButtonBackgroundColor": [],
 "shadowSpread": 1
},
{
 "label": "LUAR PRODI",
 "hfovMin": "120%",
 "id": "panorama_2FBA9DCA_0FAB_C766_414D_827A2822C3FA",
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 72.15,
   "distance": 1,
   "backwardYaw": 177.72,
   "panorama": "this.panorama_1F044C6B_12FB_5FA3_41B2_6838DDBDC3BE"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -22.76,
   "distance": 1,
   "backwardYaw": 172.97,
   "panorama": "this.panorama_375CA3CB_272B_B698_418A_27B1A3767B14"
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.overlay_0B4592FA_133B_CB79_41A4_6DE3F7A335C2",
  "this.overlay_04E0D622_134E_A4EF_41B3_4BCC9B5E62D9"
 ],
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_2FBA9DCA_0FAB_C766_414D_827A2822C3FA_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2FBA9DCA_0FAB_C766_414D_827A2822C3FA_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2FBA9DCA_0FAB_C766_414D_827A2822C3FA_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2FBA9DCA_0FAB_C766_414D_827A2822C3FA_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_2FBA9DCA_0FAB_C766_414D_827A2822C3FA_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2FBA9DCA_0FAB_C766_414D_827A2822C3FA_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2FBA9DCA_0FAB_C766_414D_827A2822C3FA_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2FBA9DCA_0FAB_C766_414D_827A2822C3FA_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2FBA9DCA_0FAB_C766_414D_827A2822C3FA_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2FBA9DCA_0FAB_C766_414D_827A2822C3FA_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2FBA9DCA_0FAB_C766_414D_827A2822C3FA_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2FBA9DCA_0FAB_C766_414D_827A2822C3FA_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2FBA9DCA_0FAB_C766_414D_827A2822C3FA_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2FBA9DCA_0FAB_C766_414D_827A2822C3FA_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2FBA9DCA_0FAB_C766_414D_827A2822C3FA_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2FBA9DCA_0FAB_C766_414D_827A2822C3FA_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_2FBA9DCA_0FAB_C766_414D_827A2822C3FA_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2FBA9DCA_0FAB_C766_414D_827A2822C3FA_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2FBA9DCA_0FAB_C766_414D_827A2822C3FA_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2FBA9DCA_0FAB_C766_414D_827A2822C3FA_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2FBA9DCA_0FAB_C766_414D_827A2822C3FA_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_2FBA9DCA_0FAB_C766_414D_827A2822C3FA_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2FBA9DCA_0FAB_C766_414D_827A2822C3FA_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2FBA9DCA_0FAB_C766_414D_827A2822C3FA_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2FBA9DCA_0FAB_C766_414D_827A2822C3FA_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_2FBA9DCA_0FAB_C766_414D_827A2822C3FA_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "class": "SlideInEffect",
 "duration": 400,
 "id": "effect_49B5BB1B_570B_6EC6_41BA_9E76A2F95A16",
 "from": "left",
 "easing": "quad_in"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -92.4,
  "pitch": 0
 },
 "initialSequence": "this.sequence_ED34AD82_F927_178E_41EE_7B0C1C7C12AA",
 "id": "camera_ED34CD82_F927_178E_41DB_E2AA3B8EB140"
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "VideoPlayListItem",
   "media": "this.video_0CB062C3_1E08_9840_41B9_D1B87E9753E3",
   "start": "this.viewer_uidEA903C85_F927_158B_41D9_DDAE8015AFD2VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_EA904C85_F927_158B_41E7_5D8F96746DD4, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_EA904C85_F927_158B_41E7_5D8F96746DD4, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uidEA903C85_F927_158B_41D9_DDAE8015AFD2VideoPlayer)",
   "player": "this.viewer_uidEA903C85_F927_158B_41D9_DDAE8015AFD2VideoPlayer"
  }
 ],
 "id": "playList_EA904C85_F927_158B_41E7_5D8F96746DD4"
},
{
 "to": "left",
 "class": "SlideOutEffect",
 "duration": 400,
 "id": "effect_03089C40_1E09_8841_41A0_169B9C5C5955",
 "easing": "quad_in"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": "this.sequence_EDD466CB_F8E5_759E_41E4_5CE2F7C9CABA",
 "id": "panorama_1F140574_12F9_49BE_41A1_BBA26E292B88_camera"
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "VideoPlayListItem",
   "media": "this.video_0A0AF181_1E39_98C3_41BA_F85DA1E1A464",
   "start": "this.viewer_uidEA911C80_F927_1589_41E5_A0763E464D6CVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_EA912C80_F927_1589_41BA_F8A57CF852AD, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_EA912C80_F927_1589_41BA_F8A57CF852AD, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uidEA911C80_F927_1589_41E5_A0763E464D6CVideoPlayer)",
   "player": "this.viewer_uidEA911C80_F927_1589_41E5_A0763E464D6CVideoPlayer"
  }
 ],
 "id": "playList_EA912C80_F927_1589_41BA_F8A57CF852AD"
},
{
 "label": "LAB IOT",
 "hfovMin": "150%",
 "id": "panorama_00B9BDF2_1A79_4020_41B8_B948F9596DC6",
 "partial": true,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -10.52,
   "distance": 1,
   "backwardYaw": 9.74,
   "panorama": "this.panorama_0C2A3A6E_1A48_C020_41B6_F7DB48EAA229"
  }
 ],
 "hfov": 30,
 "overlays": [
  "this.overlay_01839AD4_1AB8_C060_4188_5D0B6E784526"
 ],
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_00B9BDF2_1A79_4020_41B8_B948F9596DC6_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_00B9BDF2_1A79_4020_41B8_B948F9596DC6_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 35,
      "width": 17920,
      "tags": "ondemand",
      "rowCount": 35,
      "height": 17920
     },
     {
      "url": "media/panorama_00B9BDF2_1A79_4020_41B8_B948F9596DC6_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 18,
      "width": 9216,
      "tags": "ondemand",
      "rowCount": 18,
      "height": 9216
     },
     {
      "url": "media/panorama_00B9BDF2_1A79_4020_41B8_B948F9596DC6_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 9,
      "width": 4608,
      "tags": "ondemand",
      "rowCount": 9,
      "height": 4608
     },
     {
      "url": "media/panorama_00B9BDF2_1A79_4020_41B8_B948F9596DC6_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_00B9BDF2_1A79_4020_41B8_B948F9596DC6_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_00B9BDF2_1A79_4020_41B8_B948F9596DC6_0/f/5/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_00B9BDF2_1A79_4020_41B8_B948F9596DC6_0/f/6/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 22.5,
 "thumbnailUrl": "media/panorama_00B9BDF2_1A79_4020_41B8_B948F9596DC6_t.jpg",
 "hfovMax": 30,
 "pitch": 0
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_1F044C6B_12FB_5FA3_41B2_6838DDBDC3BE_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 8.16,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_EAD2ECFF_F927_1576_41E8_AE392238AD95"
},
{
 "class": "PhotoAlbumPlayer",
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPhotoAlbumPlayer"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_2FBA4CAA_0FAB_4526_419C_1A01B06BA5F2_camera"
},
{
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "id": "window_20C4FD88_326A_7505_419F_79034A0F7ADF",
 "horizontalAlign": "center",
 "width": 400,
 "backgroundOpacity": 1,
 "closeButtonIconHeight": 12,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "overflow": "scroll",
 "titleFontColor": "#000000",
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "titlePaddingRight": 5,
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "minHeight": 20,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "modal": true,
 "propagateClick": false,
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [],
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "height": 600,
 "title": "",
 "borderSize": 0,
 "headerPaddingLeft": 10,
 "titleFontStyle": "normal",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "class": "Window",
 "headerPaddingRight": 10,
 "backgroundColorDirection": "vertical",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerHeight": 5,
 "scrollBarColor": "#000000",
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 3,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "children": [
  "this.htmlText_20C6BD88_326A_7505_41C4_F974589820DD",
  "this.viewer_uidEA90AC81_F927_158B_41ED_2CDD87E9165C"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "closeButtonBorderRadius": 11,
 "shadowOpacity": 0.5,
 "titleFontSize": "1.29vmin",
 "shadowVerticalLength": 0,
 "bodyBackgroundColorDirection": "vertical",
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "backgroundColorRatios": [],
 "headerPaddingBottom": 10,
 "borderRadius": 5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "layout": "vertical",
 "closeButtonIconWidth": 12,
 "titlePaddingLeft": 5,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "closeButtonIconColor": "#000000",
 "close": "this.playList_EA90CC81_F927_158B_41DA_6C0F3A711494.set('selectedIndex', -1);",
 "bodyPaddingBottom": 5,
 "bodyPaddingRight": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "headerBackgroundColorDirection": "vertical",
 "data": {
  "name": "Window8633"
 },
 "titleFontFamily": "Arial",
 "closeButtonBackgroundColor": [],
 "shadowSpread": 1
},
{
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "id": "window_2189016D_326A_4D1F_41A1_D8DE739525E2",
 "horizontalAlign": "center",
 "width": 400,
 "backgroundOpacity": 1,
 "closeButtonIconHeight": 12,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "overflow": "scroll",
 "titleFontColor": "#000000",
 "titlePaddingTop": 5,
 "footerBackgroundColorDirection": "vertical",
 "headerBorderSize": 0,
 "titlePaddingRight": 5,
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "minHeight": 20,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "modal": true,
 "propagateClick": false,
 "verticalAlign": "middle",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "headerBorderColor": "#000000",
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [],
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titleFontWeight": "normal",
 "minWidth": 20,
 "height": 600,
 "title": "",
 "borderSize": 0,
 "headerPaddingLeft": 10,
 "titleFontStyle": "normal",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "class": "Window",
 "headerPaddingRight": 10,
 "backgroundColorDirection": "vertical",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "footerHeight": 5,
 "scrollBarColor": "#000000",
 "headerBackgroundOpacity": 1,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "shadowHorizontalLength": 3,
 "shadow": true,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "titleTextDecoration": "none",
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "children": [
  "this.htmlText_218BF16D_326A_4D1F_41BE_184BCC98D8E6",
  "this.viewer_uidEA903C85_F927_158B_41D9_DDAE8015AFD2"
 ],
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "shadowBlurRadius": 6,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "paddingRight": 0,
 "closeButtonBorderRadius": 11,
 "shadowOpacity": 0.5,
 "titleFontSize": "1.29vmin",
 "shadowVerticalLength": 0,
 "bodyBackgroundColorDirection": "vertical",
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "backgroundColorRatios": [],
 "headerPaddingBottom": 10,
 "borderRadius": 5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "layout": "vertical",
 "closeButtonIconWidth": 12,
 "titlePaddingLeft": 5,
 "veilOpacity": 0.4,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "closeButtonIconColor": "#000000",
 "close": "this.playList_EA904C85_F927_158B_41E7_5D8F96746DD4.set('selectedIndex', -1);",
 "bodyPaddingBottom": 5,
 "bodyPaddingRight": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "headerBackgroundColorDirection": "vertical",
 "data": {
  "name": "Window11726"
 },
 "titleFontFamily": "Arial",
 "closeButtonBackgroundColor": [],
 "shadowSpread": 1
},
{
 "label": "PARKIRAN",
 "hfovMin": "120%",
 "id": "panorama_1F140574_12F9_49BE_41A1_BBA26E292B88",
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -7.46,
   "distance": 1,
   "backwardYaw": 5.65,
   "panorama": "this.panorama_1F044C6B_12FB_5FA3_41B2_6838DDBDC3BE"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 177.34,
   "distance": 1,
   "backwardYaw": 5.16,
   "panorama": "this.panorama_1C8531AD_12F9_495A_4190_01D89A3CAF80"
  }
 ],
 "hfov": 360,
 "overlays": [
  "this.overlay_00220FB9_1308_D9DB_4192_037C585BDFC8",
  "this.overlay_0B396774_1339_C966_41B0_62CDB4ED915E",
  "this.overlay_269835D7_3276_B50B_4197_9700A70A2A34",
  "this.overlay_276D7B11_3277_DD06_41C0_5FFF460B0DA2",
  "this.overlay_26B29943_3276_BD0B_41B5_877783AD5419"
 ],
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_1F140574_12F9_49BE_41A1_BBA26E292B88_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_1F140574_12F9_49BE_41A1_BBA26E292B88_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1F140574_12F9_49BE_41A1_BBA26E292B88_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1F140574_12F9_49BE_41A1_BBA26E292B88_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_1F140574_12F9_49BE_41A1_BBA26E292B88_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_1F140574_12F9_49BE_41A1_BBA26E292B88_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1F140574_12F9_49BE_41A1_BBA26E292B88_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1F140574_12F9_49BE_41A1_BBA26E292B88_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_1F140574_12F9_49BE_41A1_BBA26E292B88_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_1F140574_12F9_49BE_41A1_BBA26E292B88_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1F140574_12F9_49BE_41A1_BBA26E292B88_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1F140574_12F9_49BE_41A1_BBA26E292B88_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_1F140574_12F9_49BE_41A1_BBA26E292B88_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_1F140574_12F9_49BE_41A1_BBA26E292B88_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1F140574_12F9_49BE_41A1_BBA26E292B88_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1F140574_12F9_49BE_41A1_BBA26E292B88_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_1F140574_12F9_49BE_41A1_BBA26E292B88_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_1F140574_12F9_49BE_41A1_BBA26E292B88_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_1F140574_12F9_49BE_41A1_BBA26E292B88_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1F140574_12F9_49BE_41A1_BBA26E292B88_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1F140574_12F9_49BE_41A1_BBA26E292B88_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_1F140574_12F9_49BE_41A1_BBA26E292B88_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_1F140574_12F9_49BE_41A1_BBA26E292B88_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_1F140574_12F9_49BE_41A1_BBA26E292B88_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_1F140574_12F9_49BE_41A1_BBA26E292B88_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_1F140574_12F9_49BE_41A1_BBA26E292B88_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "class": "Photo",
 "duration": 5000,
 "id": "photo_2607CEBF_327E_577B_41B2_172D569A43B6",
 "width": 1245,
 "label": "informasi parkiran",
 "image": {
  "levels": [
   {
    "url": "media/photo_2607CEBF_327E_577B_41B2_172D569A43B6.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "thumbnailUrl": "media/photo_2607CEBF_327E_577B_41B2_172D569A43B6_t.png",
 "height": 1761
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -81.06,
  "pitch": 0
 },
 "initialSequence": "this.sequence_ED72CDDD_F927_17BB_41E3_4A32B3DACF0C",
 "id": "camera_ED72FDDD_F927_17BB_41C3_0EA2286D76C0"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -0.05,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_EDBEFEBA_F927_15FE_41C5_984B9392A41E"
},
{
 "id": "MainViewer",
 "left": 0,
 "playbackBarProgressBorderRadius": 0,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "width": "100%",
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "progressLeft": 0,
 "propagateClick": false,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "borderSize": 0,
 "toolTipFontColor": "#606060",
 "height": "100%",
 "toolTipBackgroundColor": "#FF0000",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "class": "ViewerArea",
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBottom": 0,
 "progressHeight": 0,
 "playbackBarHeadShadow": true,
 "playbackBarHeadShadowHorizontalLength": 0,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "transitionMode": "blending",
 "progressBorderSize": 0,
 "paddingRight": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "displayTooltipInTouchScreens": true,
 "progressBorderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "paddingBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "progressBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 5,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipFontSize": "12px",
 "toolTipOpacity": 0,
 "toolTipPaddingBottom": 4,
 "toolTipTextShadowBlurRadius": 3,
 "paddingTop": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "data": {
  "name": "Main Viewer"
 },
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6
},
{
 "verticalAlign": "top",
 "children": [
  "this.Container_13DB25DF_0F5D_471E_41A1_CCC80726E2DE",
  "this.Container_13D4E5DF_0F5D_471E_419C_8FFB8A90DE9B"
 ],
 "id": "Container_13D6F5E3_0F5D_4726_419A_51C2A588B974",
 "left": "0%",
 "width": 330,
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "propagateClick": false,
 "top": "0%",
 "height": "100%",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "--- LEFT PANEL 4 (Community)"
 },
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "fontFamily": "Bahnschrift Condensed",
 "textShadowBlurRadius": 3,
 "id": "Label_0BB4529A_19B9_C0E0_41B4_3A45B4A93DC8",
 "width": "9.56%",
 "backgroundOpacity": 0,
 "right": "16.11%",
 "textShadowColor": "#000000",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "text": "PARKIRAN",
 "minHeight": 1,
 "propagateClick": false,
 "top": "0.71%",
 "textShadowOpacity": 1,
 "height": "6.353%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "fontSize": "25px",
 "borderSize": 0,
 "paddingBottom": 0,
 "textShadowHorizontalLength": 1,
 "fontStyle": "normal",
 "paddingTop": 0,
 "class": "Label",
 "fontColor": "#CCCCCC",
 "textShadowVerticalLength": 1,
 "shadow": false,
 "visible": false,
 "horizontalAlign": "center",
 "data": {
  "name": "Label5145"
 },
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Bahnschrift Condensed",
 "textShadowBlurRadius": 3,
 "id": "Label_0B01F180_19C7_40E0_41B7_0393C88A3E1B",
 "width": "5.95%",
 "backgroundOpacity": 0,
 "right": "16.23%",
 "textShadowColor": "#000000",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "text": "PRODI",
 "minHeight": 1,
 "propagateClick": false,
 "top": "1.96%",
 "textShadowOpacity": 1,
 "height": "3.812%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "fontSize": "25px",
 "borderSize": 0,
 "paddingBottom": 0,
 "textShadowHorizontalLength": 1,
 "fontStyle": "normal",
 "paddingTop": 0,
 "class": "Label",
 "fontColor": "#CCCCCC",
 "textShadowVerticalLength": 1,
 "shadow": false,
 "visible": false,
 "horizontalAlign": "center",
 "data": {
  "name": "Label11395"
 },
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Bahnschrift Condensed",
 "textShadowBlurRadius": 3,
 "id": "Label_0B634445_19CB_4060_41B8_EDD3964C9744",
 "width": "7.08%",
 "backgroundOpacity": 0,
 "right": "15.68%",
 "textShadowColor": "#000000",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "text": "KELAS",
 "minHeight": 1,
 "propagateClick": false,
 "top": "1.93%",
 "textShadowOpacity": 1,
 "height": "3.812%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "fontSize": "25px",
 "borderSize": 0,
 "paddingBottom": 0,
 "textShadowHorizontalLength": 1,
 "fontStyle": "normal",
 "paddingTop": 0,
 "class": "Label",
 "fontColor": "#CCCCCC",
 "textShadowVerticalLength": 1,
 "shadow": false,
 "visible": false,
 "horizontalAlign": "center",
 "data": {
  "name": "Label13626"
 },
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Bahnschrift Condensed",
 "textShadowBlurRadius": 3,
 "id": "Label_0DAA94A1_19FB_4020_41AC_FD8C7A105B27",
 "width": "20.738%",
 "backgroundOpacity": 0,
 "right": "16.26%",
 "textShadowColor": "#000000",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "text": "LAB KOMPUTER DASAR",
 "minHeight": 1,
 "propagateClick": false,
 "top": "1.96%",
 "textShadowOpacity": 1,
 "height": "3.812%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "fontSize": "25px",
 "borderSize": 0,
 "paddingBottom": 0,
 "textShadowHorizontalLength": 1,
 "fontStyle": "normal",
 "paddingTop": 0,
 "class": "Label",
 "fontColor": "#CCCCCC",
 "textShadowVerticalLength": 1,
 "shadow": false,
 "visible": false,
 "horizontalAlign": "center",
 "data": {
  "name": "Label15668"
 },
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Bahnschrift Condensed",
 "textShadowBlurRadius": 3,
 "id": "Label_0A64507B_19CB_4020_41A4_0C7BF6B71113",
 "width": "21.915%",
 "backgroundOpacity": 0,
 "right": "16.36%",
 "textShadowColor": "#000000",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "text": "LAB KOMPUTER LANJUT",
 "minHeight": 1,
 "propagateClick": false,
 "top": "2.16%",
 "textShadowOpacity": 1,
 "height": "3.812%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "fontSize": "25px",
 "borderSize": 0,
 "paddingBottom": 0,
 "textShadowHorizontalLength": 1,
 "fontStyle": "normal",
 "paddingTop": 0,
 "class": "Label",
 "fontColor": "#CCCCCC",
 "textShadowVerticalLength": 1,
 "shadow": false,
 "visible": false,
 "horizontalAlign": "center",
 "data": {
  "name": "Label19891"
 },
 "fontWeight": "normal"
},
{
 "textDecoration": "none",
 "fontFamily": "Bahnschrift Condensed",
 "textShadowBlurRadius": 3,
 "id": "Label_00EBB067_1A49_C020_41AB_54606EFF722C",
 "width": "39.876%",
 "backgroundOpacity": 0,
 "right": "15.8%",
 "textShadowColor": "#000000",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "text": "LAB KOMPUTER HARDWARE DAN JARINGAN",
 "minHeight": 1,
 "propagateClick": false,
 "top": "2.05%",
 "textShadowOpacity": 1,
 "height": "3.812%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "fontSize": "25px",
 "borderSize": 0,
 "paddingBottom": 0,
 "textShadowHorizontalLength": 1,
 "fontStyle": "normal",
 "paddingTop": 0,
 "class": "Label",
 "fontColor": "#CCCCCC",
 "textShadowVerticalLength": 1,
 "shadow": false,
 "visible": false,
 "horizontalAlign": "center",
 "data": {
  "name": "Label46737"
 },
 "fontWeight": "normal"
},
{
 "id": "ThumbnailList_13597A7A_1D4B_FE0C_41B0_B45120DB2B4F",
 "left": "3.14%",
 "width": "70.529%",
 "backgroundOpacity": 0.2,
 "itemBorderRadius": 0,
 "itemVerticalAlign": "middle",
 "verticalAlign": "top",
 "itemPaddingLeft": 3,
 "paddingLeft": 20,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "propagateClick": false,
 "itemThumbnailShadowSpread": 1,
 "itemOpacity": 1,
 "itemThumbnailShadowVerticalLength": 3,
 "backgroundColor": [
  "#000000"
 ],
 "playList": "this.ThumbnailList_13597A7A_1D4B_FE0C_41B0_B45120DB2B4F_playlist",
 "minWidth": 1,
 "itemBackgroundColor": [],
 "itemThumbnailOpacity": 1,
 "borderSize": 0,
 "itemBackgroundColorRatios": [],
 "itemPaddingTop": 3,
 "itemPaddingRight": 3,
 "class": "ThumbnailList",
 "itemThumbnailShadowOpacity": 0.8,
 "scrollBarColor": "#FFFFFF",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "itemLabelTextDecoration": "none",
 "itemBackgroundOpacity": 0,
 "scrollBarOpacity": 0.5,
 "itemLabelFontWeight": "normal",
 "itemLabelGap": 5,
 "itemLabelFontSize": 14,
 "itemThumbnailHeight": 75,
 "paddingRight": 20,
 "borderRadius": 5,
 "itemThumbnailScaleMode": "fit_outside",
 "scrollBarVisible": "rollOver",
 "itemThumbnailShadow": true,
 "itemThumbnailShadowBlurRadius": 4,
 "itemBackgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0
 ],
 "itemLabelFontColor": "#FFFFFF",
 "itemThumbnailShadowHorizontalLength": 3,
 "bottom": "2.29%",
 "itemThumbnailWidth": 75,
 "layout": "horizontal",
 "gap": 10,
 "itemHorizontalAlign": "center",
 "paddingBottom": 10,
 "itemPaddingBottom": 3,
 "selectedItemLabelFontWeight": "bold",
 "itemThumbnailShadowColor": "#000000",
 "itemLabelFontStyle": "normal",
 "itemLabelHorizontalAlign": "center",
 "itemMode": "normal",
 "paddingTop": 10,
 "visible": false,
 "horizontalAlign": "left",
 "data": {
  "name": "ThumbnailList1355"
 },
 "itemThumbnailBorderRadius": 5,
 "itemLabelFontFamily": "Arial",
 "itemLabelPosition": "bottom"
},
{
 "maxHeight": 80,
 "maxWidth": 80,
 "id": "IconButton_120FFF40_1D4F_167C_419F_CC1AC516C6E2",
 "width": 32.15,
 "backgroundOpacity": 0,
 "right": "25.27%",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "bottom": "7.29%",
 "height": 40.05,
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "iconURL": "skin/IconButton_120FFF40_1D4F_167C_419F_CC1AC516C6E2.png",
 "click": "this.setComponentVisibility(this.ThumbnailList_13597A7A_1D4B_FE0C_41B0_B45120DB2B4F, false, 0, null, null, false); this.setComponentVisibility(this.IconButton_120FFF40_1D4F_167C_419F_CC1AC516C6E2, false, 0, null, null, false); this.setComponentVisibility(this.Container_13D585E0_0F5D_4722_41A7_E91504766093, true, 0, null, null, false)",
 "paddingTop": 0,
 "class": "IconButton",
 "transparencyActive": false,
 "shadow": false,
 "visible": false,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton4901"
 },
 "cursor": "hand"
},
{
 "id": "IconButton_2DBA8446_22D7_CF4E_41BA_D8ED6E688EEF",
 "left": "1.01%",
 "width": 34.4,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_2DBA8446_22D7_CF4E_41BA_D8ED6E688EEF_rollover.png",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "bottom": "4.69%",
 "height": 35.23,
 "minWidth": 0,
 "mode": "toggle",
 "borderSize": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_2DBA8446_22D7_CF4E_41BA_D8ED6E688EEF_pressed.png",
 "iconURL": "skin/IconButton_2DBA8446_22D7_CF4E_41BA_D8ED6E688EEF.png",
 "paddingTop": 0,
 "class": "IconButton",
 "transparencyActive": false,
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "Button40540"
 },
 "cursor": "hand"
},
{
 "class": "VideoPlayer",
 "viewerArea": "this.viewer_uidEA955C8A_F927_1599_41CD_B06EFA977B34",
 "id": "viewer_uidEA955C8A_F927_1599_41CD_B06EFA977B34VideoPlayer",
 "displayPlaybackBar": true
},
{
 "id": "htmlText_2493EAEB_3256_7F1B_41BD_0744024AE6D7",
 "width": "100%",
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "scrollBarMargin": 2,
 "height": "10%",
 "minWidth": 0,
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "paddingBottom": 10,
 "paddingTop": 10,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#000000",
 "shadow": false,
 "data": {
  "name": "HTMLText36854"
 },
 "scrollBarOpacity": 0.5
},
{
 "id": "image_uidEA934C86_F927_1589_41CB_5EB93B9CDF2D_1",
 "width": "100%",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "media/photo_57A72BC3_447A_8C42_41C6_368128ACFA34.png",
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": "89%",
 "minWidth": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Image",
 "scaleMode": "fit_inside",
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "Image9297"
 }
},
{
 "class": "VideoPlayer",
 "viewerArea": "this.viewer_uidEA94CC8A_F927_1599_41C1_BDB7C069CE4C",
 "id": "viewer_uidEA94CC8A_F927_1599_41C1_BDB7C069CE4CVideoPlayer",
 "displayPlaybackBar": true
},
{
 "class": "PhotoPlayList",
 "items": [
  {
   "class": "PhotoPlayListItem",
   "media": "this.album_263A3B3A_326A_DD7A_41A4_88CAA612E6D9_0",
   "camera": {
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "y": "0.50",
     "zoomFactor": 1
    },
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.41",
     "y": "0.47",
     "zoomFactor": 1.1
    },
    "duration": 5000,
    "scaleMode": "fit_outside",
    "easing": "linear"
   }
  }
 ],
 "id": "album_263A3B3A_326A_DD7A_41A4_88CAA612E6D9_AlbumPlayList"
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1F140574_12F9_49BE_41A1_BBA26E292B88, this.camera_EACADCF2_F927_158E_41D1_DD98F37FDF6F); this.mainPlayList.set('selectedIndex', 0); this.setComponentVisibility(this.Label_0BB4529A_19B9_C0E0_41B4_3A45B4A93DC8, true, 0, null, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 5.16,
   "hfov": 23.99,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1C8531AD_12F9_495A_4190_01D89A3CAF80_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.85
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_2CB60AE2_235D_BB8B_41B3_26F4B4DA3E60",
   "pitch": -19.85,
   "yaw": 5.16,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 23.99,
   "distance": 100
  }
 ],
 "id": "overlay_0023A382_130F_C916_41A3_323FE889F585",
 "data": {
  "label": "MENUJU LAPANGB "
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2FBABA98_0FAB_4DE2_41A4_F41F4C69A336, this.camera_EAD2ECFF_F927_1576_41E8_AE392238AD95); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -85.29,
   "hfov": 11.12,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1C8531AD_12F9_495A_4190_01D89A3CAF80_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_318252DA_237A_4408_41B1_673BC2A69BD2",
   "pitch": -7,
   "yaw": -85.29,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.12,
   "distance": 50
  }
 ],
 "id": "overlay_0BADDDD3_1309_D99C_41A3_33164FFEE44D",
 "data": {
  "label": "Arrow 06b Left-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2F4B9540_0FAB_C762_41AD_692E126E6290, this.camera_EAC4ACE5_F927_158B_41D5_B9EF4D74E6E5); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 79.76,
   "hfov": 10.31,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1C8531AD_12F9_495A_4190_01D89A3CAF80_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.15
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_3406A191_235A_C4C4_4183_2ABF4F665407",
   "pitch": -9.15,
   "yaw": 79.76,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.31,
   "distance": 100
  }
 ],
 "id": "overlay_07CD4102_1371_DCC2_4196_3EA32D19D1A9",
 "data": {
  "label": "Circle Point 01c"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2FBABA98_0FAB_4DE2_41A4_F41F4C69A336, this.camera_ED67FDB6_F927_17F6_41E7_D4CDE2AEBDF7); this.mainPlayList.set('selectedIndex', 4); this.setComponentVisibility(this.Label_0B634445_19CB_4060_41B8_EDD3964C9744, false, 0, null, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 153.15,
   "hfov": 3.93,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2DF0ED7C_0FAF_4722_4197_CF60E74696F9_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.45
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_05B03DA9_1351_E720_41B1_24E12CCDD72D",
   "pitch": 4.45,
   "yaw": 153.15,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.93,
   "distance": 100
  }
 ],
 "id": "overlay_0031E8CA_1331_AD64_416A_25345132BBF0",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_21D9E65A_326A_D705_4196_505F5148F9D6, null, false); this.playList_EA902C82_F927_1589_41D3_153AECD7523B.set('selectedIndex', 0); ",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.81,
   "hfov": 5.14,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2DF0ED7C_0FAF_4722_4197_CF60E74696F9_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.17
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_2530040D_3256_4B1E_41C4_7A9F187DFFF7",
   "pitch": 6.17,
   "yaw": -0.81,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.14,
   "distance": 100
  }
 ],
 "id": "overlay_20DF3387_326F_CD0B_4198_16D662874049",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_2672A932_326B_BD0A_41C8_70268101A61D, null, true); this.playList_EA932C84_F927_1589_41D5_70EA376E016E.set('selectedIndex', 0); ; this.viewer_uidEA931C84_F927_1589_41CB_31026B176D68VideoPlayer.play(); ",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 5.48,
   "hfov": 4.71,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2DF0ED7C_0FAF_4722_4197_CF60E74696F9_0_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.19
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_2528B411_3256_4B07_41C1_BCFB6CA7EBFB",
   "pitch": 6.19,
   "yaw": 5.48,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.71,
   "distance": 100
  }
 ],
 "id": "overlay_2167AF38_326E_5505_41B3_828DEC01DBC8",
 "data": {
  "label": "Info Red 08"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_2189016D_326A_4D1F_41A1_D8DE739525E2, null, true); this.playList_EA904C85_F927_158B_41E7_5D8F96746DD4.set('selectedIndex', 0); ; this.viewer_uidEA903C85_F927_158B_41D9_DDAE8015AFD2VideoPlayer.play(); ",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 5.48,
   "hfov": 2.84,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2DF0ED7C_0FAF_4722_4197_CF60E74696F9_0_HS_6_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 19
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.16
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 5.48,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2DF0ED7C_0FAF_4722_4197_CF60E74696F9_0_HS_6_0.png",
      "class": "ImageResourceLevel",
      "width": 69,
      "height": 85
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.16,
   "hfov": 2.84
  }
 ],
 "id": "overlay_21D3C20E_326A_4F1A_41AE_076A7BDAF776",
 "data": {
  "label": "Image"
 }
},
{
 "id": "htmlText_0E4F64DA_1DCD_6AB8_41B8_E3A1BAFB6241",
 "width": "100%",
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "scrollBarMargin": 2,
 "height": "10%",
 "minWidth": 0,
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "paddingBottom": 10,
 "paddingTop": 10,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#000000",
 "shadow": false,
 "data": {
  "name": "HTMLText28426"
 },
 "scrollBarOpacity": 0.5
},
{
 "id": "image_uidEA82DC7A_F927_1579_41EB_B8C48AFA20B0_1",
 "width": "100%",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "media/photo_52CB5A8E_447F_8CC2_41C9_E0B5A9ECC2ED.png",
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": "89%",
 "minWidth": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Image",
 "scaleMode": "fit_inside",
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "Image9281"
 }
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_EACAACF2_F927_158E_41D1_C6E53625B813",
 "restartMovementOnUserInteraction": false
},
{
 "class": "VideoPlayer",
 "viewerArea": "this.viewer_uidEA946C8B_F927_159F_41D1_3809CFA73525",
 "id": "viewer_uidEA946C8B_F927_159F_41D1_3809CFA73525VideoPlayer",
 "displayPlaybackBar": true
},
{
 "id": "htmlText_24CFC0F0_3256_4B05_41C5_FF31EEB04E58",
 "width": "100%",
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "scrollBarMargin": 2,
 "height": "10%",
 "minWidth": 0,
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "paddingBottom": 10,
 "paddingTop": 10,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#000000",
 "shadow": false,
 "data": {
  "name": "HTMLText35861"
 },
 "scrollBarOpacity": 0.5
},
{
 "id": "viewer_uidEA92FC87_F927_1597_41B5_9608D004E79C",
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "width": "100%",
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "progressLeft": 0,
 "propagateClick": false,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "borderSize": 0,
 "toolTipFontColor": "#606060",
 "height": "89%",
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "class": "ViewerArea",
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBottom": 2,
 "progressHeight": 0,
 "playbackBarHeadShadow": true,
 "playbackBarHeadShadowHorizontalLength": 0,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "transitionMode": "blending",
 "progressBorderSize": 0,
 "paddingRight": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "displayTooltipInTouchScreens": true,
 "progressBorderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "paddingBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "progressBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipFontSize": "1.11vmin",
 "toolTipOpacity": 1,
 "toolTipPaddingBottom": 4,
 "toolTipTextShadowBlurRadius": 3,
 "paddingTop": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "data": {
  "name": "ViewerArea9298"
 },
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal"
},
{
 "id": "htmlText_248AFDFC_3255_F4FD_41AE_6F965490E8D0",
 "width": "100%",
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "scrollBarMargin": 2,
 "height": "10%",
 "minWidth": 0,
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "paddingBottom": 10,
 "paddingTop": 10,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#000000",
 "shadow": false,
 "data": {
  "name": "HTMLText35057"
 },
 "scrollBarOpacity": 0.5
},
{
 "id": "viewer_uidEA929C88_F927_1599_41C7_868EB8DDA181",
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "width": "100%",
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "progressLeft": 0,
 "propagateClick": false,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "borderSize": 0,
 "toolTipFontColor": "#606060",
 "height": "89%",
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "class": "ViewerArea",
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBottom": 2,
 "progressHeight": 0,
 "playbackBarHeadShadow": true,
 "playbackBarHeadShadowHorizontalLength": 0,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "transitionMode": "blending",
 "progressBorderSize": 0,
 "paddingRight": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "displayTooltipInTouchScreens": true,
 "progressBorderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "paddingBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "progressBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipFontSize": "1.11vmin",
 "toolTipOpacity": 1,
 "toolTipPaddingBottom": 4,
 "toolTipTextShadowBlurRadius": 3,
 "paddingTop": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "data": {
  "name": "ViewerArea9299"
 },
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal"
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_034CA1E0_1332_5F39_4164_B2B001251D18",
 "restartMovementOnUserInteraction": false
},
{
 "class": "VideoPlayer",
 "viewerArea": "this.viewer_uidEA940C8E_F927_1599_41E8_16606E384E65",
 "id": "viewer_uidEA940C8E_F927_1599_41E8_16606E384E65VideoPlayer",
 "displayPlaybackBar": true
},
{
 "id": "htmlText_26727937_326B_BD0A_419A_F2BE724FE598",
 "width": "100%",
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "scrollBarMargin": 2,
 "height": "10%",
 "minWidth": 0,
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "paddingBottom": 10,
 "paddingTop": 10,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#000000",
 "shadow": false,
 "data": {
  "name": "HTMLText12533"
 },
 "scrollBarOpacity": 0.5
},
{
 "id": "viewer_uidEA931C84_F927_1589_41CB_31026B176D68",
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "width": "100%",
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "progressLeft": 0,
 "propagateClick": false,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "borderSize": 0,
 "toolTipFontColor": "#606060",
 "height": "89%",
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "class": "ViewerArea",
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBottom": 2,
 "progressHeight": 0,
 "playbackBarHeadShadow": true,
 "playbackBarHeadShadowHorizontalLength": 0,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "transitionMode": "blending",
 "progressBorderSize": 0,
 "paddingRight": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "displayTooltipInTouchScreens": true,
 "progressBorderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "paddingBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "progressBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipFontSize": "1.11vmin",
 "toolTipOpacity": 1,
 "toolTipPaddingBottom": 4,
 "toolTipTextShadowBlurRadius": 3,
 "paddingTop": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "data": {
  "name": "ViewerArea9295"
 },
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal"
},
{
 "id": "htmlText_2389E104_326A_CD0D_41C7_92D98AD64ECF",
 "width": "100%",
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "scrollBarMargin": 2,
 "height": "10%",
 "minWidth": 0,
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "paddingBottom": 10,
 "paddingTop": 10,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#000000",
 "shadow": false,
 "data": {
  "name": "HTMLText7587"
 },
 "scrollBarOpacity": 0.5
},
{
 "id": "viewer_uidEA911C80_F927_1589_41E5_A0763E464D6C",
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "width": "100%",
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "progressLeft": 0,
 "propagateClick": false,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "borderSize": 0,
 "toolTipFontColor": "#606060",
 "height": "89%",
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "class": "ViewerArea",
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBottom": 2,
 "progressHeight": 0,
 "playbackBarHeadShadow": true,
 "playbackBarHeadShadowHorizontalLength": 0,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "transitionMode": "blending",
 "progressBorderSize": 0,
 "paddingRight": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "displayTooltipInTouchScreens": true,
 "progressBorderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "paddingBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "progressBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipFontSize": "1.11vmin",
 "toolTipOpacity": 1,
 "toolTipPaddingBottom": 4,
 "toolTipTextShadowBlurRadius": 3,
 "paddingTop": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "data": {
  "name": "ViewerArea9286"
 },
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal"
},
{
 "class": "VideoPlayer",
 "viewerArea": "this.viewer_uidEA90AC81_F927_158B_41ED_2CDD87E9165C",
 "id": "viewer_uidEA90AC81_F927_158B_41ED_2CDD87E9165CVideoPlayer",
 "displayPlaybackBar": true
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_ED21CD68_F927_149A_41E3_4B3C78B7F5C2",
 "restartMovementOnUserInteraction": false
},
{
 "id": "htmlText_096CE56C_1E17_9840_41BD_D43CA8571094",
 "width": "100%",
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "scrollBarMargin": 2,
 "height": "10%",
 "minWidth": 0,
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "paddingBottom": 10,
 "paddingTop": 10,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#000000",
 "shadow": false,
 "data": {
  "name": "HTMLText26857"
 },
 "scrollBarOpacity": 0.5
},
{
 "id": "image_uidEA846C7C_F927_1579_41E1_3045FA8DEA67_1",
 "width": "100%",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "media/photo_2B8D6980_2729_D289_41A9_4A7EA8B9264C.png",
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": "89%",
 "minWidth": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Image",
 "scaleMode": "fit_inside",
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "Image9282"
 }
},
{
 "class": "VideoPlayer",
 "viewerArea": "this.viewer_uidEA97CC8C_F927_1599_41E7_CF44D2E55074",
 "id": "viewer_uidEA97CC8C_F927_1599_41E7_CF44D2E55074VideoPlayer",
 "displayPlaybackBar": true
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_ED8A0E29_F927_149B_41DE_705082BFB5D1",
 "restartMovementOnUserInteraction": false
},
{
 "id": "htmlText_24310880_326E_5B05_41C5_08F4D47C3CFE",
 "width": "100%",
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "scrollBarMargin": 2,
 "height": "12%",
 "minWidth": 0,
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "paddingBottom": 10,
 "paddingTop": 10,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#000000",
 "shadow": false,
 "data": {
  "name": "HTMLText31245"
 },
 "scrollBarOpacity": 0.5
},
{
 "id": "viewer_uidEA97AC8F_F927_1597_41D6_476D2B6D0AC4",
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "width": "100%",
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "progressLeft": 0,
 "propagateClick": false,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "borderSize": 0,
 "toolTipFontColor": "#606060",
 "height": "87%",
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "class": "ViewerArea",
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBottom": 2,
 "progressHeight": 0,
 "playbackBarHeadShadow": true,
 "playbackBarHeadShadowHorizontalLength": 0,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "transitionMode": "blending",
 "progressBorderSize": 0,
 "paddingRight": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "displayTooltipInTouchScreens": true,
 "progressBorderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "paddingBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "progressBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipFontSize": "1.11vmin",
 "toolTipOpacity": 1,
 "toolTipPaddingBottom": 4,
 "toolTipTextShadowBlurRadius": 3,
 "paddingTop": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "data": {
  "name": "ViewerArea9308"
 },
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal"
},
{
 "id": "htmlText_268C36BA_327E_F705_4191_6D24B714390A",
 "width": "100%",
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "scrollBarMargin": 2,
 "height": "10%",
 "minWidth": 0,
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "paddingBottom": 10,
 "paddingTop": 10,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#000000",
 "shadow": false,
 "data": {
  "name": "HTMLText18666"
 },
 "scrollBarOpacity": 0.5
},
{
 "id": "image_uidEA8E5C7E_F927_1579_41E4_282E9D6611D1_1",
 "width": "100%",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "media/photo_2607CEBF_327E_577B_41B2_172D569A43B6.png",
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": "89%",
 "minWidth": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Image",
 "scaleMode": "fit_inside",
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "Image9283"
 }
},
{
 "id": "htmlText_274D46D4_326E_570D_41C0_2049BEEC474B",
 "width": "100%",
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "scrollBarMargin": 2,
 "height": "10%",
 "minWidth": 0,
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "paddingBottom": 10,
 "paddingTop": 10,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#000000",
 "shadow": false,
 "data": {
  "name": "HTMLText30405"
 },
 "scrollBarOpacity": 0.5
},
{
 "id": "image_uidEA948C8E_F927_1599_41E4_EE92D4B6DA94_1",
 "width": "100%",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "media/photo_271C612E_326E_CD1A_419D_DF4435DB7F40.png",
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": "89%",
 "minWidth": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Image",
 "scaleMode": "fit_inside",
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "Image9306"
 }
},
{
 "id": "htmlText_244B4A60_326D_BF05_41C2_4A6DF2B60110",
 "width": "100%",
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "scrollBarMargin": 2,
 "height": "10%",
 "minWidth": 0,
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "paddingBottom": 10,
 "paddingTop": 10,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#000000",
 "shadow": false,
 "data": {
  "name": "HTMLText32041"
 },
 "scrollBarOpacity": 0.5
},
{
 "id": "viewer_uidEA940C8E_F927_1599_41E8_16606E384E65",
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "width": "100%",
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "progressLeft": 0,
 "propagateClick": false,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "borderSize": 0,
 "toolTipFontColor": "#606060",
 "height": "89%",
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "class": "ViewerArea",
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBottom": 2,
 "progressHeight": 0,
 "playbackBarHeadShadow": true,
 "playbackBarHeadShadowHorizontalLength": 0,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "transitionMode": "blending",
 "progressBorderSize": 0,
 "paddingRight": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "displayTooltipInTouchScreens": true,
 "progressBorderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "paddingBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "progressBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipFontSize": "1.11vmin",
 "toolTipOpacity": 1,
 "toolTipPaddingBottom": 4,
 "toolTipTextShadowBlurRadius": 3,
 "paddingTop": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "data": {
  "name": "ViewerArea9307"
 },
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal"
},
{
 "class": "VideoPlayer",
 "viewerArea": "this.viewer_uidEA919C80_F927_1589_41D7_46498C633474",
 "id": "viewer_uidEA919C80_F927_1589_41D7_46498C633474VideoPlayer",
 "displayPlaybackBar": true
},
{
 "id": "htmlText_272CA028_3276_CB05_41B0_1509D299CFCF",
 "width": "100%",
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "scrollBarMargin": 2,
 "height": "10%",
 "minWidth": 0,
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "paddingBottom": 10,
 "paddingTop": 10,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#000000",
 "shadow": false,
 "data": {
  "name": "HTMLText22833"
 },
 "scrollBarOpacity": 0.5
},
{
 "id": "image_uidEA95CC89_F927_159B_41D9_97D9571DA727_1",
 "width": "100%",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "media/photo_2691A0AB_3276_4B1B_41AF_8F701051E093.png",
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": "89%",
 "minWidth": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Image",
 "scaleMode": "fit_inside",
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "Image9300"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2FBA9DCA_0FAB_C766_414D_827A2822C3FA, this.camera_EAB5ACBB_F927_15FE_41B0_893A7563EE1C); this.mainPlayList.set('selectedIndex', 8); this.setComponentVisibility(this.Label_0B01F180_19C7_40E0_41B7_0393C88A3E1B, false, 0, null, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 172.97,
   "hfov": 11.81,
   "image": {
    "levels": [
     {
      "url": "media/panorama_375CA3CB_272B_B698_418A_27B1A3767B14_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.02
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_29AEB168_2738_B398_41B2_4600A89196E4",
   "pitch": -9.02,
   "yaw": 172.97,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.81,
   "distance": 100
  }
 ],
 "id": "overlay_375C83CB_272B_B698_419A_8B7DD9B13F41",
 "data": {
  "label": "Circle Point 01c"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_23885104_326A_CD0D_41C5_D75F61B07641, null, true); this.playList_EA912C80_F927_1589_41BA_F8A57CF852AD.set('selectedIndex', 0); ; this.viewer_uidEA911C80_F927_1589_41E5_A0763E464D6CVideoPlayer.play(); ",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -12.11,
   "hfov": 3.09,
   "image": {
    "levels": [
     {
      "url": "media/panorama_375CA3CB_272B_B698_418A_27B1A3767B14_0_HS_8_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.87
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -12.11,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_375CA3CB_272B_B698_418A_27B1A3767B14_0_HS_8_0.png",
      "class": "ImageResourceLevel",
      "width": 75,
      "height": 75
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.87,
   "hfov": 3.09
  }
 ],
 "id": "overlay_22B3A7CD_325A_551F_41C6_04C06D134177",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_20C4FD88_326A_7505_419F_79034A0F7ADF, null, true); this.playList_EA90CC81_F927_158B_41DA_6C0F3A711494.set('selectedIndex', 0); ; this.viewer_uidEA90AC81_F927_158B_41ED_2CDD87E9165CVideoPlayer.play(); ",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -12.1,
   "hfov": 4.64,
   "image": {
    "levels": [
     {
      "url": "media/panorama_375CA3CB_272B_B698_418A_27B1A3767B14_0_HS_9_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.87
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_2143EF88_325A_5505_4190_C6766FDF87A7",
   "pitch": 5.87,
   "yaw": -12.1,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.64,
   "distance": 100
  }
 ],
 "id": "overlay_233D5A84_325E_DF0E_41A4_8F0EBAE7611A",
 "data": {
  "label": "Info Red 08"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_22ACEF7F_3256_75FA_41C5_F87A61BCBBE1, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -18.51,
   "hfov": 5.14,
   "image": {
    "levels": [
     {
      "url": "media/panorama_375CA3CB_272B_B698_418A_27B1A3767B14_0_HS_7_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.95
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_207555BC_326A_D57D_41B1_CBD9EF534925",
   "pitch": 5.95,
   "yaw": -18.51,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.14,
   "distance": 100
  }
 ],
 "id": "overlay_23536FFE_3255_B4FD_41B9_D68236D688D7",
 "data": {
  "label": "Info Red"
 }
},
{
 "id": "htmlText_21D9965A_326A_D705_41B5_0404577E6393",
 "width": "100%",
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "scrollBarMargin": 2,
 "height": "10%",
 "minWidth": 0,
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "paddingBottom": 10,
 "paddingTop": 10,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#000000",
 "shadow": false,
 "data": {
  "name": "HTMLText13333"
 },
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.viewer_uidEA900C82_F927_1589_41D4_7EC44B9D96CD",
  {
   "children": [
    "this.htmltext_EA93AC83_F927_158F_41D2_09720396B43C"
   ],
   "left": 0,
   "backgroundOpacity": 0.3,
   "right": 0,
   "paddingRight": 0,
   "overflow": "scroll",
   "paddingLeft": 0,
   "minHeight": 20,
   "borderRadius": 0,
   "backgroundColorRatios": [],
   "scrollBarWidth": 7,
   "propagateClick": false,
   "scrollBarMargin": 2,
   "bottom": 0,
   "layout": "vertical",
   "backgroundColor": [],
   "verticalAlign": "bottom",
   "minWidth": 20,
   "scrollBarVisible": "rollOver",
   "gap": 10,
   "borderSize": 0,
   "paddingBottom": 0,
   "height": "30%",
   "paddingTop": 0,
   "class": "Container",
   "contentOpaque": true,
   "backgroundColorDirection": "vertical",
   "scrollBarColor": "#FFFFFF",
   "shadow": false,
   "horizontalAlign": "left",
   "data": {
    "name": "Container9291"
   },
   "scrollBarOpacity": 0.5
  },
  "this.component_EA939C84_F927_1589_41CA_36617B0B90C3",
  "this.component_EA936C84_F927_1589_41E9_AD88036A9B01"
 ],
 "id": "container_EA93CC83_F927_158F_41D0_C3A808E382EB",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [],
 "layout": "absolute",
 "scrollBarMargin": 2,
 "propagateClick": false,
 "backgroundColor": [],
 "verticalAlign": "top",
 "minWidth": 20,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "height": "89%",
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Container9290"
 },
 "scrollBarOpacity": 0.5
},
{
 "id": "htmlText_22AC0F80_3256_7506_41AD_01D56F319E8C",
 "width": "100%",
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "scrollBarMargin": 2,
 "height": "10%",
 "minWidth": 0,
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "paddingBottom": 10,
 "paddingTop": 10,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#000000",
 "shadow": false,
 "data": {
  "name": "HTMLText6579"
 },
 "scrollBarOpacity": 0.5
},
{
 "id": "image_uidEA908C81_F927_158B_41D9_EEAF950823F8_1",
 "width": "100%",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "media/photo_23073E28_3256_5705_41C3_B4CA3ADD5F6C.png",
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": "89%",
 "minWidth": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Image",
 "scaleMode": "fit_inside",
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "Image9288"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2F4B9540_0FAB_C762_41AD_692E126E6290, this.camera_ED4C5D9C_F927_17B9_41EE_64DF7A563832); this.mainPlayList.set('selectedIndex', 7); this.setComponentVisibility(this.Label_0A64507B_19CB_4020_41A4_0C7BF6B71113, false, 0, null, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 98.94,
   "hfov": 4.5,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2FBABF32_0FAB_C326_41A6_6E5201897A35_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.07
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_33ECA4EE_1319_4FAB_4177_7DFEDC3F259E",
   "pitch": -11.07,
   "yaw": 98.94,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.5,
   "distance": 100
  }
 ],
 "id": "overlay_065A7883_1309_C67B_41A6_3836B3A2963B",
 "data": {
  "label": "Circle Door 02"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_27118875_326A_7B0F_419F_325FA5B0A7A0, null, true); this.playList_EA948C8B_F927_159F_4173_30E9595C015A.set('selectedIndex', 0); ; this.viewer_uidEA946C8B_F927_159F_41D1_3809CFA73525VideoPlayer.play(); ",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 22.44,
   "hfov": 3.06,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2FBABF32_0FAB_C326_41A6_6E5201897A35_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 19
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.92
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 22.44,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2FBABF32_0FAB_C326_41A6_6E5201897A35_0_HS_4_0.png",
      "class": "ImageResourceLevel",
      "width": 79,
      "height": 95
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.92,
   "hfov": 3.06
  }
 ],
 "id": "overlay_272294B5_3277_CB0F_41C8_92C1BDFC9BB4",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_27688FAC_3275_B51D_41C4_794B7A1400A6, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 14.56,
   "hfov": 4.84,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2FBABF32_0FAB_C326_41A6_6E5201897A35_0_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.72
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_251FA416_3256_4B0D_41C2_AAEFD0EBBDEF",
   "pitch": -20.72,
   "yaw": 14.56,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.84,
   "distance": 100
  }
 ],
 "id": "overlay_27FC1E89_3277_B707_4197_2E4F27B4761C",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_27045446_326B_CB0D_41B5_D69DA767D36F, null, true); this.playList_EA941C8C_F927_1599_41EC_DDC429C3F436.set('selectedIndex', 0); ; this.viewer_uidEA97CC8C_F927_1599_41E7_CF44D2E55074VideoPlayer.play(); ",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 22.43,
   "hfov": 4.9,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2FBABF32_0FAB_C326_41A6_6E5201897A35_0_HS_6_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.89
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_251F4417_3256_4B0B_4188_962D50E45860",
   "pitch": -20.89,
   "yaw": 22.43,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.9,
   "distance": 100
  }
 ],
 "id": "overlay_27340DDF_3276_753A_4177_8EDADF0F4110",
 "data": {
  "label": "Info Red 08"
 }
},
{
 "class": "VideoPlayer",
 "viewerArea": "this.viewer_uidEA97AC8F_F927_1597_41D6_476D2B6D0AC4",
 "id": "viewer_uidEA97AC8F_F927_1597_41D6_476D2B6D0AC4VideoPlayer",
 "displayPlaybackBar": true
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2F4DB3F5_0FAB_4323_41A1_9616D3077287, this.camera_ED34CD82_F927_178E_41DB_E2AA3B8EB140); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -89.46,
   "hfov": 12.81,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2FBA4CAA_0FAB_4526_419C_1A01B06BA5F2_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.47
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_31CAE6CE_236A_4C60_41A9_91AEB013BE81",
   "pitch": -8.47,
   "yaw": -89.46,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.81,
   "distance": 100
  }
 ],
 "id": "overlay_052AB9EF_1356_6F4C_4191_873A68EDB766",
 "data": {
  "label": "Circle Point 01c"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2F64D6C9_0FAB_C562_419D_D1F42B2FF9F0, this.camera_ED407D8F_F927_1796_41D7_3B5689C8AE28); this.mainPlayList.set('selectedIndex', 9); this.setComponentVisibility(this.Label_0DAA94A1_19FB_4020_41AC_FD8C7A105B27, true, 0, null, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -10.2,
   "hfov": 8.23,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2FBA4CAA_0FAB_4526_419C_1A01B06BA5F2_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.62
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_0843643D_1356_64D7_41A6_F6FE9B8A2252",
   "pitch": 5.62,
   "yaw": -10.2,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.23,
   "distance": 100
  }
 ],
 "id": "overlay_05D784C0_1351_E5B3_419A_EC33757DC56E",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_24953AEB_3256_7F1B_41BD_08D8476D61CF, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 71.33,
   "hfov": 4.57,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2FBA4CAA_0FAB_4526_419C_1A01B06BA5F2_0_HS_6_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.58
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_25264413_3256_4B0B_41A2_99EE29B67BB7",
   "pitch": 3.58,
   "yaw": 71.33,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.57,
   "distance": 100
  }
 ],
 "id": "overlay_241FBB5D_326B_DD3F_41B1_06DCF11F29DE",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_24CE00F0_3256_4B05_41C4_CE56E04513F7, null, true); this.playList_EA930C87_F927_1597_41D7_D2FB15248092.set('selectedIndex', 0); ; this.viewer_uidEA92FC87_F927_1597_41B5_9608D004E79CVideoPlayer.play(); ",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 71.22,
   "hfov": 3.41,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2FBA4CAA_0FAB_4526_419C_1A01B06BA5F2_0_HS_7_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 20,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.2
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 71.22,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2FBA4CAA_0FAB_4526_419C_1A01B06BA5F2_0_HS_7_0.png",
      "class": "ImageResourceLevel",
      "width": 82,
      "height": 65
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.2,
   "hfov": 3.41
  }
 ],
 "id": "overlay_24D03FEF_326A_551A_4187_D8DAE584F6FB",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_24885DF6_3255_F50D_41C5_64B87AC2AC66, null, true); this.playList_EA92BC88_F927_1599_41E7_CF0FF8B31D0E.set('selectedIndex', 0); ; this.viewer_uidEA929C88_F927_1599_41C7_868EB8DDA181VideoPlayer.play(); ",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 71.25,
   "hfov": 4.96,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2FBA4CAA_0FAB_4526_419C_1A01B06BA5F2_0_HS_8_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.18
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_25240414_3256_4B0D_41BE_2DF4AC2E28B7",
   "pitch": -1.18,
   "yaw": 71.25,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.96,
   "distance": 100
  }
 ],
 "id": "overlay_24AF520A_326A_4F05_4190_1E3E09D98E72",
 "data": {
  "label": "Info Red 08"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_0C2A3A6E_1A48_C020_41B6_F7DB48EAA229, this.camera_EAE17D19_F927_14BB_41B3_0A31F9D48F56); this.mainPlayList.set('selectedIndex', 13); this.setComponentVisibility(this.Label_00EBB067_1A49_C020_41AB_54606EFF722C, true, 0, null, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -7.12,
   "hfov": 10.28,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2F4DB3F5_0FAB_4323_41A1_9616D3077287_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.16
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_0840243D_1356_64D7_41A4_7F27A3AA0B3A",
   "pitch": 3.16,
   "yaw": -7.12,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.28,
   "distance": 100
  }
 ],
 "id": "overlay_0542D21F_1352_BCCA_41A9_F0E8DBEDBC31",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2F4B9540_0FAB_C762_41AD_692E126E6290, this.camera_EADBAD0B_F927_149E_41E6_337B642E4646); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -93.68,
   "hfov": 15.04,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2F4DB3F5_0FAB_4323_41A1_9616D3077287_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.01
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_30360B11_236B_C5F2_41AE_D3F798A2204C",
   "pitch": -10.01,
   "yaw": -93.68,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.04,
   "distance": 100
  }
 ],
 "id": "overlay_06BF93B8_1353_A3D5_41A2_0F28C08AEC89",
 "data": {
  "label": "Circle Point 01c"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2FBA4CAA_0FAB_4526_419C_1A01B06BA5F2, this.camera_EAEB5D26_F927_1489_41BC_5B03255177F3); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 87.6,
   "hfov": 10.35,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2F4DB3F5_0FAB_4323_41A1_9616D3077287_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.78
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_328C1230_2364_AA85_4173_67971DF3C65E",
   "pitch": -11.78,
   "yaw": 87.6,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.35,
   "distance": 100
  }
 ],
 "id": "overlay_0691091C_1351_ACCD_41B3_504BE60C2029",
 "data": {
  "label": "Circle Point 01c"
 }
},
{
 "class": "PhotoAlbumPlayListItem",
 "player": "this.viewer_uidEA900C82_F927_1589_41D4_7EC44B9D96CDPhotoAlbumPlayer",
 "begin": "this.updateMediaLabelFromPlayList(this.album_263A3B3A_326A_DD7A_41A4_88CAA612E6D9_AlbumPlayList, this.htmltext_EA93AC83_F927_158F_41D2_09720396B43C, this.albumitem_EA93EC82_F927_1589_41C5_0ACFDBD34C65); this.loopAlbum(this.playList_EA902C82_F927_1589_41D3_153AECD7523B, 0)",
 "media": "this.album_263A3B3A_326A_DD7A_41A4_88CAA612E6D9",
 "id": "albumitem_EA93EC82_F927_1589_41C5_0ACFDBD34C65"
},
{
 "id": "htmlText_26A809C3_3275_BD0B_41BA_E2A9CE1524D2",
 "width": "100%",
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "scrollBarMargin": 2,
 "height": "10%",
 "minWidth": 0,
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "paddingBottom": 10,
 "paddingTop": 10,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#000000",
 "shadow": false,
 "data": {
  "name": "HTMLText22027"
 },
 "scrollBarOpacity": 0.5
},
{
 "id": "viewer_uidEA955C8A_F927_1599_41CD_B06EFA977B34",
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "width": "100%",
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "progressLeft": 0,
 "propagateClick": false,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "borderSize": 0,
 "toolTipFontColor": "#606060",
 "height": "89%",
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "class": "ViewerArea",
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBottom": 2,
 "progressHeight": 0,
 "playbackBarHeadShadow": true,
 "playbackBarHeadShadowHorizontalLength": 0,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "transitionMode": "blending",
 "progressBorderSize": 0,
 "paddingRight": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "displayTooltipInTouchScreens": true,
 "progressBorderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "paddingBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "progressBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipFontSize": "1.11vmin",
 "toolTipOpacity": 1,
 "toolTipPaddingBottom": 4,
 "toolTipTextShadowBlurRadius": 3,
 "paddingTop": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "data": {
  "name": "ViewerArea9301"
 },
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal"
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_0C2A3A6E_1A48_C020_41B6_F7DB48EAA229, this.camera_EDEBAEE3_F927_158F_41DD_D99AAD6B2CDD); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -11.24,
   "hfov": 3,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0C2110F6_1A48_C021_4194_3180B6EBF789_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.62
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_01758EC4_1ABB_C061_41B2_CE65C0B96252",
   "pitch": 3.62,
   "yaw": -11.24,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3,
   "distance": 50
  }
 ],
 "id": "overlay_0111D2C2_1AB9_C060_41A2_05F24F0F1F5E",
 "data": {
  "label": "Arrow 01 Left"
 }
},
{
 "id": "htmlText_267024E3_327E_4B0B_41BB_54C4755C14BE",
 "width": "100%",
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "scrollBarMargin": 2,
 "height": "10%",
 "minWidth": 0,
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "paddingBottom": 10,
 "paddingTop": 10,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#000000",
 "shadow": false,
 "data": {
  "name": "HTMLText17052"
 },
 "scrollBarOpacity": 0.5
},
{
 "id": "viewer_uidEA919C80_F927_1589_41D7_46498C633474",
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "width": "100%",
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "progressLeft": 0,
 "propagateClick": false,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "borderSize": 0,
 "toolTipFontColor": "#606060",
 "height": "89%",
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "class": "ViewerArea",
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBottom": 2,
 "progressHeight": 0,
 "playbackBarHeadShadow": true,
 "playbackBarHeadShadowHorizontalLength": 0,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "transitionMode": "blending",
 "progressBorderSize": 0,
 "paddingRight": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "displayTooltipInTouchScreens": true,
 "progressBorderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "paddingBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "progressBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipFontSize": "1.11vmin",
 "toolTipOpacity": 1,
 "toolTipPaddingBottom": 4,
 "toolTipTextShadowBlurRadius": 3,
 "paddingTop": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "data": {
  "name": "ViewerArea9285"
 },
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal"
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_00B9BDF2_1A79_4020_41B8_B948F9596DC6, this.camera_ED15ED5A_F927_14BE_41D9_CC94E629F512); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 9.74,
   "hfov": 1.3,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0C2A3A6E_1A48_C020_41B6_F7DB48EAA229_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.47
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_3A56BF75_1A49_C023_419C_6B286E526457",
   "pitch": 0.47,
   "yaw": 9.74,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.3,
   "distance": 100
  }
 ],
 "id": "overlay_028E8084_1A79_40E1_41B0_1D28DB22F1A1",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_0C2110F6_1A48_C021_4194_3180B6EBF789, this.camera_ED2B0D75_F927_148B_41AD_61305E5C44E6); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.47,
   "hfov": 1,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0C2A3A6E_1A48_C020_41B6_F7DB48EAA229_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.12
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_3A591F75_1A49_C023_418D_CB1DA199EB45",
   "pitch": 3.12,
   "yaw": -1.47,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1,
   "distance": 100
  }
 ],
 "id": "overlay_031ED124_1A79_4020_4193_A92E984AAB4F",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2F4DB3F5_0FAB_4323_41A1_9616D3077287, this.camera_ED21FD67_F927_1495_4195_677129D1785A); this.mainPlayList.set('selectedIndex', 5); this.setComponentVisibility(this.Label_00EBB067_1A49_C020_41AB_54606EFF722C, false, 0, null, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -12.63,
   "hfov": 2.14,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0C2A3A6E_1A48_C020_41B6_F7DB48EAA229_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 6.78
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_0175DEC4_1ABB_C061_41B3_54937CBD74F0",
   "pitch": 6.78,
   "yaw": -12.63,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.14,
   "distance": 50
  }
 ],
 "id": "overlay_00B07FB2_1A58_C020_41B0_47288960F8A1",
 "data": {
  "label": "Arrow 01 Left"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_274FB6D4_326E_570D_41C8_BB662D60E02E, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 1.33,
   "hfov": 1.62,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0C2A3A6E_1A48_C020_41B6_F7DB48EAA229_0_HS_6_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.12
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_25196419_3256_4B07_4195_93E90077993D",
   "pitch": 2.12,
   "yaw": 1.33,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.62,
   "distance": 100
  }
 ],
 "id": "overlay_27E19991_326D_FD07_41C2_0730ABCEAD39",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_244B8A5A_326D_BF3E_41B3_0AF012B83EFB, null, true); this.playList_EA942C8E_F927_1599_41BA_022523C9985D.set('selectedIndex', 0); ; this.viewer_uidEA940C8E_F927_1599_41E8_16606E384E65VideoPlayer.play(); ",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.94,
   "hfov": 0.82,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0C2A3A6E_1A48_C020_41B6_F7DB48EAA229_0_HS_7_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.09
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 2.94,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0C2A3A6E_1A48_C020_41B6_F7DB48EAA229_0_HS_7_0.png",
      "class": "ImageResourceLevel",
      "width": 125,
      "height": 122
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.09,
   "hfov": 0.82
  }
 ],
 "id": "overlay_27E65AB3_326E_7F0B_41A0_017F979D923A",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_2431D880_326E_5B05_41A1_68426412418C, null, true); this.playList_EA97FC8F_F927_1597_41D3_8A26C6FAAC56.set('selectedIndex', 0); ; this.viewer_uidEA97AC8F_F927_1597_41D6_476D2B6D0AC4VideoPlayer.play(); ",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 2.96,
   "hfov": 1.25,
   "image": {
    "levels": [
     {
      "url": "media/panorama_0C2A3A6E_1A48_C020_41B6_F7DB48EAA229_0_HS_8_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.1
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_2517D41A_3256_4B05_41C4_BC869F6EF3AE",
   "pitch": 2.1,
   "yaw": 2.96,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 1.25,
   "distance": 100
  }
 ],
 "id": "overlay_27D11E4B_326E_D71B_4193_30A48EBC6279",
 "data": {
  "label": "Info Red 08"
 }
},
{
 "class": "VideoPlayer",
 "viewerArea": "this.viewer_uidEA92FC87_F927_1597_41B5_9608D004E79C",
 "id": "viewer_uidEA92FC87_F927_1597_41B5_9608D004E79CVideoPlayer",
 "displayPlaybackBar": true
},
{
 "id": "htmlText_27041447_326B_CB0B_41B1_38DDDAD88097",
 "width": "100%",
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "scrollBarMargin": 2,
 "height": "10%",
 "minWidth": 0,
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "paddingBottom": 10,
 "paddingTop": 10,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#000000",
 "shadow": false,
 "data": {
  "name": "HTMLText26907"
 },
 "scrollBarOpacity": 0.5
},
{
 "id": "viewer_uidEA97CC8C_F927_1599_41E7_CF44D2E55074",
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "width": "100%",
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "progressLeft": 0,
 "propagateClick": false,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "borderSize": 0,
 "toolTipFontColor": "#606060",
 "height": "89%",
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "class": "ViewerArea",
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBottom": 2,
 "progressHeight": 0,
 "playbackBarHeadShadow": true,
 "playbackBarHeadShadowHorizontalLength": 0,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "transitionMode": "blending",
 "progressBorderSize": 0,
 "paddingRight": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "displayTooltipInTouchScreens": true,
 "progressBorderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "paddingBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "progressBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipFontSize": "1.11vmin",
 "toolTipOpacity": 1,
 "toolTipPaddingBottom": 4,
 "toolTipTextShadowBlurRadius": 3,
 "paddingTop": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "data": {
  "name": "ViewerArea9305"
 },
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal"
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2DF0ED7C_0FAF_4722_4197_CF60E74696F9, this.camera_EDDA7ED5_F927_158A_41D8_7D7183728F09); this.mainPlayList.set('selectedIndex', 2); this.setComponentVisibility(this.Label_0B634445_19CB_4060_41B8_EDD3964C9744, true, 0, null, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 30.18,
   "hfov": 8.24,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2FBABA98_0FAB_4DE2_41A4_F41F4C69A336_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.18
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_0FB3504E_13F2_5CA9_4149_A79A2DC08720",
   "pitch": 5.18,
   "yaw": 30.18,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.24,
   "distance": 100
  }
 ],
 "id": "overlay_06FD2A58_1372_AD49_418C_3E35506758D4",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2F299F25_0FAB_4322_41A4_7E7C91C19BB3, this.camera_EDBEFEBA_F927_15FE_41C5_984B9392A41E); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.39,
   "hfov": 12.18,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2FBABA98_0FAB_4DE2_41A4_F41F4C69A336_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.52
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_36AA4CBD_237A_FC7D_41B0_9798AFFEFEF6",
   "pitch": -5.52,
   "yaw": -1.39,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.18,
   "distance": 100
  }
 ],
 "id": "overlay_06EDA8DD_134E_AD48_41AF_E5B4B5602BA6",
 "data": {
  "label": "Circle Point 01c"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1C8531AD_12F9_495A_4190_01D89A3CAF80, this.camera_EDCD2EC8_F927_159A_41A3_E33C94DA8804); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -171.84,
   "hfov": 13.56,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2FBABA98_0FAB_4DE2_41A4_F41F4C69A336_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 51,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.16
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_0FB0F04E_13F2_5CA9_41B2_554534D408A3",
   "pitch": -8.16,
   "yaw": -171.84,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.56,
   "distance": 50
  }
 ],
 "id": "overlay_0AD40A60_13F7_EC9A_41AF_619BF2159E90",
 "data": {
  "label": "Arrow 06a Right"
 }
},
{
 "class": "VideoPlayer",
 "viewerArea": "this.viewer_uidEA931C84_F927_1589_41CB_31026B176D68",
 "id": "viewer_uidEA931C84_F927_1589_41CB_31026B176D68VideoPlayer",
 "displayPlaybackBar": true
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1C8531AD_12F9_495A_4190_01D89A3CAF80, this.camera_ED7F2E01_F927_148B_418B_098418292EA2); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -177.47,
   "hfov": 8.09,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2F4B9540_0FAB_C762_41AD_692E126E6290_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.75
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_363026CA_232A_4C8D_41B9_270EA5A1B1D8",
   "pitch": -6.75,
   "yaw": -177.47,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.09,
   "distance": 100
  }
 ],
 "id": "overlay_074C2AB2_1372_ADCA_41A5_255B39E99979",
 "data": {
  "label": "Circle Point 01c"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2F4DB3F5_0FAB_4323_41A1_9616D3077287, this.camera_ED8A3E29_F927_149B_41C4_E3C31C5E19CB); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.15,
   "hfov": 12.47,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2F4B9540_0FAB_C762_41AD_692E126E6290_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.91
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_3401C188_235A_C4C4_4178_92546C2E1932",
   "pitch": -9.91,
   "yaw": 0.15,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.47,
   "distance": 100
  }
 ],
 "id": "overlay_00AD267C_1376_A53D_4194_B9661627479D",
 "data": {
  "label": "Circle Point 01c"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2FBABF32_0FAB_C326_41A6_6E5201897A35, this.camera_ED72FDDD_F927_17BB_41C3_0EA2286D76C0); this.mainPlayList.set('selectedIndex', 10); this.setComponentVisibility(this.Label_0A64507B_19CB_4020_41A4_0C7BF6B71113, true, 0, null, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -99.89,
   "hfov": 8.06,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2F4B9540_0FAB_C762_41AD_692E126E6290_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.57
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_0635FF1B_134F_A4C9_41B0_3BDD5F02B006",
   "pitch": 7.57,
   "yaw": -99.89,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.06,
   "distance": 100
  }
 ],
 "id": "overlay_07B625AA_1376_67C4_41AD_36028DC672CC",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "class": "VideoPlayer",
 "viewerArea": "this.viewer_uidEA91CC7F_F927_1577_41DA_7757C0934805",
 "id": "viewer_uidEA91CC7F_F927_1577_41DA_7757C0934805VideoPlayer",
 "displayPlaybackBar": true
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_EDA58E74_F927_148A_41E8_F469270343A5",
 "restartMovementOnUserInteraction": false
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1F140574_12F9_49BE_41A1_BBA26E292B88, this.camera_EDA5BE74_F927_148A_41ED_F27735CE681A); this.mainPlayList.set('selectedIndex', 0); this.setComponentVisibility(this.Label_0BB4529A_19B9_C0E0_41B4_3A45B4A93DC8, true, 0, null, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 5.65,
   "hfov": 14.85,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1F044C6B_12FB_5FA3_41B2_6838DDBDC3BE_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 51,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.3
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_35FD0F9C_233A_DCB5_41AA_7C085B181256",
   "pitch": -7.3,
   "yaw": 5.65,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.85,
   "distance": 50
  }
 ],
 "id": "overlay_0776C7D9_1338_C9B5_41A0_F3105E1C02B3",
 "data": {
  "label": "Arrow 06a Left"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2FBA9DCA_0FAB_C766_414D_827A2822C3FA, this.camera_EDB1AE9D_F927_15BA_41C2_355C42C7284F); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 177.72,
   "hfov": 11.7,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1F044C6B_12FB_5FA3_41B2_6838DDBDC3BE_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 51,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.32
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_354B8CB5_2329_FCD0_41AC_AB8162AABB23",
   "pitch": -2.32,
   "yaw": 177.72,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.7,
   "distance": 50
  }
 ],
 "id": "overlay_074BEEB2_1338_BBF0_41B1_E1AF78551A2D",
 "data": {
  "label": "Arrow 06c Right"
 }
},
{
 "id": "htmlText_2766CFB1_3275_B507_41C4_C21FA8C253AA",
 "width": "100%",
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "scrollBarMargin": 2,
 "height": "10%",
 "minWidth": 0,
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "paddingBottom": 10,
 "paddingTop": 10,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#000000",
 "shadow": false,
 "data": {
  "name": "HTMLText25320"
 },
 "scrollBarOpacity": 0.5
},
{
 "id": "image_uidEA944C8B_F927_159F_41D5_E7F7E4CDE54B_1",
 "width": "100%",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "media/photo_2762E7CD_326A_7519_41B6_B990C9B9893C.png",
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": "89%",
 "minWidth": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Image",
 "scaleMode": "fit_inside",
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "Image9304"
 }
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_10073166_1D31_2FD1_41A8_FE78ECA3E574",
 "restartMovementOnUserInteraction": false
},
{
 "id": "htmlText_26EDE866_327F_BB0D_41C5_58EB7963FA16",
 "width": "100%",
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "scrollBarMargin": 2,
 "height": "10%",
 "minWidth": 0,
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "paddingBottom": 10,
 "paddingTop": 10,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#000000",
 "shadow": false,
 "data": {
  "name": "HTMLText17874"
 },
 "scrollBarOpacity": 0.5
},
{
 "id": "viewer_uidEA91CC7F_F927_1577_41DA_7757C0934805",
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "width": "100%",
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "progressLeft": 0,
 "propagateClick": false,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "borderSize": 0,
 "toolTipFontColor": "#606060",
 "height": "89%",
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "class": "ViewerArea",
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBottom": 2,
 "progressHeight": 0,
 "playbackBarHeadShadow": true,
 "playbackBarHeadShadowHorizontalLength": 0,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "transitionMode": "blending",
 "progressBorderSize": 0,
 "paddingRight": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "displayTooltipInTouchScreens": true,
 "progressBorderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "paddingBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "progressBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipFontSize": "1.11vmin",
 "toolTipOpacity": 1,
 "toolTipPaddingBottom": 4,
 "toolTipTextShadowBlurRadius": 3,
 "paddingTop": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "data": {
  "name": "ViewerArea9284"
 },
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal"
},
{
 "class": "VideoPlayer",
 "viewerArea": "this.viewer_uidEA929C88_F927_1599_41C7_868EB8DDA181",
 "id": "viewer_uidEA929C88_F927_1599_41C7_868EB8DDA181VideoPlayer",
 "displayPlaybackBar": true
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2FBABA98_0FAB_4DE2_41A4_F41F4C69A336, this.camera_ED591DAA_F927_1799_41E0_2E72E8C3E0E6); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 179.95,
   "hfov": 10.75,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2F299F25_0FAB_4322_41A4_7E7C91C19BB3_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.31
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_314639BA_2369_C474_41BD_EC5D834D993F",
   "pitch": -8.31,
   "yaw": 179.95,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.75,
   "distance": 100
  }
 ],
 "id": "overlay_06629F76_1372_A359_41A1_E75F9A9D2FDA",
 "data": {
  "label": "Circle Point 01c"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2FBA4CAA_0FAB_4526_419C_1A01B06BA5F2, this.camera_ED0BED4D_F927_149A_41D0_5A3D1F39FBBA); this.mainPlayList.set('selectedIndex', 6); this.setComponentVisibility(this.Label_0DAA94A1_19FB_4020_41AC_FD8C7A105B27, false, 0, null, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 85.39,
   "hfov": 3.87,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2F64D6C9_0FAB_C562_419D_D1F42B2FF9F0_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.98
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_0635AF1C_134F_A4CF_41B2_FC23AFC2DD46",
   "pitch": -12.98,
   "yaw": 85.39,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.87,
   "distance": 100
  }
 ],
 "id": "overlay_07B6FCC3_1371_E540_419B_18F7F6AF2238",
 "data": {
  "label": "Circle Door 01"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_272C9028_3276_CB05_415B_B4896348B414, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 6.41,
   "hfov": 4.84,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2F64D6C9_0FAB_C562_419D_D1F42B2FF9F0_0_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.53
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_2521A415_3256_4B0F_41A5_348DA01B6C61",
   "pitch": -20.53,
   "yaw": 6.41,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.84,
   "distance": 100
  }
 ],
 "id": "overlay_27A96E6F_327A_B71B_41A8_16319F7D75C3",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_26A849C2_3275_BD05_41C0_02A607C29D17, null, true); this.playList_EA956C89_F927_159B_41E5_97EFBD802D6D.set('selectedIndex', 0); ; this.viewer_uidEA955C8A_F927_1599_41CD_B06EFA977B34VideoPlayer.play(); ",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 12.43,
   "hfov": 3.42,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2F64D6C9_0FAB_C562_419D_D1F42B2FF9F0_0_HS_6_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.44
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 12.43,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2F64D6C9_0FAB_C562_419D_D1F42B2FF9F0_0_HS_6_0.png",
      "class": "ImageResourceLevel",
      "width": 88,
      "height": 80
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.44,
   "hfov": 3.42
  }
 ],
 "id": "overlay_26474EE5_327A_570F_41B3_1F8490478EE8",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_26D0EBD9_327A_5D07_41AB_F8077DF38DE5, null, true); this.playList_EA951C8A_F927_1599_41E2_575CD7FA0248.set('selectedIndex', 0); ; this.viewer_uidEA94CC8A_F927_1599_41C1_BDB7C069CE4CVideoPlayer.play(); ",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 12.48,
   "hfov": 4.86,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2F64D6C9_0FAB_C562_419D_D1F42B2FF9F0_0_HS_7_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.41
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_25200415_3256_4B0F_41C6_F9310048D3D7",
   "pitch": -20.41,
   "yaw": 12.48,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.86,
   "distance": 100
  }
 ],
 "id": "overlay_2196272F_327B_D51A_41A9_73112761B40C",
 "data": {
  "label": "Info Red 08"
 }
},
{
 "id": "htmlText_26D2ABD9_327A_5D07_41B5_FDBAFC161370",
 "width": "100%",
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "scrollBarMargin": 2,
 "height": "10%",
 "minWidth": 0,
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "paddingBottom": 10,
 "paddingTop": 10,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#000000",
 "shadow": false,
 "data": {
  "name": "HTMLText21226"
 },
 "scrollBarOpacity": 0.5
},
{
 "id": "viewer_uidEA94CC8A_F927_1599_41C1_BDB7C069CE4C",
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "width": "100%",
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "progressLeft": 0,
 "propagateClick": false,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "borderSize": 0,
 "toolTipFontColor": "#606060",
 "height": "89%",
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "class": "ViewerArea",
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBottom": 2,
 "progressHeight": 0,
 "playbackBarHeadShadow": true,
 "playbackBarHeadShadowHorizontalLength": 0,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "transitionMode": "blending",
 "progressBorderSize": 0,
 "paddingRight": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "displayTooltipInTouchScreens": true,
 "progressBorderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "paddingBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "progressBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipFontSize": "1.11vmin",
 "toolTipOpacity": 1,
 "toolTipPaddingBottom": 4,
 "toolTipTextShadowBlurRadius": 3,
 "paddingTop": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "data": {
  "name": "ViewerArea9302"
 },
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal"
},
{
 "id": "htmlText_27134876_326A_7B0D_41B3_8500D07715B3",
 "width": "100%",
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "scrollBarMargin": 2,
 "height": "11%",
 "minWidth": 0,
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "paddingBottom": 10,
 "paddingTop": 10,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#000000",
 "shadow": false,
 "data": {
  "name": "HTMLText27694"
 },
 "scrollBarOpacity": 0.5
},
{
 "id": "viewer_uidEA946C8B_F927_159F_41D1_3809CFA73525",
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "width": "100%",
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "progressLeft": 0,
 "propagateClick": false,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "borderSize": 0,
 "toolTipFontColor": "#606060",
 "height": "88%",
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "class": "ViewerArea",
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBottom": 2,
 "progressHeight": 0,
 "playbackBarHeadShadow": true,
 "playbackBarHeadShadowHorizontalLength": 0,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "transitionMode": "blending",
 "progressBorderSize": 0,
 "paddingRight": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "displayTooltipInTouchScreens": true,
 "progressBorderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "paddingBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "progressBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipFontSize": "1.11vmin",
 "toolTipOpacity": 1,
 "toolTipPaddingBottom": 4,
 "toolTipTextShadowBlurRadius": 3,
 "paddingTop": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "data": {
  "name": "ViewerArea9303"
 },
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal"
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1F044C6B_12FB_5FA3_41B2_6838DDBDC3BE, this.camera_EAF43D33_F927_148F_41CB_C73A47006299); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 72.15,
   "hfov": 16.18,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2FBA9DCA_0FAB_C766_414D_827A2822C3FA_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.59
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_3B551A65_23DA_47BB_41BF_957E8B97A48D",
   "pitch": -5.59,
   "yaw": 72.15,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.18,
   "distance": 50
  }
 ],
 "id": "overlay_0B4592FA_133B_CB79_41A4_6DE3F7A335C2",
 "data": {
  "label": "Arrow 06a Right-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_375CA3CB_272B_B698_418A_27B1A3767B14, this.camera_EAFEFD40_F927_1489_41E6_5E7D67A706AB); this.mainPlayList.set('selectedIndex', 1); this.setComponentVisibility(this.Label_0B01F180_19C7_40E0_41B7_0393C88A3E1B, true, 0, null, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -22.76,
   "hfov": 10.43,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2FBA9DCA_0FAB_C766_414D_827A2822C3FA_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 57,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.29
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_364C30F3_233E_4477_41B7_11F88BC1AC93",
   "pitch": -3.29,
   "yaw": -22.76,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.43,
   "distance": 100
  }
 ],
 "id": "overlay_04E0D622_134E_A4EF_41B3_4BCC9B5E62D9",
 "data": {
  "label": "Circle Point 01c"
 }
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_ED34AD82_F927_178E_41EE_7B0C1C7C12AA",
 "restartMovementOnUserInteraction": false
},
{
 "class": "VideoPlayer",
 "viewerArea": "this.viewer_uidEA903C85_F927_158B_41D9_DDAE8015AFD2",
 "id": "viewer_uidEA903C85_F927_158B_41D9_DDAE8015AFD2VideoPlayer",
 "displayPlaybackBar": true
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_EDD466CB_F8E5_759E_41E4_5CE2F7C9CABA",
 "restartMovementOnUserInteraction": false
},
{
 "class": "VideoPlayer",
 "viewerArea": "this.viewer_uidEA911C80_F927_1589_41E5_A0763E464D6C",
 "id": "viewer_uidEA911C80_F927_1589_41E5_A0763E464D6CVideoPlayer",
 "displayPlaybackBar": true
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_0C2A3A6E_1A48_C020_41B6_F7DB48EAA229, this.camera_ED966E51_F927_148A_41C1_71950BCF864E); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -10.52,
   "hfov": 3.55,
   "image": {
    "levels": [
     {
      "url": "media/panorama_00B9BDF2_1A79_4020_41B8_B948F9596DC6_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.66
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_016A6EC4_1ABB_C061_41B6_3085C769ECEB",
   "pitch": 1.66,
   "yaw": -10.52,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.55,
   "distance": 50
  }
 ],
 "id": "overlay_01839AD4_1AB8_C060_4188_5D0B6E784526",
 "data": {
  "label": "Arrow 01 Left"
 }
},
{
 "id": "htmlText_20C6BD88_326A_7505_41C4_F974589820DD",
 "width": "100%",
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "scrollBarMargin": 2,
 "height": "10%",
 "minWidth": 0,
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "paddingBottom": 10,
 "paddingTop": 10,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#000000",
 "shadow": false,
 "data": {
  "name": "HTMLText8634"
 },
 "scrollBarOpacity": 0.5
},
{
 "id": "viewer_uidEA90AC81_F927_158B_41ED_2CDD87E9165C",
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "width": "100%",
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "progressLeft": 0,
 "propagateClick": false,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "borderSize": 0,
 "toolTipFontColor": "#606060",
 "height": "89%",
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "class": "ViewerArea",
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBottom": 2,
 "progressHeight": 0,
 "playbackBarHeadShadow": true,
 "playbackBarHeadShadowHorizontalLength": 0,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "transitionMode": "blending",
 "progressBorderSize": 0,
 "paddingRight": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "displayTooltipInTouchScreens": true,
 "progressBorderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "paddingBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "progressBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipFontSize": "1.11vmin",
 "toolTipOpacity": 1,
 "toolTipPaddingBottom": 4,
 "toolTipTextShadowBlurRadius": 3,
 "paddingTop": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "data": {
  "name": "ViewerArea9287"
 },
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal"
},
{
 "id": "htmlText_218BF16D_326A_4D1F_41BE_184BCC98D8E6",
 "width": "100%",
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "scrollBarMargin": 2,
 "height": "10%",
 "minWidth": 0,
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "paddingBottom": 10,
 "paddingTop": 10,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "scrollBarColor": "#000000",
 "shadow": false,
 "data": {
  "name": "HTMLText11727"
 },
 "scrollBarOpacity": 0.5
},
{
 "id": "viewer_uidEA903C85_F927_158B_41D9_DDAE8015AFD2",
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "width": "100%",
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "progressLeft": 0,
 "propagateClick": false,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "borderSize": 0,
 "toolTipFontColor": "#606060",
 "height": "89%",
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "class": "ViewerArea",
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBottom": 2,
 "progressHeight": 0,
 "playbackBarHeadShadow": true,
 "playbackBarHeadShadowHorizontalLength": 0,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "transitionMode": "blending",
 "progressBorderSize": 0,
 "paddingRight": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "displayTooltipInTouchScreens": true,
 "progressBorderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "paddingBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "progressBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipFontSize": "1.11vmin",
 "toolTipOpacity": 1,
 "toolTipPaddingBottom": 4,
 "toolTipTextShadowBlurRadius": 3,
 "paddingTop": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "data": {
  "name": "ViewerArea9296"
 },
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal"
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1C8531AD_12F9_495A_4190_01D89A3CAF80, this.camera_EABF5CD7_F927_15B6_41E4_285665D0197F); this.mainPlayList.set('selectedIndex', 12); this.setComponentVisibility(this.Label_0BB4529A_19B9_C0E0_41B4_3A45B4A93DC8, false, 0, null, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 177.34,
   "hfov": 6.88,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1F140574_12F9_49BE_41A1_BBA26E292B88_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 7.82
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_3106C383_236C_A981_418C_29427E8C3F72",
   "pitch": 7.82,
   "yaw": 177.34,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.88,
   "distance": 100
  }
 ],
 "id": "overlay_00220FB9_1308_D9DB_4192_037C585BDFC8",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_1F044C6B_12FB_5FA3_41B2_6838DDBDC3BE, this.camera_EAB94CCA_F927_159E_41DF_6C02F34E1B65); this.mainPlayList.set('selectedIndex', 11); this.setComponentVisibility(this.Label_0BB4529A_19B9_C0E0_41B4_3A45B4A93DC8, false, 0, null, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -7.46,
   "hfov": 12.37,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1F140574_12F9_49BE_41A1_BBA26E292B88_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 34,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.4
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_3B4A0A67_23DA_4787_4195_C1D5BB5ABFC8",
   "pitch": -5.4,
   "yaw": -7.46,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.37,
   "distance": 50
  }
 ],
 "id": "overlay_0B396774_1339_C966_41B0_62CDB4ED915E",
 "data": {
  "label": "Arrow 06b Right-Up"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_268C06BA_327E_F705_41C1_A0167375326E, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -30.99,
   "hfov": 5.07,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1F140574_12F9_49BE_41A1_BBA26E292B88_0_HS_7_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.21
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_251D4417_3256_4B0B_41B7_9645568DE817",
   "pitch": -11.21,
   "yaw": -30.99,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.07,
   "distance": 100
  }
 ],
 "id": "overlay_269835D7_3276_B50B_4197_9700A70A2A34",
 "data": {
  "label": "Info Red 03"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_26EC1866_327F_BB0D_41C5_6EEC4C2B7887, null, true); this.playList_EA8E1C7F_F927_1577_4198_6312219D9B09.set('selectedIndex', 0); ; this.viewer_uidEA91CC7F_F927_1577_41DA_7757C0934805VideoPlayer.play(); ",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -24.75,
   "hfov": 2.91,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1F140574_12F9_49BE_41A1_BBA26E292B88_0_HS_8_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 18
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.27
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -24.75,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1F140574_12F9_49BE_41A1_BBA26E292B88_0_HS_8_0.png",
      "class": "ImageResourceLevel",
      "width": 71,
      "height": 80
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.27,
   "hfov": 2.91
  }
 ],
 "id": "overlay_276D7B11_3277_DD06_41C0_5FFF460B0DA2",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_267274E2_327E_4B05_41C7_5D197AB7D3D8, null, true); this.playList_EA91BC80_F927_1589_41D2_E8C9D4D5E0AC.set('selectedIndex', 0); ; this.viewer_uidEA919C80_F927_1589_41D7_46498C633474VideoPlayer.play(); ",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -24.77,
   "hfov": 4.99,
   "image": {
    "levels": [
     {
      "url": "media/panorama_1F140574_12F9_49BE_41A1_BBA26E292B88_0_HS_9_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.21
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_251BD418_3256_4B05_41C1_8D9A8D7E4B35",
   "pitch": -11.21,
   "yaw": -24.77,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.99,
   "distance": 100
  }
 ],
 "id": "overlay_26B29943_3276_BD0B_41B5_877783AD5419",
 "data": {
  "label": "Info Red 08"
 }
},
{
 "class": "PanoramaCameraSequence",
 "movements": [
  {
   "easing": "cubic_in",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  },
  {
   "easing": "linear",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 323,
   "yawSpeed": 7.96
  },
  {
   "easing": "cubic_out",
   "class": "DistancePanoramaCameraMovement",
   "yawDelta": 18.5,
   "yawSpeed": 7.96
  }
 ],
 "id": "sequence_ED72CDDD_F927_17BB_41E3_4A32B3DACF0C",
 "restartMovementOnUserInteraction": false
},
{
 "verticalAlign": "top",
 "children": [
  "this.Container_13DB15DF_0F5D_471E_41A8_79E9D9C573CB",
  "this.IconButton_13DB05DF_0F5D_471E_418D_C767C8FBE4B7"
 ],
 "id": "Container_13DB25DF_0F5D_471E_41A1_CCC80726E2DE",
 "left": "0%",
 "width": 66,
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "propagateClick": true,
 "top": "0%",
 "creationPolicy": "inAdvance",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "height": "100%",
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": false,
 "visible": false,
 "horizontalAlign": "left",
 "data": {
  "name": "- COLLAPSE"
 },
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5
},
{
 "verticalAlign": "top",
 "children": [
  "this.Container_13D4D5DF_0F5D_471E_4194_2B78696EF6B1",
  "this.IconButton_13D505E3_0F5D_4726_41AA_F296B4AE82DA"
 ],
 "id": "Container_13D4E5DF_0F5D_471E_419C_8FFB8A90DE9B",
 "width": 330,
 "backgroundOpacity": 0,
 "right": 0,
 "paddingRight": 0,
 "overflow": "visible",
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "propagateClick": false,
 "top": "0%",
 "height": "100%",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "- EXPANDED"
 },
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1C8531AD_12F9_495A_4190_01D89A3CAF80_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_2CB60AE2_235D_BB8B_41B3_26F4B4DA3E60",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1C8531AD_12F9_495A_4190_01D89A3CAF80_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_318252DA_237A_4408_41B1_673BC2A69BD2",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1C8531AD_12F9_495A_4190_01D89A3CAF80_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_3406A191_235A_C4C4_4183_2ABF4F665407",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2DF0ED7C_0FAF_4722_4197_CF60E74696F9_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_05B03DA9_1351_E720_41B1_24E12CCDD72D",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2DF0ED7C_0FAF_4722_4197_CF60E74696F9_0_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 500,
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_2530040D_3256_4B1E_41C4_7A9F187DFFF7",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2DF0ED7C_0FAF_4722_4197_CF60E74696F9_0_HS_5_0.png",
   "class": "ImageResourceLevel",
   "width": 600,
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_2528B411_3256_4B07_41C1_BCFB6CA7EBFB",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_375CA3CB_272B_B698_418A_27B1A3767B14_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_29AEB168_2738_B398_41B2_4600A89196E4",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_375CA3CB_272B_B698_418A_27B1A3767B14_0_HS_9_0.png",
   "class": "ImageResourceLevel",
   "width": 600,
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_2143EF88_325A_5505_4190_C6766FDF87A7",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_375CA3CB_272B_B698_418A_27B1A3767B14_0_HS_7_0.png",
   "class": "ImageResourceLevel",
   "width": 500,
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_207555BC_326A_D57D_41B1_CBD9EF534925",
 "frameCount": 24
},
{
 "id": "viewer_uidEA900C82_F927_1589_41D4_7EC44B9D96CD",
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "width": "100%",
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "progressLeft": 0,
 "propagateClick": false,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "borderSize": 0,
 "toolTipFontColor": "#606060",
 "height": "100%",
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "class": "ViewerArea",
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBottom": 2,
 "progressHeight": 0,
 "playbackBarHeadShadow": true,
 "playbackBarHeadShadowHorizontalLength": 0,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "transitionMode": "blending",
 "progressBorderSize": 0,
 "paddingRight": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "displayTooltipInTouchScreens": true,
 "progressBorderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "paddingBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "progressBorderColor": "#000000",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipFontSize": "1.11vmin",
 "toolTipOpacity": 1,
 "toolTipPaddingBottom": 4,
 "toolTipTextShadowBlurRadius": 3,
 "paddingTop": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "data": {
  "name": "ViewerArea9289"
 },
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal"
},
{
 "id": "htmltext_EA93AC83_F927_158F_41D2_09720396B43C",
 "width": "100%",
 "backgroundOpacity": 0.7,
 "paddingRight": 10,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarMargin": 2,
 "propagateClick": false,
 "backgroundColor": [
  "#000000"
 ],
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 250,
  "easing": "cubic_in_out"
 },
 "minWidth": 0,
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "paddingBottom": 5,
 "paddingTop": 5,
 "class": "HTMLText",
 "backgroundColorDirection": "vertical",
 "html": "",
 "scrollBarColor": "#000000",
 "shadow": false,
 "visible": false,
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 250,
  "easing": "cubic_in_out"
 },
 "data": {
  "name": "HTMLText9292"
 },
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "center",
 "id": "component_EA939C84_F927_1589_41CA_36617B0B90C3",
 "left": 10,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 0,
 "propagateClick": false,
 "top": "45%",
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 250,
  "easing": "cubic_in_out"
 },
 "verticalAlign": "middle",
 "minWidth": 0,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "iconURL": "skin/album_left.png",
 "click": "this.loadFromCurrentMediaPlayList(this.album_263A3B3A_326A_DD7A_41A4_88CAA612E6D9_AlbumPlayList, -1)",
 "paddingTop": 0,
 "class": "IconButton",
 "transparencyActive": false,
 "shadow": false,
 "visible": false,
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 250,
  "easing": "cubic_in_out"
 },
 "data": {
  "name": "IconButton9293"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "component_EA936C84_F927_1589_41E9_AD88036A9B01",
 "backgroundOpacity": 0,
 "right": 10,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 0,
 "propagateClick": false,
 "top": "45%",
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 250,
  "easing": "cubic_in_out"
 },
 "verticalAlign": "middle",
 "minWidth": 0,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "iconURL": "skin/album_right.png",
 "click": "this.loadFromCurrentMediaPlayList(this.album_263A3B3A_326A_DD7A_41A4_88CAA612E6D9_AlbumPlayList, 1)",
 "paddingTop": 0,
 "class": "IconButton",
 "transparencyActive": false,
 "shadow": false,
 "visible": false,
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 250,
  "easing": "cubic_in_out"
 },
 "data": {
  "name": "IconButton9294"
 },
 "cursor": "hand"
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2FBABF32_0FAB_C326_41A6_6E5201897A35_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_33ECA4EE_1319_4FAB_4177_7DFEDC3F259E",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2FBABF32_0FAB_C326_41A6_6E5201897A35_0_HS_5_0.png",
   "class": "ImageResourceLevel",
   "width": 500,
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_251FA416_3256_4B0D_41C2_AAEFD0EBBDEF",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2FBABF32_0FAB_C326_41A6_6E5201897A35_0_HS_6_0.png",
   "class": "ImageResourceLevel",
   "width": 600,
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_251F4417_3256_4B0B_4188_962D50E45860",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2FBA4CAA_0FAB_4526_419C_1A01B06BA5F2_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_31CAE6CE_236A_4C60_41A9_91AEB013BE81",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2FBA4CAA_0FAB_4526_419C_1A01B06BA5F2_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_0843643D_1356_64D7_41A6_F6FE9B8A2252",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2FBA4CAA_0FAB_4526_419C_1A01B06BA5F2_0_HS_6_0.png",
   "class": "ImageResourceLevel",
   "width": 500,
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_25264413_3256_4B0B_41A2_99EE29B67BB7",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2FBA4CAA_0FAB_4526_419C_1A01B06BA5F2_0_HS_8_0.png",
   "class": "ImageResourceLevel",
   "width": 600,
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_25240414_3256_4B0D_41BE_2DF4AC2E28B7",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2F4DB3F5_0FAB_4323_41A1_9616D3077287_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_0840243D_1356_64D7_41A4_7F27A3AA0B3A",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2F4DB3F5_0FAB_4323_41A1_9616D3077287_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_30360B11_236B_C5F2_41AE_D3F798A2204C",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2F4DB3F5_0FAB_4323_41A1_9616D3077287_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_328C1230_2364_AA85_4173_67971DF3C65E",
 "frameCount": 22
},
{
 "class": "PhotoAlbumPlayer",
 "viewerArea": "this.viewer_uidEA900C82_F927_1589_41D4_7EC44B9D96CD",
 "id": "viewer_uidEA900C82_F927_1589_41D4_7EC44B9D96CDPhotoAlbumPlayer"
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "rowCount": 3,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_0C2110F6_1A48_C021_4194_3180B6EBF789_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 300,
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_01758EC4_1ABB_C061_41B2_CE65C0B96252",
 "frameCount": 9
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0C2A3A6E_1A48_C020_41B6_F7DB48EAA229_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_3A56BF75_1A49_C023_419C_6B286E526457",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0C2A3A6E_1A48_C020_41B6_F7DB48EAA229_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_3A591F75_1A49_C023_418D_CB1DA199EB45",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "rowCount": 3,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_0C2A3A6E_1A48_C020_41B6_F7DB48EAA229_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 300,
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_0175DEC4_1ABB_C061_41B3_54937CBD74F0",
 "frameCount": 9
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0C2A3A6E_1A48_C020_41B6_F7DB48EAA229_0_HS_6_0.png",
   "class": "ImageResourceLevel",
   "width": 500,
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_25196419_3256_4B07_4195_93E90077993D",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_0C2A3A6E_1A48_C020_41B6_F7DB48EAA229_0_HS_8_0.png",
   "class": "ImageResourceLevel",
   "width": 600,
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_2517D41A_3256_4B05_41C4_BC869F6EF3AE",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2FBABA98_0FAB_4DE2_41A4_F41F4C69A336_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_0FB3504E_13F2_5CA9_4149_A79A2DC08720",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2FBABA98_0FAB_4DE2_41A4_F41F4C69A336_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_36AA4CBD_237A_FC7D_41B0_9798AFFEFEF6",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2FBABA98_0FAB_4DE2_41A4_F41F4C69A336_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 640,
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_0FB0F04E_13F2_5CA9_41B2_554534D408A3",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2F4B9540_0FAB_C762_41AD_692E126E6290_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_363026CA_232A_4C8D_41B9_270EA5A1B1D8",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2F4B9540_0FAB_C762_41AD_692E126E6290_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_3401C188_235A_C4C4_4178_92546C2E1932",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2F4B9540_0FAB_C762_41AD_692E126E6290_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_0635FF1B_134F_A4C9_41B0_3BDD5F02B006",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1F044C6B_12FB_5FA3_41B2_6838DDBDC3BE_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 640,
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_35FD0F9C_233A_DCB5_41AA_7C085B181256",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1F044C6B_12FB_5FA3_41B2_6838DDBDC3BE_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 640,
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_354B8CB5_2329_FCD0_41AC_AB8162AABB23",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2F299F25_0FAB_4322_41A4_7E7C91C19BB3_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_314639BA_2369_C474_41BD_EC5D834D993F",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2F64D6C9_0FAB_C562_419D_D1F42B2FF9F0_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_0635AF1C_134F_A4CF_41B2_FC23AFC2DD46",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2F64D6C9_0FAB_C562_419D_D1F42B2FF9F0_0_HS_5_0.png",
   "class": "ImageResourceLevel",
   "width": 500,
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_2521A415_3256_4B0F_41A5_348DA01B6C61",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2F64D6C9_0FAB_C562_419D_D1F42B2FF9F0_0_HS_7_0.png",
   "class": "ImageResourceLevel",
   "width": 600,
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_25200415_3256_4B0F_41C6_F9310048D3D7",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2FBA9DCA_0FAB_C766_414D_827A2822C3FA_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_3B551A65_23DA_47BB_41BF_957E8B97A48D",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2FBA9DCA_0FAB_C766_414D_827A2822C3FA_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1000,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_364C30F3_233E_4477_41B7_11F88BC1AC93",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 3,
 "rowCount": 3,
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_00B9BDF2_1A79_4020_41B8_B948F9596DC6_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 300,
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_016A6EC4_1ABB_C061_41B6_3085C769ECEB",
 "frameCount": 9
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1F140574_12F9_49BE_41A1_BBA26E292B88_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 480,
   "height": 420
  }
 ],
 "id": "AnimatedImageResource_3106C383_236C_A981_418C_29427E8C3F72",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1F140574_12F9_49BE_41A1_BBA26E292B88_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 520,
   "height": 360
  }
 ],
 "id": "AnimatedImageResource_3B4A0A67_23DA_4787_4195_C1D5BB5ABFC8",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1F140574_12F9_49BE_41A1_BBA26E292B88_0_HS_7_0.png",
   "class": "ImageResourceLevel",
   "width": 500,
   "height": 750
  }
 ],
 "id": "AnimatedImageResource_251D4417_3256_4B0B_41B7_9645568DE817",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_1F140574_12F9_49BE_41A1_BBA26E292B88_0_HS_9_0.png",
   "class": "ImageResourceLevel",
   "width": 600,
   "height": 900
  }
 ],
 "id": "AnimatedImageResource_251BD418_3256_4B05_41C1_8D9A8D7E4B35",
 "frameCount": 24
},
{
 "id": "Container_13DB15DF_0F5D_471E_41A8_79E9D9C573CB",
 "left": "0%",
 "width": 36,
 "backgroundOpacity": 0.4,
 "overflow": "scroll",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarWidth": 10,
 "propagateClick": true,
 "top": "0%",
 "layout": "absolute",
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarMargin": 2,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "height": "100%",
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Container black"
 },
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 80,
 "maxWidth": 80,
 "id": "IconButton_13DB05DF_0F5D_471E_418D_C767C8FBE4B7",
 "left": 10,
 "width": 50,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_13DB05DF_0F5D_471E_418D_C767C8FBE4B7_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": true,
 "top": "40%",
 "bottom": "40%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "iconURL": "skin/IconButton_13DB05DF_0F5D_471E_418D_C767C8FBE4B7.png",
 "click": "this.setComponentVisibility(this.Container_13D4E5DF_0F5D_471E_419C_8FFB8A90DE9B, true, 0, this.effect_49B5BB1B_570B_6EC6_41BA_9E76A2F95A16, 'showEffect', false); this.setComponentVisibility(this.Container_13DB25DF_0F5D_471E_41A1_CCC80726E2DE, false, 0, this.effect_49353574_570C_A542_41D0_43B05AC58F9B, 'hideEffect', false)",
 "paddingTop": 0,
 "class": "IconButton",
 "transparencyActive": true,
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton arrow"
 },
 "cursor": "hand"
},
{
 "children": [
  "this.Container_13D4C5DF_0F5D_471E_41A2_8C7F645261F7"
 ],
 "id": "Container_13D4D5DF_0F5D_471E_4194_2B78696EF6B1",
 "left": "0%",
 "width": "90%",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "propagateClick": false,
 "top": "0%",
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarMargin": 2,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "height": "100%",
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Container"
 },
 "verticalAlign": "top",
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 50,
 "maxWidth": 50,
 "id": "IconButton_13D505E3_0F5D_4726_41AA_F296B4AE82DA",
 "width": 50,
 "backgroundOpacity": 0,
 "right": 9,
 "rollOverIconURL": "skin/IconButton_13D505E3_0F5D_4726_41AA_F296B4AE82DA_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": true,
 "top": "46.82%",
 "bottom": "47.71%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "iconURL": "skin/IconButton_13D505E3_0F5D_4726_41AA_F296B4AE82DA.png",
 "click": "this.setComponentVisibility(this.Container_13D4E5DF_0F5D_471E_419C_8FFB8A90DE9B, false, 0, this.effect_2C352674_3AA1_EE57_41A1_BD5B5FE304A0, 'hideEffect', false); this.setComponentVisibility(this.Container_13DB25DF_0F5D_471E_41A1_CCC80726E2DE, true, 0, this.effect_4983BDE0_570B_E541_41B3_32D6394D0ACC, 'showEffect', false)",
 "paddingTop": 0,
 "class": "IconButton",
 "transparencyActive": true,
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton collapse"
 },
 "cursor": "hand"
},
{
 "verticalAlign": "top",
 "children": [
  "this.Container_13D4A5DF_0F5D_471E_4196_6FDCD7632042",
  "this.Container_13D585E0_0F5D_4722_41A7_E91504766093",
  "this.Container_13D5F5E1_0F5D_4722_416C_599933653291",
  "this.Image_132B2933_0F5F_4F27_4193_2568F0EBDD98",
  "this.Container_F5378681_F8DF_E9FC_41E5_647D517A8E98"
 ],
 "id": "Container_13D4C5DF_0F5D_471E_41A2_8C7F645261F7",
 "left": "0%",
 "width": "100%",
 "backgroundOpacity": 0.7,
 "overflow": "scroll",
 "paddingRight": 40,
 "paddingLeft": 40,
 "minHeight": 1,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarWidth": 10,
 "propagateClick": true,
 "top": "0%",
 "layout": "absolute",
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 40,
 "height": "100%",
 "paddingTop": 40,
 "class": "Container",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "- Buttons set"
 },
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5
},
{
 "verticalAlign": "middle",
 "children": [
  "this.Container_13D495DF_0F5D_471E_41AB_B38B8BBECE64",
  "this.Button_13D485DF_0F5D_471E_4186_D9958BDAD5FE",
  "this.Container_13D475DF_0F5D_471E_416C_2EB13F41252A",
  "this.Button_13D465DF_0F5D_471E_41A1_81F5CD92C9C7",
  "this.Container_13D445DF_0F5D_471E_419C_99C90BFC3E03",
  "this.Button_13D435DF_0F5D_471E_4185_EF671B67803D",
  "this.Container_13D425E0_0F5D_4722_41A2_9594E5D2AA36",
  "this.Button_13D415E0_0F5D_4722_4183_C4C9A2AFD31C",
  "this.Container_13D405E0_0F5D_4722_41AB_4B1ACB8DFA48",
  "this.Container_13D5D5E0_0F5D_4722_41A2_CE64396702B3",
  "this.Container_13D595E0_0F5D_4722_41A3_8E37D1EF7A90"
 ],
 "id": "Container_13D4A5DF_0F5D_471E_4196_6FDCD7632042",
 "width": "100%",
 "backgroundOpacity": 0,
 "right": "0%",
 "paddingRight": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "layout": "vertical",
 "propagateClick": true,
 "top": "26%",
 "bottom": "26%",
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "-Level 1"
 },
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_13D575E0_0F5D_4722_414B_5E934A73D280",
  "this.HTMLText_13D565E0_0F5D_4722_41A7_A17C25A12945",
  "this.Container_13D545E0_0F5D_4722_4187_465A6D486F8E",
  "this.Container_13D6E5E0_0F5D_4722_419C_F3F7AC1AD14D"
 ],
 "id": "Container_13D585E0_0F5D_4722_41A7_E91504766093",
 "left": "0%",
 "width": "73.064%",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "layout": "vertical",
 "propagateClick": true,
 "scrollBarMargin": 2,
 "bottom": "0%",
 "scrollBarVisible": "rollOver",
 "height": 130,
 "verticalAlign": "bottom",
 "minWidth": 1,
 "gap": 5,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "-Container footer"
 },
 "scrollBarOpacity": 0.5
},
{
 "verticalAlign": "middle",
 "children": [
  "this.Button_13D5E5E1_0F5D_4722_419E_5CCE167BC1E6",
  "this.Container_13D5D5E1_0F5D_4722_419E_594D4BA03CC0",
  "this.Container_13D5C5E1_0F5D_4722_4195_CDCAD6DD0849",
  "this.Button_13D4C5E2_0F5D_4726_419A_2DF8A9282FC0",
  "this.Button_13D4B5E2_0F5D_4726_419E_0F1D5842065F",
  "this.Button_13D4A5E2_0F5D_4726_4152_9A005D95F456",
  "this.Button_13D495E2_0F5D_4726_4141_251B00CB7876"
 ],
 "id": "Container_13D5F5E1_0F5D_4722_416C_599933653291",
 "left": "0%",
 "width": "73.064%",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "layout": "vertical",
 "propagateClick": true,
 "top": "22.46%",
 "bottom": "32.62%",
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "minWidth": 1,
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": false,
 "visible": false,
 "horizontalAlign": "left",
 "data": {
  "name": "-Level 2-3"
 },
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 1089,
 "maxWidth": 1101,
 "id": "Image_132B2933_0F5F_4F27_4193_2568F0EBDD98",
 "left": "0%",
 "width": "100%",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "skin/Image_132B2933_0F5F_4F27_4193_2568F0EBDD98.png",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "top": "1.13%",
 "height": "26.45%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Image",
 "scaleMode": "fit_inside",
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "Image55013"
 }
},
{
 "children": [
  "this.IconButton_2DBA8446_22D7_CF4E_41BA_D8ED6E688EEF"
 ],
 "id": "Container_F5378681_F8DF_E9FC_41E5_647D517A8E98",
 "left": "0.33%",
 "backgroundOpacity": 0,
 "right": "26.6%",
 "paddingRight": 0,
 "overflow": "scroll",
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "propagateClick": false,
 "scrollBarMargin": 2,
 "bottom": "17.24%",
 "height": "5.522%",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Container3218"
 },
 "scrollBarOpacity": 0.5
},
{
 "id": "Container_13D495DF_0F5D_471E_41AB_B38B8BBECE64",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "scrollBarMargin": 2,
 "propagateClick": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "height": 1,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_13D4E5DF_0F5D_471E_419C_8FFB8A90DE9B, false, 0, this.effect_037E9E92_1E09_88C1_41B1_11041AE50781, 'hideEffect', false); this.setComponentVisibility(this.Label_0B01F180_19C7_40E0_41B7_0393C88A3E1B, false, 0, this.effect_037E9E92_1E09_88C1_41B1_11041AE50781, 'hideEffect', false); this.setComponentVisibility(this.Label_0B634445_19CB_4060_41B8_EDD3964C9744, false, 0, this.effect_037E9E92_1E09_88C1_41B1_11041AE50781, 'hideEffect', false); this.setComponentVisibility(this.Label_0DAA94A1_19FB_4020_41AC_FD8C7A105B27, false, 0, this.effect_037E9E92_1E09_88C1_41B1_11041AE50781, 'hideEffect', false); this.setComponentVisibility(this.Label_0A64507B_19CB_4020_41A4_0C7BF6B71113, false, 0, this.effect_037E9E92_1E09_88C1_41B1_11041AE50781, 'hideEffect', false); this.setComponentVisibility(this.Label_00EBB067_1A49_C020_41AB_54606EFF722C, false, 0, this.effect_037E9E92_1E09_88C1_41B1_11041AE50781, 'hideEffect', false); this.setComponentVisibility(this.Container_13DB25DF_0F5D_471E_41A1_CCC80726E2DE, true, 0, this.effect_086FE434_19C9_4020_41B8_F243927DB7C7, 'showEffect', false); this.setComponentVisibility(this.Label_0BB4529A_19B9_C0E0_41B4_3A45B4A93DC8, true, 0, this.effect_086FE434_19C9_4020_41B8_F243927DB7C7, 'showEffect', false); this.mainPlayList.set('selectedIndex', 0)",
 "id": "Button_13D485DF_0F5D_471E_4186_D9958BDAD5FE",
 "width": "100%",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconHeight": 32,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "height": 50,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "VIRTUAL TOUR",
 "fontStyle": "italic",
 "paddingTop": 0,
 "class": "Button",
 "gap": 5,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Button Tour Info"
 },
 "fontWeight": "normal",
 "cursor": "hand",
 "shadowSpread": 1,
 "shadowBlurRadius": 6
},
{
 "id": "Container_13D475DF_0F5D_471E_416C_2EB13F41252A",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "scrollBarMargin": 2,
 "propagateClick": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "height": 1,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_13D4E5DF_0F5D_471E_419C_8FFB8A90DE9B, false, 0, this.effect_02C3A1C9_1E0B_9843_41AD_65C471B904F2, 'hideEffect', false); this.setComponentVisibility(this.Label_0BB4529A_19B9_C0E0_41B4_3A45B4A93DC8, false, 0, this.effect_02C3A1C9_1E0B_9843_41AD_65C471B904F2, 'hideEffect', false); this.setComponentVisibility(this.Label_0B634445_19CB_4060_41B8_EDD3964C9744, false, 0, this.effect_02C3A1C9_1E0B_9843_41AD_65C471B904F2, 'hideEffect', false); this.setComponentVisibility(this.Label_0DAA94A1_19FB_4020_41AC_FD8C7A105B27, false, 0, this.effect_02C3A1C9_1E0B_9843_41AD_65C471B904F2, 'hideEffect', false); this.setComponentVisibility(this.Label_0A64507B_19CB_4020_41A4_0C7BF6B71113, false, 0, this.effect_02C3A1C9_1E0B_9843_41AD_65C471B904F2, 'hideEffect', false); this.setComponentVisibility(this.Label_00EBB067_1A49_C020_41AB_54606EFF722C, false, 0, this.effect_02C3A1C9_1E0B_9843_41AD_65C471B904F2, 'hideEffect', false); this.setComponentVisibility(this.Container_13DB25DF_0F5D_471E_41A1_CCC80726E2DE, true, 0, null, null, false); this.setComponentVisibility(this.Label_0B01F180_19C7_40E0_41B7_0393C88A3E1B, true, 0, null, null, false); this.mainPlayList.set('selectedIndex', 1)",
 "id": "Button_13D465DF_0F5D_471E_41A1_81F5CD92C9C7",
 "width": "100%",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconHeight": 32,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "height": 50,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "PRODI",
 "fontStyle": "italic",
 "paddingTop": 0,
 "class": "Button",
 "gap": 23,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Button Panorama List"
 },
 "fontWeight": "normal",
 "cursor": "hand",
 "shadowSpread": 1,
 "shadowBlurRadius": 6
},
{
 "id": "Container_13D445DF_0F5D_471E_419C_99C90BFC3E03",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "scrollBarMargin": 2,
 "propagateClick": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "height": 1,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_13D4A5DF_0F5D_471E_4196_6FDCD7632042, false, 0, this.effect_112869ED_311E_0034_41C2_70A247245BB7, 'hideEffect', false); this.setComponentVisibility(this.Container_13D5F5E1_0F5D_4722_416C_599933653291, true, 0, this.effect_18BBC752_310E_006C_41B5_0D8B802FB057, 'showEffect', false)",
 "pressedLabel": "Inserdt Text",
 "id": "Button_13D435DF_0F5D_471E_4185_EF671B67803D",
 "width": "100%",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconHeight": 32,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "height": 50,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "LAB >",
 "fontStyle": "italic",
 "paddingTop": 0,
 "class": "Button",
 "gap": 5,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Button Location"
 },
 "fontWeight": "normal",
 "cursor": "hand",
 "shadowSpread": 1,
 "shadowBlurRadius": 6
},
{
 "id": "Container_13D425E0_0F5D_4722_41A2_9594E5D2AA36",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "scrollBarMargin": 2,
 "propagateClick": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "height": 1,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_13D4E5DF_0F5D_471E_419C_8FFB8A90DE9B, false, 0, this.effect_030CF946_1E08_8841_419A_D665C0FA63C6, 'hideEffect', false); this.setComponentVisibility(this.Label_0BB4529A_19B9_C0E0_41B4_3A45B4A93DC8, false, 0, this.effect_030CF946_1E08_8841_419A_D665C0FA63C6, 'hideEffect', false); this.setComponentVisibility(this.Label_0B01F180_19C7_40E0_41B7_0393C88A3E1B, false, 0, this.effect_030CF946_1E08_8841_419A_D665C0FA63C6, 'hideEffect', false); this.setComponentVisibility(this.Label_0DAA94A1_19FB_4020_41AC_FD8C7A105B27, false, 0, this.effect_030CF946_1E08_8841_419A_D665C0FA63C6, 'hideEffect', false); this.setComponentVisibility(this.Label_0A64507B_19CB_4020_41A4_0C7BF6B71113, false, 0, this.effect_030CF946_1E08_8841_419A_D665C0FA63C6, 'hideEffect', false); this.setComponentVisibility(this.Label_00EBB067_1A49_C020_41AB_54606EFF722C, false, 0, this.effect_030CF946_1E08_8841_419A_D665C0FA63C6, 'hideEffect', false); this.setComponentVisibility(this.Container_13DB25DF_0F5D_471E_41A1_CCC80726E2DE, true, 0, null, null, false); this.setComponentVisibility(this.Label_0B634445_19CB_4060_41B8_EDD3964C9744, true, 0, null, null, false); this.mainPlayList.set('selectedIndex', 2)",
 "id": "Button_13D415E0_0F5D_4722_4183_C4C9A2AFD31C",
 "width": "100%",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconHeight": 32,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "height": 50,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "KELAS",
 "fontStyle": "italic",
 "paddingTop": 0,
 "class": "Button",
 "gap": 5,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Button Floorplan"
 },
 "fontWeight": "normal",
 "cursor": "hand",
 "shadowSpread": 1,
 "shadowBlurRadius": 6
},
{
 "id": "Container_13D405E0_0F5D_4722_41AB_4B1ACB8DFA48",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "scrollBarMargin": 2,
 "propagateClick": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "height": 1,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "scrollBarOpacity": 0.5
},
{
 "id": "Container_13D5D5E0_0F5D_4722_41A2_CE64396702B3",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "scrollBarMargin": 2,
 "propagateClick": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "height": 1,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "scrollBarOpacity": 0.5
},
{
 "id": "Container_13D595E0_0F5D_4722_41A3_8E37D1EF7A90",
 "width": "100%",
 "backgroundOpacity": 0.3,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "scrollBarMargin": 2,
 "propagateClick": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "height": 1,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "scrollBarOpacity": 0.5
},
{
 "id": "Container_13D575E0_0F5D_4722_414B_5E934A73D280",
 "width": 40,
 "backgroundOpacity": 1,
 "overflow": "visible",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0
 ],
 "layout": "horizontal",
 "scrollBarMargin": 2,
 "propagateClick": true,
 "backgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "height": 2,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "blue line"
 },
 "scrollBarOpacity": 0.5
},
{
 "id": "HTMLText_13D565E0_0F5D_4722_41A7_A17C25A12945",
 "width": "100%",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "height": 78,
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Company Name</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>info@loremipsum.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV></div>",
 "scrollBarColor": "#000000",
 "shadow": false,
 "visible": false,
 "data": {
  "name": "HTMLText47602"
 },
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.IconButton_13D535E0_0F5D_4722_417B_CB08AEA287F0",
  "this.IconButton_13D525E0_0F5D_4722_4172_D092E2AE8F58",
  "this.IconButton_13D515E0_0F5D_4722_4198_8C6CAAE8FED2"
 ],
 "id": "Container_13D545E0_0F5D_4722_4187_465A6D486F8E",
 "width": "100%",
 "backgroundOpacity": 0,
 "overflow": "visible",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "layout": "horizontal",
 "propagateClick": false,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "height": 56,
 "verticalAlign": "bottom",
 "minWidth": 1,
 "gap": 7,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "-Container Icons 1"
 },
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.IconButton_13D4B5E0_0F5D_4722_419C_382779671AB8",
  "this.IconButton_13D4A5E0_0F5D_4722_41A3_6B83163CB2CA",
  "this.Image_6A71BBCD_65CF_A74B_41D4_BB96B3C8E541"
 ],
 "id": "Container_13D6E5E0_0F5D_4722_419C_F3F7AC1AD14D",
 "width": "100%",
 "backgroundOpacity": 0,
 "overflow": "visible",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "layout": "horizontal",
 "propagateClick": false,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "height": 44,
 "verticalAlign": "top",
 "minWidth": 1,
 "gap": 7,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "-Container Icons 2"
 },
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "gap": 5,
 "id": "Button_13D5E5E1_0F5D_4722_419E_5CCE167BC1E6",
 "width": "100%",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "rollOverFontFamily": "Oswald",
 "click": "this.setComponentVisibility(this.Container_13D5F5E1_0F5D_4722_416C_599933653291, false, 0, this.effect_27C1F008_310D_FFFB_41A2_B5C1794EE5C9, 'hideEffect', false); this.setComponentVisibility(this.Container_13D4A5DF_0F5D_471E_4196_6FDCD7632042, true, 0, this.effect_268FAF4D_310E_0075_4179_B2B3CFC7C47E, 'showEffect', false)",
 "iconHeight": 30,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 5,
 "minHeight": 1,
 "rollOverIconURL": "skin/Button_13D5E5E1_0F5D_4722_419E_5CCE167BC1E6_rollover.png",
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "height": 50,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "fontSize": 18,
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "BACK",
 "fontStyle": "italic",
 "paddingTop": 0,
 "class": "Button",
 "rollOverFontSize": 18,
 "iconWidth": 30,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "horizontalAlign": "left",
 "iconURL": "skin/Button_13D5E5E1_0F5D_4722_419E_5CCE167BC1E6.png",
 "data": {
  "name": "Button <BACK"
 },
 "fontWeight": "normal",
 "cursor": "hand",
 "shadowSpread": 1,
 "shadowBlurRadius": 6
},
{
 "id": "Container_13D5D5E1_0F5D_4722_419E_594D4BA03CC0",
 "width": "100%",
 "backgroundOpacity": 0.5,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "absolute",
 "scrollBarMargin": 2,
 "propagateClick": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "height": 1,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "backgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "line"
 },
 "scrollBarOpacity": 0.5
},
{
 "id": "Container_13D5C5E1_0F5D_4722_4195_CDCAD6DD0849",
 "width": "100%",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "layout": "absolute",
 "propagateClick": true,
 "scrollBarMargin": 2,
 "scrollBarVisible": "rollOver",
 "height": 8,
 "verticalAlign": "top",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Container",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "line separator"
 },
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_13DB25DF_0F5D_471E_41A1_CCC80726E2DE, true, 0, this.effect_0B0F0235_19C9_4020_41A3_7E5AEFDE6436, 'showEffect', false); this.setComponentVisibility(this.Label_0A64507B_19CB_4020_41A4_0C7BF6B71113, true, 0, this.effect_0B0F0235_19C9_4020_41A3_7E5AEFDE6436, 'showEffect', false); this.setComponentVisibility(this.Container_13D4E5DF_0F5D_471E_419C_8FFB8A90DE9B, false, 0, this.effect_027037E0_1E17_9841_4193_482DE9D8B54F, 'hideEffect', false); this.setComponentVisibility(this.Label_0BB4529A_19B9_C0E0_41B4_3A45B4A93DC8, false, 0, this.effect_027037E0_1E17_9841_4193_482DE9D8B54F, 'hideEffect', false); this.setComponentVisibility(this.Label_0B01F180_19C7_40E0_41B7_0393C88A3E1B, false, 0, this.effect_027037E0_1E17_9841_4193_482DE9D8B54F, 'hideEffect', false); this.setComponentVisibility(this.Label_0B634445_19CB_4060_41B8_EDD3964C9744, false, 0, this.effect_027037E0_1E17_9841_4193_482DE9D8B54F, 'hideEffect', false); this.setComponentVisibility(this.Label_0DAA94A1_19FB_4020_41AC_FD8C7A105B27, false, 0, this.effect_027037E0_1E17_9841_4193_482DE9D8B54F, 'hideEffect', false); this.setComponentVisibility(this.Label_00EBB067_1A49_C020_41AB_54606EFF722C, false, 0, this.effect_027037E0_1E17_9841_4193_482DE9D8B54F, 'hideEffect', false); this.mainPlayList.set('selectedIndex', 10)",
 "id": "Button_13D4C5E2_0F5D_4726_419A_2DF8A9282FC0",
 "width": "100%",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconHeight": 32,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "fontSize": "16px",
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "Lab Komputer Lanjut",
 "fontStyle": "italic",
 "paddingTop": 0,
 "class": "Button",
 "gap": 5,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 7"
 },
 "fontWeight": "normal",
 "cursor": "hand",
 "shadowSpread": 1,
 "shadowBlurRadius": 6
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_13DB25DF_0F5D_471E_41A1_CCC80726E2DE, true, 0, this.effect_00AB7156_1A49_C061_41A4_FF7B1FEB4EA8, 'showEffect', false); this.setComponentVisibility(this.Label_00EBB067_1A49_C020_41AB_54606EFF722C, true, 0, this.effect_00AB7156_1A49_C061_41A4_FF7B1FEB4EA8, 'showEffect', false); this.setComponentVisibility(this.Container_13D4E5DF_0F5D_471E_419C_8FFB8A90DE9B, false, 0, this.effect_039C1898_1E18_88C1_419F_9737B1E71516, 'hideEffect', false); this.setComponentVisibility(this.Label_0BB4529A_19B9_C0E0_41B4_3A45B4A93DC8, false, 0, this.effect_039C1898_1E18_88C1_419F_9737B1E71516, 'hideEffect', false); this.setComponentVisibility(this.Label_0B01F180_19C7_40E0_41B7_0393C88A3E1B, false, 0, this.effect_039C1898_1E18_88C1_419F_9737B1E71516, 'hideEffect', false); this.setComponentVisibility(this.Label_0B634445_19CB_4060_41B8_EDD3964C9744, false, 0, this.effect_039C1898_1E18_88C1_419F_9737B1E71516, 'hideEffect', false); this.setComponentVisibility(this.Label_0DAA94A1_19FB_4020_41AC_FD8C7A105B27, false, 0, this.effect_039C1898_1E18_88C1_419F_9737B1E71516, 'hideEffect', false); this.setComponentVisibility(this.Label_0A64507B_19CB_4020_41A4_0C7BF6B71113, false, 0, this.effect_039C1898_1E18_88C1_419F_9737B1E71516, 'hideEffect', false); this.mainPlayList.set('selectedIndex', 13)",
 "id": "Button_13D4B5E2_0F5D_4726_419E_0F1D5842065F",
 "width": "100%",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconHeight": 32,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "fontSize": "16px",
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "Lab IOT   ",
 "fontStyle": "italic",
 "paddingTop": 0,
 "class": "Button",
 "gap": 5,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 8"
 },
 "fontWeight": "normal",
 "cursor": "hand",
 "shadowSpread": 1,
 "shadowBlurRadius": 6
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_13DB25DF_0F5D_471E_41A1_CCC80726E2DE, true, 0, this.effect_0B3DC1E4_19FF_C020_41A1_140B6B68B1B0, 'showEffect', false); this.setComponentVisibility(this.Label_0DAA94A1_19FB_4020_41AC_FD8C7A105B27, true, 0, this.effect_0B3DC1E4_19FF_C020_41A1_140B6B68B1B0, 'showEffect', false); this.setComponentVisibility(this.Container_13D4E5DF_0F5D_471E_419C_8FFB8A90DE9B, false, 0, this.effect_03089C40_1E09_8841_41A0_169B9C5C5955, 'hideEffect', false); this.setComponentVisibility(this.Label_0BB4529A_19B9_C0E0_41B4_3A45B4A93DC8, false, 0, this.effect_03089C40_1E09_8841_41A0_169B9C5C5955, 'hideEffect', false); this.setComponentVisibility(this.Label_0B01F180_19C7_40E0_41B7_0393C88A3E1B, false, 0, this.effect_03089C40_1E09_8841_41A0_169B9C5C5955, 'hideEffect', false); this.setComponentVisibility(this.Label_0B634445_19CB_4060_41B8_EDD3964C9744, false, 0, this.effect_03089C40_1E09_8841_41A0_169B9C5C5955, 'hideEffect', false); this.setComponentVisibility(this.Label_0A64507B_19CB_4020_41A4_0C7BF6B71113, false, 0, this.effect_03089C40_1E09_8841_41A0_169B9C5C5955, 'hideEffect', false); this.setComponentVisibility(this.Label_00EBB067_1A49_C020_41AB_54606EFF722C, false, 0, this.effect_03089C40_1E09_8841_41A0_169B9C5C5955, 'hideEffect', false); this.mainPlayList.set('selectedIndex', 9)",
 "id": "Button_13D4A5E2_0F5D_4726_4152_9A005D95F456",
 "width": "100%",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconHeight": 32,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "fontSize": "16px",
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "Lab Komputer Dasar",
 "fontStyle": "italic",
 "paddingTop": 0,
 "class": "Button",
 "gap": 5,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 9"
 },
 "fontWeight": "normal",
 "cursor": "hand",
 "shadowSpread": 1,
 "shadowBlurRadius": 6
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "fontColor": "#FFFFFF",
 "click": "this.setComponentVisibility(this.Container_13DB25DF_0F5D_471E_41A1_CCC80726E2DE, true, 0, this.effect_B408C7EA_9491_7855_41DD_127E3B34D959, 'showEffect', false); this.setComponentVisibility(this.Container_13D4E5DF_0F5D_471E_419C_8FFB8A90DE9B, false, 0, this.effect_F7B8D586_F8EB_2B04_41CA_003F7635BB63, 'hideEffect', false); this.setComponentVisibility(this.Label_0BB4529A_19B9_C0E0_41B4_3A45B4A93DC8, false, 0, this.effect_F7B8D586_F8EB_2B04_41CA_003F7635BB63, 'hideEffect', false); this.setComponentVisibility(this.Label_0B01F180_19C7_40E0_41B7_0393C88A3E1B, false, 0, this.effect_F7B8D586_F8EB_2B04_41CA_003F7635BB63, 'hideEffect', false); this.setComponentVisibility(this.Label_0B634445_19CB_4060_41B8_EDD3964C9744, false, 0, this.effect_F7B8D586_F8EB_2B04_41CA_003F7635BB63, 'hideEffect', false); this.setComponentVisibility(this.Label_0DAA94A1_19FB_4020_41AC_FD8C7A105B27, false, 0, this.effect_F7B8D586_F8EB_2B04_41CA_003F7635BB63, 'hideEffect', false); this.setComponentVisibility(this.Label_0A64507B_19CB_4020_41A4_0C7BF6B71113, false, 0, this.effect_F7B8D586_F8EB_2B04_41CA_003F7635BB63, 'hideEffect', false); this.setComponentVisibility(this.Label_00EBB067_1A49_C020_41AB_54606EFF722C, false, 0, this.effect_F7B8D586_F8EB_2B04_41CA_003F7635BB63, 'hideEffect', false); this.mainPlayList.set('selectedIndex', 6)",
 "id": "Button_13D495E2_0F5D_4726_4141_251B00CB7876",
 "width": "100%",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "iconHeight": 32,
 "paddingRight": 0,
 "borderRadius": 0,
 "paddingLeft": 10,
 "minHeight": 1,
 "backgroundColorRatios": [
  0,
  1
 ],
 "layout": "horizontal",
 "propagateClick": true,
 "verticalAlign": "middle",
 "iconBeforeLabel": true,
 "height": 36,
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "fontSize": "16px",
 "borderSize": 0,
 "paddingBottom": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "label": "Lab Ujikom",
 "fontStyle": "italic",
 "paddingTop": 0,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "class": "Button",
 "gap": 5,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverBackgroundOpacity": 0.8,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Button text 10"
 },
 "fontWeight": "normal",
 "pressedBackgroundColorRatios": [
  0
 ],
 "cursor": "hand",
 "shadowSpread": 1,
 "shadowBlurRadius": 6
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_13D535E0_0F5D_4722_417B_CB08AEA287F0",
 "width": 44,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_13D535E0_0F5D_4722_417B_CB08AEA287F0_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 44,
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "iconURL": "skin/IconButton_13D535E0_0F5D_4722_417B_CB08AEA287F0.png",
 "click": "this.showWindow(this.window_0E4D24DA_1DCD_6AB8_4194_2D0FF1226861, null, false)",
 "paddingTop": 0,
 "class": "IconButton",
 "transparencyActive": true,
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Info"
 },
 "cursor": "hand"
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_13D525E0_0F5D_4722_4172_D092E2AE8F58",
 "width": 44,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_13D525E0_0F5D_4722_4172_D092E2AE8F58_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 44,
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "iconURL": "skin/IconButton_13D525E0_0F5D_4722_4172_D092E2AE8F58.png",
 "click": "this.setComponentVisibility(this.ThumbnailList_13597A7A_1D4B_FE0C_41B0_B45120DB2B4F, true, 0, null, null, false); this.setComponentVisibility(this.IconButton_120FFF40_1D4F_167C_419F_CC1AC516C6E2, true, 0, null, null, false); this.setComponentVisibility(this.Container_13D585E0_0F5D_4722_41A7_E91504766093, false, 0, null, null, false)",
 "paddingTop": 0,
 "class": "IconButton",
 "transparencyActive": false,
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Thumblist"
 },
 "cursor": "hand"
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_13D515E0_0F5D_4722_4198_8C6CAAE8FED2",
 "width": 44,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_13D515E0_0F5D_4722_4198_8C6CAAE8FED2_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 44,
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "iconURL": "skin/IconButton_13D515E0_0F5D_4722_4198_8C6CAAE8FED2.png",
 "click": "this.openLink('https://www.google.co.id/maps/search/Universitas+Muhammadiyah+Sukabumi,+Cikole,+Sukabumi+City,+Jawa+Barat/@-6.9186145,106.9334578,19z?entry=ttu', '_blank')",
 "paddingTop": 0,
 "class": "IconButton",
 "transparencyActive": false,
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Location"
 },
 "cursor": "hand"
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_13D4B5E0_0F5D_4722_419C_382779671AB8",
 "width": 44,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_13D4B5E0_0F5D_4722_419C_382779671AB8_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 44,
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_13D4B5E0_0F5D_4722_419C_382779671AB8_pressed.png",
 "iconURL": "skin/IconButton_13D4B5E0_0F5D_4722_419C_382779671AB8.png",
 "click": "this.showWindow(this.window_096E156B_1E17_9847_419B_DD8B1B367B20, null, false)",
 "paddingTop": 0,
 "class": "IconButton",
 "transparencyActive": false,
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Realtor"
 },
 "cursor": "hand",
 "pressedRollOverIconURL": "skin/IconButton_13D4B5E0_0F5D_4722_419C_382779671AB8_pressed_rollover.png"
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_13D4A5E0_0F5D_4722_41A3_6B83163CB2CA",
 "width": 44,
 "backgroundOpacity": 0,
 "rollOverIconURL": "skin/IconButton_13D4A5E0_0F5D_4722_41A3_6B83163CB2CA_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 44,
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "iconURL": "skin/IconButton_13D4A5E0_0F5D_4722_41A3_6B83163CB2CA.png",
 "click": "this.openLink('https://youtube.com/@teknikinformatikaummioffic9863?si=MtMs5H7V5ITPj19h ', '_blank')",
 "paddingTop": 0,
 "class": "IconButton",
 "transparencyActive": false,
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "IconButton Video"
 },
 "cursor": "hand"
},
{
 "maxHeight": 229,
 "maxWidth": 226,
 "id": "Image_6A71BBCD_65CF_A74B_41D4_BB96B3C8E541",
 "width": 44.2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "skin/Image_6A71BBCD_65CF_A74B_41D4_BB96B3C8E541.png",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "click": "this.openLink('https://forms.gle/66cuh5vvfRu58JKbA', '_blank')",
 "paddingTop": 0,
 "class": "Image",
 "scaleMode": "fit_inside",
 "shadow": false,
 "horizontalAlign": "center",
 "data": {
  "name": "Image3954"
 },
 "cursor": "hand"
}],
 "scrollBarMargin": 2,
 "propagateClick": false,
 "layout": "absolute",
 "vrPolyfillScale": 0.5,
 "verticalAlign": "top",
 "minWidth": 20,
 "mobileMipmappingEnabled": false,
 "desktopMipmappingEnabled": false,
 "scrollBarVisible": "rollOver",
 "backgroundPreloadEnabled": true,
 "borderSize": 0,
 "paddingBottom": 0,
 "height": "100%",
 "gap": 10,
 "paddingTop": 0,
 "class": "Player",
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "data": {
  "name": "Player450"
 },
 "scripts": {
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "unregisterKey": function(key){  delete window[key]; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "registerKey": function(key, value){  window[key] = value; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getKey": function(key){  return window[key]; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "existsKey": function(key){  return key in window; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } }
 },
 "downloadEnabled": false,
 "defaultVRPointer": "laser",
 "buttonToggleMute": "this.IconButton_2DBA8446_22D7_CF4E_41BA_D8ED6E688EEF",
 "scrollBarOpacity": 0.5
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
