const path = require("path");
// const selfSignedCert = require("self-signed-cert");
const htmlWebpackPlugin = require("html-webpack-plugin");
const isProduction = process.env.NODE_ENV === "production";
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const FontfacegenWebpackPlugin = require("./plugins/fontfacegen-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");
const ReplaceImgWithPicturePlugin = require("./plugins/replace-img-with-picture");
const HtmlCriticalWebpackPlugin = require("html-critical-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  mode: isProduction ? "production" : "development",
  devtool: isProduction ? false : "inline-source-map",
  entry: isProduction
    ? {
        filename: path.resolve(__dirname, "src/index.tsx"),
        styles: path.resolve(__dirname, "src/styles/main.scss"),
      }
    : { filename: path.resolve(__dirname, "src/index.tsx") },
  output: {
    filename: "[name][contenthash].js",
    path: path.resolve(__dirname, "docs"),
    chunkFilename: "[name].[chunkhash].js",
    assetModuleFilename: (pathData) => {
      return `img/${pathData.filename.split("src/assets/img")[1].slice(1)}`;
    },
  },

  optimization: isProduction
    ? {
        minimize: true,
        runtimeChunk: "single",
        removeAvailableModules: true, // Видаляє модулі, які вже не потрібні
        removeEmptyChunks: true, // Видаляє порожні бандли
        concatenateModules: true, // Вмикає об'єднання модулів
        moduleIds: "deterministic", // Встановлює стабільні імена модулів
        splitChunks: {
          chunks: "all",
          // maxInitialRequests: Infinity,
          maxInitialRequests: 8,
          minSize: 20000,
          maxSize: 100000,
          minChunks: 2,
          maxAsyncRequests: 30,
          maxInitialRequests: 30,
          enforceSizeThreshold: 50000,
          cacheGroups: {
            styles: {
              test: /\.(css|scss)$/,
              chunks: "all",
              enforce: true,
              reuseExistingChunk: true,
            },
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              priority: -10,
              reuseExistingChunk: true,
              name(module) {
                const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
                return `npm.${packageName.replace("@", "")}`;
              },
            },
            default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true,
            },
          },
        },
        usedExports: true,
        moduleIds: "deterministic",
        minimizer: [
          new TerserPlugin({
            parallel: true,
            terserOptions: {
              compress: {
                drop_console: true, // Видаляє всі виклики console.*.
                dead_code: true, // Видаляє мертвий код, тобто код, який ніколи не буде виконано.
                drop_debugger: true, // Видаляє всі виклики debugger.
                unused: true, // Видаляє невикористовувані змінні та функції.
                collapse_vars: true, // Об'єднує змінні, які використовуються тільки один раз.
                reduce_vars: true, // Оптимізує використання змінних.
                hoist_funs: true, // Піднімає функції на початок контексту (функції чи блоку).
                hoist_vars: true, // Піднімає змінні на початок контексту.
                if_return: true, // Оптимізує умови, видаляючи непотрібні else.
                join_vars: true, // Об'єднує змінні, які можуть бути оголошені разом.
                sequences: true, // Злиття виразів в єдині ланцюжки.
                booleans: true, // Оптимізація логічних значень.
                comparisons: true, // Оптимізація порівнянь.
                inline: true, // Інлайнинг простих функцій та значень, що підвищує продуктивність.
              },
              output: {
                comments: false, // Якщо false, усі коментарі видаляються.
                beautify: false, // Якщо false, вивід стає мінімізованим, без зайвих пробілів або форматування.
              },
            },
            extractComments: false,
          }),
          new CssMinimizerPlugin({
            include: /src/,
            exclude: /node_modules/,
            parallel: true,
            minimizerOptions: {
              preset: [
                "advanced",
                {
                  discardComments: { removeAll: true }, // Видаляє всі коментарі
                  mergeLonghand: true, // Зливає довгі властивості
                  reduceIdents: true, // Скорочує ідентифікатори
                  mergeRules: true, // Об'єднує схожі правила
                  removeEmpty: true, // Видаляє порожні блоки CSS
                  normalizeWhitespace: true, // Оптимізує пробіли
                  reduceTransforms: true, // Оптимізує CSS-трансформації
                  convertValues: true, // Оптимізує CSS-значення
                },
              ],
            },
          }),
        ],
      }
    : {},
  performance: {
    hints: false,
    // hints: 'warning',
    // hints: "error",
    maxAssetSize: 512000,
    maxEntrypointSize: 512000,
  },
  devServer: {
    port: 3000,
    compress: true,
    hot: true,
    static: {
      directory: path.join(__dirname, "docs"),
    },
    historyApiFallback: true,
    // https: {
    //   key: selfSignedCert.key,
    //   cert: selfSignedCert.cert,
    // },
    // http2: true,
  },

  module: {
    rules: [
      {
        test: /\.(jsx|js)?$/,
        use: {
          loader: "babel-loader",
          options: {
            compact: isProduction ? true : false,
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(tsx|ts)?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              compact: isProduction ? true : false,
            },
          },
          "ts-loader",
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: isProduction ? true : false,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                path: path.resolve(__dirname, "postcss.config.js"),
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: isProduction ? true : false,
            },
          },
        ],
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[name][ext]",
        },
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: (pathData) => {
            return `img/${pathData.filename.split("src/assets/img")[1].slice(1)}`;
          },
        },
      },

      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          sources: {
            list: [
              {
                tag: "img",
                attribute: "src",
                type: "src",
              },
            ],
          },
        },
      },
    ],
  },

  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
    alias: {
      "@": path.resolve(__dirname, "src/"),
      "@icons": path.resolve(__dirname, "src/assets/img/icons/"),
    },
  },

  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/*", "!fonts/**"],
    }),
    // new FontfacegenWebpackPlugin({
    //   tasks: [path.resolve(__dirname, "src/fonts")],
    // }),
    new ReplaceImgWithPicturePlugin(),
    new htmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html",
      criticalImages: true,
      scriptLoading: "defer",
      // scriptLoading: "blocking",
      // scriptLoading: "module",
      // criticalImages: {
      //   sizes: 200, // для визначення мінімального розміру зображення, який вважається критичним. (пікселів)
      // },
      autoResolveFontExtensions: true,
      // autoResolveFontExtensions: ["woff2", "ttf", "eot"],
    }),
    new MiniCssExtractPlugin({
      filename: "[name][contenthash].css",
      // chunkFilename: "[id].[contenthash].css", // Ім'я для розділених CSS
    }),
    new ImageMinimizerPlugin({
      minimizer: {
        implementation: ImageMinimizerPlugin.imageminMinify,
        options: {
          // sizes: [ // Генерувати зображення розміром 300 пікселів для екранів шириною 640 пікселів або менше
          //   [640, 300],
          // ],
          plugins: [
            [
              "gifsicle",
              {
                optimizationLevel: 5,
                interlaced: true,
                colors: 256,
                lossy: 80,
              },
            ],
            [
              "jpegtran",
              {
                progressive: true,
                arithmetic: false,
                copy: "none",
                perfect: false,
              },
            ],
            [
              "optipng",
              {
                optimizationLevel: 5,
                buffer: 4096,
                // bitDepthReduction: true,
                // colorTypeReduction: true,
                // paletteReduction: true,
                // interlaced: true,
                verbose: false,
                idat: 3,
              },
            ],
            [
              "svgo",
              {
                plugins: [
                  {
                    name: "preset-default",
                    params: {
                      overrides: {
                        removeViewBox: false,
                        //   removeDimensions: true,
                        // removeAttrs: { attrs: '(stroke|fill)' },
                        // cleanupIDs: true,
                        // addAttributesToSVGElement: {
                        //   params: {
                        //     attributes: [
                        //       { xmlns: "http://www.w3.org/2000/svg" },
                        //     ],
                        //   },
                        // },
                      },
                    },
                  },
                ],
              },
            ],
          ],
        },
        // filename: "img/[name][ext]",
      },
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "src/assets/img", // шлях до зображень у вашому проекті
          to: "img", // каталог, куди будуть скопійовані зображення в папці виходу
        },
      ],
    }),
    new ImageminWebpWebpackPlugin({
      config: [
        {
          test: /\.(jpe?g|png)/,
          options: {
            quality: 75,
            method: 6,
            alphaQuality: 90,
            filterStrength: 50,
            compression: 6,
            sns: 70,
          },
        },
      ],
    }),
    isProduction
      ? new HtmlCriticalWebpackPlugin({
          base: path.join(path.resolve(__dirname), "docs"),
          src: "index.html",
          dest: "index.html",
          css: ["./src/styles/main.scss"],
          inline: true,
          minify: true,
          extract: false, // CSS буде встроюватися безпосередньо в HTML-файл
          // extract: true, // CSS  буде виділятися в окремий файл
          dimensions: [
            { width: 425, height: 758 }, // Мобільний розмір
            { width: 768, height: 1024 }, // Планшет
            { width: 1200, height: 900 }, // Десктоп
            { width: 1440, height: 1200 },
          ],
        })
      : false,

    new webpack.ProvidePlugin({
      $: "jquery",
      _: "lodash",
      React: "react",
      ReactDOM: "react-dom",
      ReactRouter: "react-router-dom",
      ReactQuery: "react-query",
      Redux: "redux",
      ReactRedux: "react-redux",
      ReduxToolkit: "@reduxjs/toolkit",
      ReactQueryDevtools: "react-query/devtools",
      ReactRouterConfig: "react-router-config",
      useEffect: ["react", "useEffect"],
      useState: ["react", "useState"],
      useContext: ["react", "useContext"],
      useMemo: ["react", "useMemo"],
      useRef: ["react", "useRef"],
      cssModule: "react-css-modules",
      Promise: "bluebird",
      axios: "axios",
      moment: "moment",
      classNames: "classnames",
      MaterialUIIcons: "@material-ui/icons",
    }),
    new FaviconsWebpackPlugin({
      persistentCache: true,
      // logo: "./src/img/webpack.jpg",
      logo: "./src/favicon.png",
      prefix: "img/favicons/",
      emitStats: false,

      favicons: {
        appName: "webpack react",
        appDescription: "webpack react application",
        developerURL: null,
        background: "rgba(0, 0, 0, 0)",
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: false,
          coast: false,
          favicons: true,
          windows: true,
          yandex: false,
        },
      },
    }),
  ],
};
