;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-zan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M880.250038 478.492862c0-44.682665-35.198663-81.045851-79.365582-83.129302l-0.148379-0.199545L574.36028 395.164015c0 0 30.011524-95.577822 32.592302-107.896382 17.229406-68.655659-12.730952-164.112732-91.323938-174.732603-4.427846-0.598634-8.950859-0.832971-13.532201-0.832971-43.276642 0-81.857333 25.072025-99.648534 61.71048-1.50426 3.472078-94.880951 297.92025-94.880951 297.92025l-8.03193 0c0.907673 2.131547 1.294482 4.937452 1.294482 8.606005l0 425.800779c0 2.597151-0.196475 4.755304-0.62831 6.559393l435.966303 0c35.393091-3.637854 64.090691-29.870308 72.256674-63.71616 0.876973-3.631714 0.140193-0.592494 0.140193-0.592494C823.462684 772.264629 878.977046 485.943554 880.250038 478.492862z"  ></path>' +
    '' +
    '<path d="M251.841795 905.738549 251.841795 479.938793c0-3.668553 0.387833-6.473435 1.294482-8.606005l-86.915535 0c-12.410658 0-22.470781 10.060123-22.470781 22.471804l0 396.023592c0 12.409634 10.060123 22.470781 22.470781 22.470781l86.249363 0C252.039293 910.493853 251.841795 908.3357 251.841795 905.738549z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-zan1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M936.897711 427.536306c-14.32731-20.231787-38.858006-32.080649-72.906473-35.217083L640.076492 392.319224l29.78128-204.931393c0.028653-0.152473 3.01773-16.09763-0.576121-34.208103-4.675486-23.563672-17.86488-39.666418-39.198767-47.860031l-0.432859-0.165776-0.396019-0.240477c-0.155543-0.094144-16.567327-9.870812-37.048801-9.870812-20.393469 0-37.725206 9.487072-51.518351 28.199249L362.055454 393.081587l-139.302673-0.00307c-2.839675 0-28.477588 0.401136-53.93847 14.282285-32.686447 17.820877-50.915623 49.350988-54.18304 93.710288l0 310.421982c0 0.273223 0.172939 27.452235 13.625322 54.095036 17.73799 35.129078 49.29266 52.940746 93.789083 52.940746l1.119497-0.004093 501.345336 0.769526c3.922333 0 96.41898-1.213641 127.969557-106.984616l96.54587-308.628126C949.610244 501.225609 959.20067 459.032648 936.897711 427.536306zM221.927997 874.614691c-33.392528-4.618181-48.353264-20.87033-55.024198-33.69031-6.859221-13.184277-6.51846-25.38925-6.42227-27.224038l0-312.323285 0.007163-0.140193c1.600451-29.126364 18.424628-44.503587 32.255635-52.274574 14.70184-8.260128 28.918633-9.742898 29.517267-9.80225l0.503467-0.024559 109.884666 0 0 435.528328L221.927997 874.614691zM905.545656 489.601874l-0.134053 0.51984L806.962384 804.572452c-10.092869 35.328623-32.32215 52.822043-49.197492 61.276598-18.270109 9.153474-34.095539 9.91686-34.760688 9.945513l-0.107447 0.005117-343.083869 0L379.812887 438.568571l189.625802-273.243221c1.452071-2.418073 14.978133-24.101931 33.075303-24.101931 3.465938 0 6.875594 0.792039 10.133801 2.354628 21.153786 10.141988 12.092409 45.149293 10.962679 49.197492L584.301188 439.569364l279.785218 0 0.23843 0.022513c15.464203 1.449002 26.925233 7.049556 34.062793 16.646122C909.178393 470.744387 905.698129 488.838488 905.545656 489.601874z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shoucang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 33.264c-10.211 0-20.421 7.849-28.167 23.543l-101.008 204.665c-15.492 31.39-56.512 61.194-91.153 66.226l-225.86 32.82c-34.642 5.034-42.477 29.143-17.409 53.578l163.435 159.31c25.067 24.435 40.735 72.655 34.817 107.157l-38.582 224.947c-4.29 25.009 5.302 39.717 22.708 39.717 6.607 0 14.343-2.122 22.868-6.604l202.015-106.206c15.492-8.144 35.915-12.218 56.336-12.218s40.844 4.074 56.336 12.218l202.015 106.206c8.527 4.483 16.26 6.604 22.868 6.604 17.403 0 26.996-14.71 22.708-39.717l-38.582-224.948c-5.917-34.502 9.75-82.722 34.817-107.157l163.435-159.31c25.068-24.434 17.233-48.545-17.409-53.578l-225.86-32.82c-34.642-5.034-75.662-34.836-91.153-66.226l-101.008-204.663c-7.746-15.695-17.956-23.543-28.167-23.543v0z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-fill85" viewBox="0 0 1050 1024">' +
    '' +
    '<path d="M939.052 470.424c11.961-12.572 16.369-27.253 12.192-40.268-4.198-13.057-16.39-22.444-33.497-25.734l-204.652-39.066c-18.563-3.375-43.031-21.072-52.375-37.821l-121.331-218.848c-2.805-5.020-8.122-8.142-13.837-8.142-5.78 0-11.053 3.101-13.837 8.122l-121.584 218.805c-9.387 16.811-33.897 34.509-52.566 37.927l-204.925 39.023c-16.854 3.291-28.961 12.656-33.181 25.65-4.239 12.994 0.084 27.675 11.876 40.331l142.425 150.926c12.972 13.711 22.381 42.504 20.145 61.509l-25.882 204.757c-2.342 17.993 3.438 28.92 8.733 34.931 10.673 12.213 29.067 14.723 47.44 6.138l188.747-87.75c16.538-7.741 48.305-7.741 64.948 0l188.642 87.75c7.383 3.459 14.639 5.211 21.516 5.211 10.336 0 19.533-4.029 25.945-11.327 5.294-6.011 11.095-16.938 8.753-34.868l-25.882-204.905c-2.468-18.816 6.961-47.545 20.187-61.488l142.003-150.862zM774.058 599.56c-19.702 20.736-32.253 59.105-28.603 87.244l25.903 204.905c0.802 5.948-0.358 9.050-1.139 9.956-1.561 1.73-6.138 0.295-10.294-1.667l-188.684-87.75c-12.53-5.822-28.814-9.049-45.879-9.049-17.044 0-33.308 3.227-45.794 9.049l-188.767 87.75c-6.644 3.143-9.239 2.89-10.252 1.667-0.802-0.886-1.941-3.986-1.118-10.020l25.861-204.968c3.354-28.414-9.175-66.656-28.539-87.075l-142.32-150.862c-4.788-5.125-5.062-8.333-4.894-8.902 0.211-0.591 2.32-3.017 9.113-4.345l204.715-38.981c27.759-5.063 60.412-28.625 74.355-53.62l107.811-193.936 107.558 193.978c13.922 24.953 46.575 48.516 74.208 53.536l204.483 39.023c6.961 1.329 9.176 3.797 9.323 4.345 0.169 0.506-0.169 3.734-5.041 8.88l-142.003 150.841z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-wo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M505.332 92c-115.829 0-210.053 94.201-210.053 210s94.223 210 210.053 210c115.799 0 210.053-94.201 210.053-210 0-115.801-94.193-210-210.053-210M505.332 572c-148.898 0-270.067-121.14-270.067-270s121.171-270 270.067-270c148.898 0 270.067 121.14 270.067 270 0 148.86-121.171 270-270.067 270z"  ></path>' +
    '' +
    '<path d="M905.615 992h-787.218l35.679-321.18 166.722-66.72 22.326 55.799-133.354 53.28-24.337 218.82h653.143l-24.337-218.82-133.354-53.28 22.326-55.799 166.722 66.72 35.679 321.18z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-aixin" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M512 978.24 109.824 548.864c-76.8-82.624-113.6-166.976-109.44-251.008 5.376-108.8 78.848-174.848 81.984-177.6 58.048-49.536 120.192-74.496 185.088-74.496 111.616 0 201.152 73.664 244.48 117.696 43.456-44.16 132.608-117.696 244.736-117.696 64.896 0 126.976 24.96 184.64 74.112 3.648 3.136 76.992 69.184 82.368 177.984 4.224 83.968-32.64 168.384-109.376 250.88L512 978.24 512 978.24zM128.896 173.888c0 0-54.272 49.856-57.664 128.576C68.48 366.272 98.88 432.896 161.728 500.352L512 874.368l350.336-374.016c62.72-67.52 93.248-134.144 90.368-197.952-3.392-78.656-57.6-128.576-58.24-129.088-43.776-37.376-90.368-56.64-137.856-56.64-119.616 0-215.744 120.512-216.64 121.728l-28.8 36.608L483.392 237.632C483.008 237.12 387.648 116.736 267.392 116.736 219.904 116.736 173.312 136 128.896 173.888L128.896 173.888 128.896 173.888zM128.896 173.888"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-momentmessage" viewBox="0 0 1093 1024">' +
    '' +
    '<path d="M683.866795 819.523891C646.146082 819.523891 589.217417 834.88512 556.647902 853.872196L322.178014 990.561007C257.095339 1028.502221 212.948685 998.764169 223.596681 923.978069L233.650688 853.363712C236.31162 834.674483 223.188685 819.523891 204.301995 819.523891L136.644813 819.523891C61.177958 819.523891 0 758.595925 0 683.27622L0 136.247671C0 61.000158 61.065489 0 136.678673 0L955.587994 0C1031.073553 0 1092.266667 60.927966 1092.266667 136.247671L1092.266667 683.27622C1092.266667 758.523733 1030.922479 819.523891 955.663804 819.523891L683.866795 819.523891ZM239.097173 751.59593C276.887654 751.59593 302.856909 781.566396 297.039394 818.933385L285.439898 893.438976C279.650031 930.628437 300.808772 944.011913 332.254618 923.620181L540.233011 788.752145C571.877956 768.231322 628.248576 751.59593 665.681818 751.59593L956.499797 751.59593C994.138317 751.59593 1024.650377 721.357517 1024.650377 683.589018L1024.650377 136.389291C1024.650377 98.830097 993.928158 68.382379 956.669952 68.382379L136.720009 68.382379C99.175458 68.382379 68.739584 98.620757 68.739584 136.389291L68.739584 683.589018C68.739584 721.148177 98.981649 751.59593 137.165278 751.59593L239.097173 751.59593ZM273.066667 512C310.769289 512 341.333333 481.435955 341.333333 443.733333 341.333333 406.030711 310.769289 375.466667 273.066667 375.466667 235.364045 375.466667 204.8 406.030711 204.8 443.733333 204.8 481.435955 235.364045 512 273.066667 512ZM546.133333 512C583.835955 512 614.4 481.435955 614.4 443.733333 614.4 406.030711 583.835955 375.466667 546.133333 375.466667 508.430711 375.466667 477.866667 406.030711 477.866667 443.733333 477.866667 481.435955 508.430711 512 546.133333 512ZM819.2 512C856.902622 512 887.466667 481.435955 887.466667 443.733333 887.466667 406.030711 856.902622 375.466667 819.2 375.466667 781.497378 375.466667 750.933333 406.030711 750.933333 443.733333 750.933333 481.435955 781.497378 512 819.2 512Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-chuangjianhetou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M937.851 368.832c-11.252 0-20.358 9.125-20.358 20.359v447.88c0 44.971-36.461 81.433-81.433 81.433h-651.462c-44.971 0-81.433-36.461-81.433-81.433v-651.462c0-44.971 36.461-81.433 81.433-81.433h447.881c11.251 0 20.359-9.106 20.359-20.359 0-11.234-9.106-20.358-20.359-20.358h-447.881c-67.457 0-122.149 54.693-122.149 122.149v651.462c0 67.477 54.692 122.149 122.149 122.149h651.462c67.477 0 122.149-54.672 122.149-122.149v-447.88c0-11.234-9.106-20.359-20.359-20.359zM286.39 735.279l173.76-29.803 468.238-468.237c18.428-18.429 29.821-43.876 29.821-71.989 0-56.224-45.568-101.791-101.791-101.791-28.113 0-53.561 11.392-71.97 29.82l-468.238 468.239-29.82 173.76zM813.237 122.069c11.055-11.055 26.324-17.893 43.182-17.893 33.719 0 61.075 27.355 61.075 61.075 0 16.859-6.839 32.147-17.894 43.202l-26.324 26.303-86.364-86.364 26.324-26.324zM758.127 177.178l86.363 86.363-374.877 374.898v-86.383h-86.364l374.878-374.878zM352.99 592.773h75.906v75.906l-91.611 15.707 15.706-91.613z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiaoxi" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M885.443 72.223h-747.892c-75.052 0-135.95 60.962-135.95 136.085v445.337c0 74.985 60.897 135.881 135.95 135.881h382.805c0 0 158.357 128.905 179.841 145.695 21.485 16.715 30.163 12.943 29.878 0-0.214-12.953-0.146-145.695-0.146-145.695h155.513c75.197 0 136.019-60.895 136.019-135.881v-445.337c0.001-75.123-60.822-136.085-136.019-136.085zM292.993 509.3c-40.194 0-72.845-32.509-72.845-72.846 0-40.333 32.651-72.845 72.845-72.845 40.194 0 72.847 32.512 72.847 72.845 0 40.338-32.652 72.846-72.847 72.846zM511.535 509.3c-40.194 0-72.846-32.509-72.846-72.846 0-40.333 32.652-72.845 72.846-72.845 40.194 0 72.847 32.512 72.847 72.845 0 40.338-32.653 72.846-72.847 72.846zM730.076 509.3c-40.191 0-72.845-32.509-72.845-72.846 0-40.333 32.654-72.845 72.845-72.845 40.193 0 72.847 32.512 72.847 72.845 0 40.338-32.655 72.846-72.847 72.846z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-iconwocanyude" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M64 64 64 960 320 960 320 896 128 896 128 128 896 128 896 320 960 320 960 64Z"  ></path>' +
    '' +
    '<path d="M672 524.8m-140.8 0a2.2 2.2 0 1 0 281.6 0 2.2 2.2 0 1 0-281.6 0Z"  ></path>' +
    '' +
    '<path d="M672 672C512 672 384 800 384 960l576 0C960 800 832 672 672 672z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-aixin1" viewBox="0 0 1038 1024">' +
    '' +
    '<path d="M511.197728 980.264916 109.597117 551.500643C32.910551 468.998627-3.837398 384.765177 0.316202 300.857139c5.368264-108.642372 78.735226-174.597527 81.864496-177.347151 57.958016-49.465598 120.016421-74.391291 184.821379-74.391291 111.456465 0 200.862727 73.560366 244.12709 117.523647 43.391253-44.096311 132.415822-117.523647 244.385986-117.523647 64.809051 0 126.799918 24.925692 184.378288 74.005504 3.647063 3.130294 76.882018 69.081355 82.250282 177.728844 4.217045 83.84357-32.589233 168.142511-109.212354 250.517637L511.197728 980.264916 511.197728 980.264916 511.197728 980.264916z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-wocanyu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M849.07008 752.86528l-30.8224-15.67744 26.0864-22.69184c36.97152-32.18944 58.17856-78.75584 58.17856-127.7952 0-93.6704-76.20096-169.87136-169.87136-169.87136s-169.87136 76.20096-169.87136 169.87136c0 48.98816 21.17632 95.56992 58.112 127.81056l25.98912 22.69184-30.75584 15.66208c-79.22688 40.33536-130.3808 119.61344-133.90848 207.26272 1.024 5.10464 5.59616 18.3296 25.56928 18.3296l3.34848 0.11264c16.34816-0.26112 27.22816-18.10432 29.35808-21.90848 18.67264-115.22048 85.00224-176.13312 191.94368-176.13312 108.86144 0 178.9952 62.4384 197.65248 175.872l0.19456 0.58368c2.51904 4.11648 12.59008 18.9952 26.51136 19.87584 3.23584 0.37376 4.76672 0.4864 6.21568 0.4864 13.93664 0 18.49344-12.52352 19.95776-19.68128C979.38432 871.47008 928.24576 793.15456 849.07008 752.86528zM732.75904 702.91456c-64.02048 0-116.11648-52.08064-116.11648-116.096s52.096-116.11648 116.11648-116.11648l0.20992 0c63.90272 0 115.90144 52.096 115.90144 116.11648S796.77952 702.91456 732.75904 702.91456z"  ></path>' +
    '' +
    '<path d="M470.21056 233.6768l-232.69888 0.11264c-25.63584 0-32.39936 19.36896-32.39936 29.60384 0 13.09184 8.48896 28.40064 32.384 28.40064l487.50592 0c23.97696 0 32.9216-18.9184 32.9216-30.83776 0-7.23968-2.69824-13.79328-7.61344-18.47808-5.98528-5.79072-14.47424-8.68352-25.30816-8.68352L470.21056 233.6768z"  ></path>' +
    '' +
    '<path d="M304.91136 908.09856 170.0608 908.09856c-45.184 0-72.15104-26.96704-72.15104-72.1664L97.90976 161.66912c0-60.032 12.1344-72.1664 72.15104-72.1664L792.32 89.50272c54.016 0 73.15968 18.88256 73.15968 72.1664l0 67.42016c0 9.80992 3.4304 18.49344 9.6768 24.42752 9.96864 9.63072 30.56128 9.56416 40.32-0.22528 5.44768-5.44768 8.19712-13.58336 8.18176-24.13568l0-67.4816c0-98.58048-31.91296-130.23232-131.33824-130.23232L170.0608 31.44192c-57.96864 0-130.11968 0-130.11968 127.13984l0.09728 426.496c0 92.33408 0 162.14528 0.32768 272.6144 0 13.71136 1.90464 26.88512 5.49888 38.13888 13.696 42.56256 52.48512 70.16448 98.77504 70.26176l56.17664 0.09728 104.12544-0.32768c6.11328 0 14.592-1.47968 20.63872-8.4736 4.34176-5.00736 6.71744-11.93984 6.71744-19.54816C332.30336 920.33024 321.02912 908.09856 304.91136 908.09856z"  ></path>' +
    '' +
    '<path d="M475.07456 444.66176c-4.10112-4.10112-11.67872-8.6016-26.3168-8.6016L237.49632 436.06016c-25.61536 0-32.384 19.36896-32.384 29.6192 0 10.58816 6.83008 28.49792 32.384 28.49792l212.48512 0c23.89504 0 32.80384-18.89792 32.80384-30.8224C482.78528 456.09472 480.0512 449.44384 475.07456 444.66176z"  ></path>' +
    '' +
    '<path d="M428.16512 655.3088 237.63968 655.3088c-25.61536 0-32.384 19.36896-32.384 29.60384 0 13.14304 8.48896 28.49792 32.384 28.49792l191.744 0c23.9104 0 32.82432-18.89792 32.82432-30.8224 0-7.25504-2.73408-13.90592-7.71072-18.688C448.7424 658.22208 439.70048 655.3088 428.16512 655.3088z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-chuangjian" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 6.297c-273.402 0-495.036 221.636-495.036 495.036s221.636 495.036 495.036 495.036c273.402 0 495.036-221.636 495.036-495.036 0-273.402-221.636-495.036-495.036-495.036zM508.668 808.117c-26.974 0.079-48.908-22.031-48.99-49.234l-0.607-200.565-200.565 0.607c-27.272 0.081-49.446-21.756-49.529-48.69l-0.045-15.93c-0.079-26.974 22.031-48.908 49.234-48.989l200.565-0.607-0.607-200.565c-0.081-27.272 21.756-49.446 48.691-49.529l15.93-0.045c26.974-0.079 48.908 22.031 48.99 49.234l0.607 200.565 200.566-0.607c27.272-0.081 49.447 21.756 49.529 48.691l0.045 15.93c0.079 26.974-22.031 48.908-49.234 48.99l-200.565 0.607 0.606 200.565c0.081 27.272-21.756 49.446-48.691 49.529l-15.93 0.045z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-wps-create" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M119.273 206.546h-87.273v698.182c0 48 39.273 87.273 87.273 87.273h698.182v-87.273h-698.182v-698.182zM904.727 32h-610.909c-48 0-87.273 39.273-87.273 87.273v610.909c0 48 39.273 87.273 87.273 87.273h610.909c48 0 87.273-39.273 87.273-87.273v-610.909c0-48-39.273-87.273-87.273-87.273zM817.454 468.364h-174.546v174.546h-87.273v-174.546h-174.546v-87.273h174.546v-174.546h87.273v174.546h174.546v87.273z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-discover" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M474.417 732.662c0 52.775 42.597 95.724 94.951 95.724 52.345 0 94.951-42.949 94.951-95.724 0-52.775-42.606-95.733-94.951-95.733-52.353 0-94.951 42.957-94.951 95.733zM601.010 732.662c0 17.577-14.211 31.905-31.644 31.905-17.442 0-31.653-14.329-31.653-31.905 0-17.586 14.211-31.914 31.653-31.914 17.433 0 31.644 14.329 31.644 31.914zM711.782 573.11c43.613 0 79.119-35.793 79.119-79.767 0-44.001-35.505-79.767-79.119-79.767s-79.119 35.767-79.119 79.767c0 43.974 35.505 79.776 79.11 79.776zM711.782 477.395c8.729 0 15.822 7.147 15.822 15.948 0 8.811-7.092 15.957-15.822 15.957s-15.822-7.147-15.822-15.957c0-8.802 7.083-15.948 15.822-15.948zM442.772 285.938c0-35.244-28.35-63.81-63.297-63.81-34.956 0-63.297 28.567-63.297 63.81s28.342 63.819 63.297 63.819c34.956 0 63.297-28.575 63.297-63.81z"  ></path>' +
    '' +
    '<path d="M134.361 751.931c-39.312 60.498-63.558 112.86-63.522 148.535 0 22.905 9.209 36.819 16.928 44.442 37.665 37.269 108.81 3.195 159.003-25.587 15.165-8.711 20.475-28.206 11.835-43.524-5.506-9.681-15.751-16.101-27.497-16.101-5.765 0-11.169 1.548-15.818 4.25-48.72 27.999-72.3 32.914-81.443 33.517 1.503-41.257 94.293-201.852 326.583-432.261 223.875-222.083 394.272-323.73 437.382-324.45-0.953 11.34-8.676 44.325-57.888 118.35-1.297 1.89-2.377 3.961-3.195 6.128l-2.277 5.903c-0.252 0.639-0.289 1.35-0.514 2.017-8.703 10.206-10.691 25.020-3.348 37.133 34.706 56.662 55.26 125.252 55.26 198.643 0 0.132 0 0.263 0 0.395 0 211.119-170.37 382.875-379.782 382.875-58.644 0-114.822-13.077-167.014-38.925-4.064-2.046-8.857-3.243-13.929-3.243-12.442 0-23.203 7.207-28.333 17.671-2.127 4.286-3.323 9.118-3.323 14.228 0 12.469 7.123 23.275 17.522 28.569 61.138 30.233 126.722 45.516 195.077 45.516 244.323 0 443.070-200.385 443.070-446.715-0.029-79.281-20.593-153.753-56.661-218.393 1.401 1.799 1.851 1.324 2.003 0.746 67.356-102.042 83.142-164.933 49.789-197.929-10.89-10.755-25.354-15.543-42.597-15.543-38.898 0-91.845 24.857-148.436 60.723-73.197-49.806-158.111-76.32-247.167-76.32-244.332 0-443.078 200.385-443.078 446.715 0 86.886 24.813 170.262 71.37 242.631zM506.060 126.395c0.129 0 0.283 0 0.437 0 69.785 0 135.106 19.1 191.024 52.357-128.604 91.041-257.324 216.986-281.46 240.981-88.173 87.462-176.598 186.507-241.956 275.175-30.090-53.43-47.817-117.295-47.817-185.302 0-0.107 0-0.215 0-0.322 0-211.122 170.37-382.887 379.782-382.887z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)