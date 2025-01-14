const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const sourcemaps = require("gulp-sourcemaps");
const notify = require("gulp-notify");
const plumber = require("gulp-plumber");
const pug = require("gulp-pug");
const del = require("del");
const gcmq = require("gulp-group-css-media-queries");
const formatHtml = require("gulp-format-html");
const webp = require("gulp-webp");

// Общая функция для обработки ошибок
function handleError(taskName) {
  return plumber({
    errorHandler: notify.onError((err) => ({
      title: taskName,
      sound: false,
      message: err.message,
    })),
  });
}

// Таски для Pug
gulp.task("pug", () =>
  gulp
    .src("./src/pug/pages/**/*.pug")
    .pipe(handleError("Pug"))
    .pipe(pug({ pretty: "\t" }))
    .pipe(gulp.dest("./build/"))
    .pipe(browserSync.stream())
);

gulp.task("pugUi", () =>
  gulp
    .src("./src/pug/ui/**/*.pug")
    .pipe(handleError("Pug UI"))
    .pipe(pug({ pretty: "\t" }))
    .pipe(gulp.dest("./build/ui/"))
    .pipe(browserSync.stream())
);

// Таск для SCSS
gulp.task("scss", () =>
  gulp
    .src("./src/scss/main.scss")
    .pipe(handleError("SCSS"))
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(autoprefixer({ overrideBrowserslist: ["last 4 versions"] }))
    .pipe(gcmq())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./build/css/"))
    .pipe(browserSync.stream())
);

// Таск для копирования файлов
function copyTask(src, dest) {
  return gulp.src(src).pipe(gulp.dest(dest));
}

gulp.task("copy:img", () => copyTask("./src/img/**/*.*", "./build/img/"));
gulp.task("copy:js", () => copyTask("./src/js/**/*.*", "./build/js/"));
gulp.task("copy:libs", () => copyTask("./src/libs/**/*.*", "./build/libs/"));
gulp.task("copy:video", () => copyTask("./src/video/**/*.*", "./build/video/"));
gulp.task("copy:fonts", () => copyTask("./src/fonts/**/*.*", "./build/fonts/"));

// Задача очистки build
gulp.task("clean:build", () => del("./build"));

// Prettify для HTML
gulp.task("html:prettify", () =>
  gulp
    .src("build/**/*.html")
    .pipe(formatHtml())
    .pipe(gulp.dest("./build/"))
);

// Watch для файлов в src
gulp.task("watch", () => {
  gulp.watch("./src/scss/**/*.scss", gulp.series("scss"));
  gulp.watch("./src/pug/**/*.pug", gulp.series("pug"));
  gulp.watch("./src/pug/ui/**/*.pug", gulp.series("pugUi"));
  gulp.watch("./src/img/**/*.*", gulp.series("copy:img"));
  gulp.watch("./src/js/**/*.*", gulp.series("copy:js"));
  gulp.watch("./src/libs/**/*.*", gulp.series("copy:libs"));
  gulp.watch("./src/video/**/*.*", gulp.series("copy:video"));
  gulp.watch("./src/fonts/**/*.*", gulp.series("copy:fonts"));
});

// Задача для сервера
gulp.task("server", () =>
  browserSync.init({
    server: {
      baseDir: "./build/",
    },
  })
);

// Основной таск
gulp.task(
  "default",
  gulp.series(
    "clean:build",
    gulp.parallel("scss", "pug", "pugUi", "copy:img", "copy:js", "copy:libs", "copy:video", "copy:fonts"),
    "html:prettify",
    gulp.parallel("server", "watch")
  )
);
