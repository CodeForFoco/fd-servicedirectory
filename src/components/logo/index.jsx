import React from "react";
import styled from "styled-components";
import { rem } from "polished";

const SVGWrapper = styled.svg.attrs({
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 192 81",
})(({ color = "currentColor", size }) => ({
  color,
  display: "block",
  width: rem(size),
}));

const Logo = ({ className, size = 192 }) => (
  <SVGWrapper className={className} size={size}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M43.228 34.035c0-1.331-.379-2.22-1.137-2.668-.757-.448-1.754-.671-2.988-.671-.225 0-.537.008-.938.024v6.716h1.106c1.179 0 2.133-.207 2.862-.622.73-.415 1.095-1.341 1.095-2.779zm3.704-.024c0 1.371-.413 2.413-1.239 3.123-.825.711-1.798 1.167-2.916 1.368a19.888 19.888 0 0 1-3.53.302h-1.082v4.362c0 .493.052.875.156 1.147.104.27.329.476.674.616.344.14.87.21 1.575.21v1.133h-8.202v-1.134c.698 0 1.213-.074 1.545-.221.333-.149.55-.358.65-.63.1-.27.15-.644.15-1.12v-10.55c0-.475-.048-.847-.144-1.115-.096-.266-.313-.476-.65-.628-.336-.152-.853-.228-1.55-.228v-1.158l4.653-.123c.24-.009.503-.014.788-.02.284-.003.511-.007.68-.011.168-.004.416-.007.745-.007.409 0 .714.005.914.013.954.041 1.872.136 2.754.283.882.148 1.774.565 2.676 1.251.902.686 1.353 1.731 1.353 3.137zM55.603 41.12c0-1.395-.18-2.447-.541-3.154-.361-.706-1.063-1.06-2.105-1.06-.665 0-1.185.154-1.557.462-.373.308-.634.785-.782 1.43-.148.645-.222 1.48-.222 2.508 0 1.265.164 2.288.493 3.068.328.78 1.046 1.171 2.152 1.171.73 0 1.285-.215 1.666-.647.38-.431.625-.965.733-1.602.109-.637.163-1.362.163-2.175zm3.32.075c0 1.117-.266 2.09-.794 2.92a5.187 5.187 0 0 1-2.147 1.904c-.902.44-1.89.66-2.965.66a6.96 6.96 0 0 1-2.868-.604 5.272 5.272 0 0 1-2.213-1.836c-.573-.822-.86-1.828-.86-3.02 0-1.782.593-3.136 1.78-4.06 1.186-.924 2.598-1.386 4.233-1.386 1.22 0 2.27.246 3.151.739.882.493 1.55 1.154 2.003 1.984.453.83.68 1.73.68 2.699zM74.076 46.198c-.233.017-.637.043-1.215.08-.577.037-1.225.09-1.942.16-.718.07-1.293.15-1.726.24V44.88c-1.034 1.216-2.273 1.824-3.716 1.824-1.05 0-1.828-.23-2.333-.69-.505-.46-.818-.967-.938-1.522a8.396 8.396 0 0 1-.18-1.78v-3.636c0-.484-.029-.84-.085-1.066-.056-.226-.204-.398-.445-.517-.24-.12-.637-.179-1.19-.179v-1.134h4.822v6.79c0 1.397.525 2.095 1.576 2.095.6 0 1.11-.22 1.527-.659.417-.44.737-.86.962-1.263v-4.067c0-.51-.03-.875-.09-1.097-.06-.221-.215-.388-.463-.499-.249-.11-.662-.166-1.239-.166v-1.134h4.895v7.419c0 .386.036.674.108.863.072.189.237.334.493.437.257.103.65.158 1.179.166v1.134zM84.25 43.795v-4.99a6.524 6.524 0 0 0-1.202-1.147c-.465-.345-1.019-.518-1.66-.518-.393 0-.762.111-1.106.333a2.593 2.593 0 0 0-.83.85c-.353.568-.53 1.525-.53 2.872 0 1.364.251 2.39.752 3.08s1.125 1.036 1.87 1.036c.538 0 1.039-.136 1.504-.407.465-.27.865-.64 1.203-1.109zm4.871 2.33c-1.7.073-3.251.258-4.654.554-.112-.247-.185-.678-.216-1.294-1.027.862-2.153 1.294-3.38 1.294-.946 0-1.822-.25-2.628-.752a5.475 5.475 0 0 1-1.924-2.052 5.771 5.771 0 0 1-.716-2.828c0-.633.105-1.261.313-1.886a5.147 5.147 0 0 1 .98-1.718c.445-.522.996-.931 1.654-1.227.657-.295 1.407-.444 2.249-.444.617 0 1.146.079 1.587.235.441.156.794.335 1.059.536.264.201.533.441.806.72v-4.041c0-.55-.045-.945-.133-1.183a.7.7 0 0 0-.499-.456c-.245-.066-.643-.107-1.197-.123v-1.134l4.931-1.06v13.802c0 .592.026 1.003.078 1.232.052.23.199.397.44.5.24.102.657.166 1.25.19v1.134zM100.306 37.72c0 .476-.142.852-.427 1.127-.285.276-.62.413-1.004.413-.457 0-.858-.23-1.203-.69a3.404 3.404 0 0 0-.396-.444c-.105-.09-.253-.135-.445-.135-.626 0-1.113.347-1.462 1.041a4.764 4.764 0 0 0-.523 2.163v2.144c0 .69.086 1.163.259 1.417.172.255.627.382 1.365.382h.637v1.134h-7.468v-1.134h.625c.674 0 1.086-.13 1.239-.394.152-.263.228-.731.228-1.405v-3.598c0-.55-.054-.945-.162-1.184-.108-.238-.303-.396-.583-.474-.281-.078-.73-.117-1.347-.117v-1.133l4.69-1.06c.12.419.232 1.31.337 2.674.224-.485.519-.929.884-1.331a4.657 4.657 0 0 1 1.226-.974c.453-.246.916-.37 1.39-.37.657 0 1.178.19 1.563.568.385.377.577.837.577 1.38zM108.953 39.716c0-1.873-.721-2.81-2.164-2.81-.698 0-1.233.26-1.606.777s-.579 1.195-.619 2.033h4.389zm2.983 1.134h-7.396c.008.156.029.489.066.998.036.51.148 1.031.337 1.565.188.534.513.984.973 1.35.462.365 1.081.548 1.859.548.425 0 .938-.111 1.539-.333.601-.222 1.123-.649 1.564-1.281l.937.653c-.946 1.552-2.449 2.329-4.509 2.329-.922 0-1.762-.136-2.52-.407-.757-.271-1.401-.649-1.93-1.134a4.922 4.922 0 0 1-1.215-1.713 5.351 5.351 0 0 1-.421-2.12c0-.993.235-1.913.704-2.76a5.216 5.216 0 0 1 2.014-2.02c.874-.502 1.872-.752 2.995-.752 1.098 0 2.026.242 2.784.727.758.484 1.317 1.113 1.678 1.885.36.772.541 1.594.541 2.465zM133.005 33.9h-1.13c-.201-.929-.468-1.607-.8-2.034-.333-.427-.706-.69-1.119-.788-.413-.1-.988-.148-1.726-.148h-2.91v5.903h1.527c.722 0 1.211-.128 1.468-.383.256-.254.409-.817.457-1.688h1.106v5.558h-1.13c-.041-.64-.115-1.1-.223-1.38a.977.977 0 0 0-.553-.58c-.261-.106-.652-.16-1.173-.16h-1.479v4.966c0 .674.13 1.171.391 1.492.261.32.88.48 1.858.48h.337v1.134h-8.37v-1.134c.994 0 1.633-.15 1.918-.45.284-.3.427-.807.427-1.522V32.667c0-.476-.048-.848-.144-1.115-.097-.267-.315-.476-.656-.629-.341-.152-.856-.227-1.545-.227V29.56h13.349l.12 4.339zM140.702 46.272h-6.53v-1.134h.348c.465 0 .804-.065 1.017-.197a.821.821 0 0 0 .391-.555c.048-.238.072-.587.072-1.047v-3.66c0-.51-.03-.87-.09-1.084-.061-.214-.217-.37-.469-.469-.253-.098-.676-.151-1.269-.16v-1.133l4.93-1.06v7.566c0 .69.085 1.163.253 1.417.168.255.617.382 1.347.382v1.134zM152.151 37.72c0 .476-.143.852-.427 1.127-.285.276-.62.413-1.004.413-.457 0-.858-.23-1.203-.69a3.343 3.343 0 0 0-.397-.444c-.104-.09-.253-.135-.445-.135-.625 0-1.112.347-1.461 1.041a4.759 4.759 0 0 0-.523 2.163v2.144c0 .69.086 1.163.259 1.417.172.255.627.382 1.365.382h.637v1.134h-7.469v-1.134h.626c.673 0 1.086-.13 1.238-.394.153-.263.229-.731.229-1.405v-3.598c0-.55-.054-.945-.162-1.184-.108-.238-.303-.396-.584-.474-.28-.078-.729-.117-1.347-.117v-1.133l4.691-1.06c.12.419.232 1.31.336 2.674.225-.485.52-.929.884-1.331a4.657 4.657 0 0 1 1.227-.974c.453-.246.916-.37 1.389-.37.658 0 1.179.19 1.564.568.384.377.577.837.577 1.38zM160.798 39.716c0-1.873-.722-2.81-2.165-2.81-.698 0-1.233.26-1.606.777-.372.517-.579 1.195-.619 2.033h4.39zm2.982 1.134h-7.396c.008.156.03.489.066.998.036.51.148 1.031.337 1.565.188.534.513.984.974 1.35.461.365 1.08.548 1.858.548.425 0 .938-.111 1.539-.333.602-.222 1.123-.649 1.564-1.281l.938.653c-.946 1.552-2.45 2.329-4.51 2.329-.922 0-1.762-.136-2.52-.407-.757-.271-1.4-.649-1.93-1.134a4.907 4.907 0 0 1-1.214-1.713 5.334 5.334 0 0 1-.422-2.12c0-.993.235-1.913.704-2.76a5.223 5.223 0 0 1 2.014-2.02c.874-.502 1.873-.752 2.995-.752 1.098 0 2.027.242 2.784.727.758.484 1.317 1.113 1.678 1.885a5.75 5.75 0 0 1 .541 2.465zM53.67 64.897l-2.248-5.829-2.14 5.83h4.389zm7.169 5.879h-7.685v-1.134c.65 0 1.122-.047 1.419-.142.297-.094.445-.318.445-.672 0-.246-.048-.496-.145-.751l-.77-1.972h-5.29l-.398 1.085c-.224.608-.336 1.047-.336 1.318 0 .493.186.805.56.937.372.131.806.197 1.304.197v1.134h-5.616v-1.134c.448 0 .83-.086 1.142-.259.313-.172.611-.499.896-.98.284-.48.591-1.16.92-2.04l4.702-12.618h1.143l4.967 13.013c.36.92.625 1.543.793 1.867.169.325.401.575.698.752.296.177.713.265 1.25.265v1.134zM74.752 70.702c-.232.016-.637.043-1.214.08-.577.037-1.225.09-1.942.16-.718.07-1.293.15-1.726.24v-1.799c-1.034 1.216-2.273 1.824-3.716 1.824-1.05 0-1.828-.23-2.333-.69-.505-.46-.818-.968-.938-1.522a8.397 8.397 0 0 1-.18-1.78v-3.636c0-.485-.029-.84-.085-1.066-.056-.226-.204-.398-.445-.518-.24-.119-.638-.178-1.19-.178v-1.134h4.822v6.79c0 1.397.525 2.095 1.575 2.095.602 0 1.11-.22 1.528-.66.416-.439.737-.86.962-1.262v-4.067c0-.51-.03-.875-.09-1.097-.06-.222-.215-.388-.463-.499-.249-.111-.662-.166-1.24-.166v-1.134h4.896V68.1c0 .387.036.674.108.863.072.19.236.335.493.438.257.102.65.158 1.178.166v1.134zM84.013 68.582c-.433.929-.938 1.594-1.516 1.996-.577.403-1.254.604-2.032.604-.946 0-1.644-.197-2.093-.591-.449-.395-.725-.836-.83-1.325a7.9 7.9 0 0 1-.156-1.645v-5.804H75.57v-1.134c.762 0 1.423-.148 1.985-.444a3.484 3.484 0 0 0 1.329-1.195c.324-.501.53-1.04.619-1.615h.986v3.254h3.403v1.133H80.49v5.879c0 .714.046 1.23.138 1.546.092.317.32.475.68.475.385 0 .701-.154.95-.462.248-.308.489-.692.721-1.153l1.035.481zM98.18 70.776h-6.182v-1.134c.553 0 .934-.1 1.142-.302.209-.202.313-.495.313-.881v-4.14c0-.412-.026-.781-.078-1.11a1.809 1.809 0 0 0-.415-.893c-.225-.267-.57-.4-1.034-.4-.377 0-.76.104-1.149.313-.389.21-.687.483-.896.82a3.225 3.225 0 0 0-.427 1.09c-.06.35-.09.77-.09 1.264v2.12c0 .574.022.995.066 1.262a.942.942 0 0 0 .373.629c.204.152.543.228 1.016.228v1.134h-6.301v-1.134c.537 0 .932-.058 1.184-.173.253-.115.409-.285.469-.511.06-.226.09-.598.09-1.115v-10.34c0-.616-.096-1.029-.288-1.238-.193-.21-.678-.318-1.455-.327V54.83l4.846-1.06v8.319c.473-.51.964-.939 1.473-1.288.51-.35 1.217-.524 2.123-.524.417 0 .834.062 1.25.185.418.123.792.304 1.125.542.333.238.575.51.728.813.328.6.493 1.38.493 2.342v3.685c0 .69.086 1.162.259 1.417.172.254.627.382 1.364.382v1.134zM108.138 65.624c0-1.396-.18-2.448-.541-3.154-.361-.707-1.062-1.06-2.104-1.06-.666 0-1.185.154-1.558.462-.373.308-.633.785-.782 1.43-.148.645-.222 1.48-.222 2.507 0 1.265.164 2.288.493 3.069.329.78 1.046 1.17 2.152 1.17.73 0 1.285-.215 1.666-.647.381-.43.626-.965.734-1.602.108-.636.162-1.362.162-2.175zm3.319.074c0 1.118-.264 2.091-.794 2.92a5.18 5.18 0 0 1-2.146 1.905c-.902.44-1.89.66-2.965.66a6.96 6.96 0 0 1-2.868-.605 5.27 5.27 0 0 1-2.213-1.836c-.573-.821-.86-1.828-.86-3.02 0-1.782.594-3.135 1.78-4.06 1.187-.924 2.598-1.386 4.234-1.386 1.218 0 2.268.246 3.151.74.881.492 1.549 1.154 2.002 1.983.453.83.679 1.73.679 2.7zM123.328 62.223c0 .477-.142.853-.427 1.128a1.395 1.395 0 0 1-1.004.413c-.457 0-.858-.23-1.203-.69a3.35 3.35 0 0 0-.396-.444c-.105-.09-.253-.136-.445-.136-.626 0-1.113.347-1.462 1.041a4.772 4.772 0 0 0-.523 2.163v2.145c0 .69.086 1.162.259 1.417.172.254.627.382 1.365.382h.637v1.133h-7.468v-1.133h.625c.674 0 1.087-.131 1.239-.395.152-.263.228-.73.228-1.404v-3.599c0-.55-.054-.944-.162-1.183-.108-.238-.303-.396-.583-.474-.281-.078-.73-.117-1.347-.117v-1.134l4.69-1.06c.12.419.232 1.31.337 2.674.224-.484.519-.928.884-1.33a4.651 4.651 0 0 1 1.226-.974c.453-.247.916-.37 1.39-.37.657 0 1.178.19 1.563.567.385.378.577.838.577 1.38zM129.017 55.458c0 .492-.171.914-.512 1.263-.34.349-.751.524-1.232.524-.474 0-.884-.18-1.233-.537a1.734 1.734 0 0 1-.523-1.25c0-.493.172-.916.517-1.27.345-.353.758-.53 1.239-.53.489 0 .902.173 1.238.518.337.345.506.772.506 1.282zm1.358 15.317h-6.53v-1.133h.349c.465 0 .804-.066 1.016-.197a.821.821 0 0 0 .391-.555c.048-.238.072-.587.072-1.047v-3.66c0-.51-.03-.871-.09-1.085-.06-.213-.217-.37-.469-.468-.253-.099-.676-.152-1.269-.16v-1.134l4.931-1.06v7.567c0 .69.084 1.162.252 1.417.169.254.618.382 1.347.382v1.133zM139.731 68.582c-.433.929-.938 1.594-1.516 1.996-.577.403-1.255.604-2.032.604-.946 0-1.644-.197-2.093-.591-.449-.395-.725-.836-.829-1.325a7.858 7.858 0 0 1-.157-1.645v-5.804h-1.816v-1.134c.762 0 1.423-.148 1.985-.444a3.476 3.476 0 0 0 1.328-1.195c.325-.501.531-1.04.62-1.615h.986v3.254h3.403v1.133h-3.403v5.879c0 .714.046 1.23.138 1.546.092.317.319.475.68.475.385 0 .701-.154.95-.462a6.51 6.51 0 0 0 .721-1.153l1.035.481zM152.745 61.817c-.345.049-.614.14-.806.27-.193.132-.367.336-.523.61-.157.276-.435.833-.836 1.67l-3.524 7.493c-.786 1.651-1.321 2.75-1.605 3.296-.285.547-.608.98-.969 1.3-.36.321-.809.481-1.347.481-.368 0-.689-.115-.962-.345a1.097 1.097 0 0 1-.409-.875c0-.5.167-.865.5-1.09.332-.226.763-.417 1.292-.573.714-.214 1.259-.604 1.636-1.171.377-.567.702-1.187.974-1.861l-4.582-8.269c-.216-.402-.413-.659-.589-.77-.177-.111-.421-.166-.734-.166v-1.134h5.833v1.134h-.373c-.553 0-.83.135-.83.406 0 .165.113.448.337.85l2.537 4.573 1.877-3.907c.264-.558.397-.94.397-1.146 0-.247-.118-.438-.355-.573a1.654 1.654 0 0 0-.836-.203v-1.134h3.897v1.134z"
      fill="#064B8D"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M135.068 35.483s-3.008-5.207-1.237-8.394c2.113-3.801 7.626-4.699 8.966-7.656 1.339-2.956-.103-7.92-.103-7.92l.206-.158s2.843 5.602 3.4 9.979c.619 4.857 0 9.873-4.74 12.196-4.493 2.202-6.492 1.953-6.492 1.953z"
      fill="#FFEE05"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M136.356 32.844s-.619-3.38 1.288-4.54c1.906-1.162 3.864-1.004 4.843-2.218.979-1.215.979-3.274.979-3.274s.89 3.066 0 5.65c-.928 2.692-4.431 4.699-7.11 4.382z"
      fill="#DC3B41"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M135.332 18.43c1.101-.032 1.863-1.519.927-4.012-1.288-3.432-.154-6.653-.154-6.653s-2.216 4.54-2.473 6.547c-.258 2.006-.103 4.171 1.7 4.118z"
      fill="#FFEE05"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M57.204 16.146c-.771.79-3.725 4.607-3.725 4.607s-.457-.548-1.741-1.996c-.405-.456-.94-1.087-1.545-1.78a32.646 32.646 0 0 0 2.288-2.428c.803-.956 1.411-2.08 1.832-3a92.674 92.674 0 0 0 4.415 2.776s-.754 1.032-1.524 1.821zm1.97-2.621c-.022-.014-2.339-1.373-4.364-2.745l-.522-.353-.439-.316c-.438-.316-.81-.6-1.104-.845l-.541-.452c-2.047-1.709-4.85-4.05-7.767-5.93C40.891.598 38.235 0 36.84 0c-1.085 0-1.643.346-1.747.403l-.83.94.94.66 6.13 4.86-1.621 2.382.694.535c.008.006.21.162.54.413-.427.582-2.585 3.599-3.394 6.085-.898 2.764-3.21 5.264-4.88 7.37s-4.881 4.87-5.652 6.186c-.77 1.316-3.467 3.685-4.88 5.396-1.413 1.71-4.496 5.79-5.652 7.107-1.156 1.316-4.495 5.264-5.65 6.58-1.157 1.316-1.799 3.027-4.625 5.264-2.825 2.238-8.605 6.58-5.137 7.502 1.758.467 5.651.263 7.32-1.184 1.67-1.448 4.496-5.66 6.166-8.029 1.67-2.369 6.679-8.817 8.092-10.66 1.412-1.843 7.192-7.896 8.605-9.607 1.413-1.712 5.266-5.66 6.165-6.581.9-.921 3.725-4.343 5.523-6.58 1.255-1.562 2.759-3.571 3.554-4.643.643.59 1.39 1.36 2.26 2.33l.362.404.399.458c.258.296.504.581.732.846.308.357.585.678.818.94a102.042 102.042 0 0 1 1.722 1.975l.71.851.68-.877c.813-1.05 3.054-3.91 3.656-4.527.807-.827 1.576-1.876 1.609-1.92l.61-.836-.884-.518z"
      fill="#064B8D"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M51.868 13.564a9.346 9.346 0 0 0 1.463-2.698 21.159 21.159 0 0 1-1.154-.884c-2.055-1.71-5.03-4.386-8.22-6.317-7.11-4.303-7.91-2.15-7.91-2.15L42.56 6.67l-1.615 2.373s2.9 2.234 4.954 3.681c1.087.766 2.374 2.1 3.524 3.382a15.898 15.898 0 0 0 2.444-2.542z"
      fill="#DC3B41"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M54.314 11.55c-.42.92-1.03 2.043-1.833 2.999a32.625 32.625 0 0 1-2.287 2.427c.604.694 1.14 1.325 1.545 1.781 1.284 1.448 1.74 1.995 1.74 1.995s2.955-3.816 3.725-4.606 1.525-1.82 1.525-1.82-2.34-1.37-4.415-2.776z"
      fill="#FFEE05"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M187.628 49.05l-2.834-.106v-.87c0-.661-1.291-3.14-3.658-3.582-2.366-.44-4.732-.386-4.732.882 0 .551.699.882 1.667.992.968.11 2.205.716 2.259 1.378.028.347.027.74.019 1.035l-10.06-.374a.615.615 0 0 0-.607.623v.055H13.444v3.407h156.269c.079.25.305.434.576.434h21.103c.336 0 .608.165.608-.623s-3.442-3.252-4.372-3.252zM143.439 81c-1.811 0-3.418-.763-4.376-1.962-.837-1.05-.877-2.596-.909-3.84-.011-.408-.024-.942-.081-1.212H40.895c-.683 0-1.344.022-1.538-.219-.4-.497.263-1.873.432-2.288.017-.04.031-.076.04-.101.265-.754 1.77-4.278 3.361-8.01 1.283-3.005 2.609-6.112 3.239-7.663l.014-.035v-.001H24.209v-1.442h22.448c.234 0 1.215-.145 1.554.34.212.305-.276 1.183-.468 1.658l-.015.034c-.635 1.563-1.963 4.676-3.248 7.687-1.513 3.546-3.077 7.212-3.326 7.92-.015.043-.038.1-.066.169-.09.221-.149.392-.175.51h97.364c1.217 0 1.253 1.39 1.284 2.616.026 1.023.059 2.297.592 2.964 1.252 1.567 4.199 2.098 6.777.22 2.159-1.572 7.281-13.11 11.01-22.512.184-.461.513-.99 1.444-.99h15.944l.705.72c0 .721-.544.721-1.367.721h-15.282a.857.857 0 0 0-.104.006 1.721 1.721 0 0 0-.037.086c-1.932 4.872-8.474 20.943-11.498 23.145-1.422 1.035-2.923 1.479-4.305 1.479zM116.879 40.099c-.075 0-.147-.008-.214-.022h-2.124c-1.122 0-1.316-.759-1.504-1.493-.089-.349-.2-.784-.408-1.37-.647-1.824-2.284-2.88-4.864-3.14-2.127-.213-3.504.785-4.416 1.445-.213.154-.396.286-.566.386a1.296 1.296 0 0 1-1.034.145c-.71-.205-1.121-.974-1.422-1.535-.052-.096-.1-.186-.144-.263-.102-.174-.535-.349-1.273-.349-.255 0-1.41.01-2.777.021-1.963.017-4.405.037-5.18.037-.793 0-1.317-.203-1.603-.623a1.12 1.12 0 0 1-.18-.82v-3.937c0-.094-.006-.161-.012-.208-.06-.003-.134-.003-.194-.003h-7.73c-.311 0-.508.02-.628.042.012.084.024.18.024.286 0 .177.031.764.064 1.386.05.934.106 1.991.106 2.516 0 .356-.13.677-.374.927-.558.57-1.557.612-2.53.61l-.13-.001c-.439 0-1.546.626-2.029 1.368-.372.572-.8.716-1.092.735-.705.05-1.203-.536-1.532-.922l-.025-.029c-.24-.282-1.68-1.21-3.108-1.21h-9.606c-.588 0-.64.133-.793.527-.07.182-.15.389-.293.582-.378.517-.897.836-1.422.874-.338.024-.845-.053-1.343-.563-.547-.56-2.079-1.187-3.31-1.187-1.35 0-2.115.161-2.822.596-.252.155-.924.569-1.531.245-.594-.316-.646-1.071-.669-1.394-.007-.1-.012-.22-.018-.356-.04-.911-.117-2.607-1.058-3.704-.779-.907-2.228-1.386-4.19-1.386-1.295 0-8.909-.058-8.985-.058l.01-1.442c.077 0 7.685.058 8.975.058 2.378 0 4.192.649 5.246 1.876 1.268 1.477 1.362 3.58 1.407 4.59a13.212 13.212 0 0 0 .02.376l.07-.041c.938-.577 1.932-.801 3.544-.801 1.509 0 3.44.721 4.306 1.608.067.07.164.153.248.145.11-.008.273-.132.397-.3.03-.04.075-.158.112-.252.195-.502.558-1.435 2.099-1.435h9.606c1.806 0 3.645 1.092 4.167 1.703l.025.03c.086.1.246.288.362.384a.975.975 0 0 0 .033-.048c.684-1.052 2.21-2.01 3.2-2.01h.134c.81 0 1.307-.05 1.492-.16-.004-.513-.059-1.54-.103-2.372a42.01 42.01 0 0 1-.067-1.465c0-.042-.01-.085-.017-.129-.04-.245-.112-.7.22-1.1.314-.379.854-.54 1.808-.54h7.73c.482 0 1.612 0 1.612 1.652v3.91c.08.015.2.029.377.029.77 0 3.208-.02 5.168-.037 1.372-.011 2.533-.021 2.789-.021.85 0 1.971.182 2.479 1.048.053.091.11.197.171.311.115.214.372.695.541.822a6.97 6.97 0 0 0 .436-.301c.95-.688 2.717-1.968 5.365-1.702 3.943.396 5.466 2.438 6.049 4.082.23.648.356 1.139.447 1.497.038.149.08.312.114.416h2.174a2.52 2.52 0 0 0 .05-.56V28.23c-.075-.269-.162-.806.146-1.282.196-.301.609-.661 1.467-.661h10.687c.627.002 1.79.006 1.975-.4.449-.985 1.532-2.577 3.107-3.818 1.508-1.189 4.356-2.738 4.477-2.804l.658 1.274c-.029.016-2.864 1.558-4.277 2.672-1.47 1.159-2.382 2.61-2.69 3.286-.565 1.24-2.177 1.235-3.254 1.232h-10.683a.989.989 0 0 0-.277.03.46.46 0 0 0 .02.088l.055.134-.005.133v9.96c0 .93-.217 1.531-.663 1.837-.199.135-.41.187-.6.187z"
      fill="#064B8D"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M174.109 46.6h-7.446c-.955 0-1.567-.092-1.868-.563-.277-.433-.091-.87-.001-1.079.018-.043.044-.103.05-.127.012-.05.031-.12.055-.208.197-.723.798-2.923.552-5.845-.242-2.873-3.122-4.3-5.695-4.41-1.972-.084-3.429.303-4.324 1.15-1.099 1.039-2.109.972-2.623.446-.29-.297-1.078-1.262-1.429-1.744-.245-.056-.909-.029-1.451-.007-.449.019-.957.04-1.511.04-1.158 0-1.831-.113-2.072-.709-.237-.587.219-1.054.438-1.279.249-.255 1.964-2.859 2.24-6.822.268-3.855-3.151-12.104-3.185-12.187l1.293-.566c.147.35 3.587 8.654 3.295 12.856-.242 3.468-1.517 6.13-2.279 7.262.081.002.171.003.27.003.526 0 1.019-.02 1.455-.038 1.349-.055 2.164-.089 2.585.515.245.352 1.004 1.29 1.301 1.61.1-.01.356-.096.718-.44 1.18-1.115 2.974-1.63 5.338-1.53 3.169.136 6.722 1.985 7.037 5.726.268 3.182-.384 5.572-.598 6.357l-.037.136c.116.007.262.011.446.011h7.446V46.6z"
      fill="#064B8D"
    />
  </SVGWrapper>
);

export default Logo;
