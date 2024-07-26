import '@pqina/pintura/pintura.css';
import '@pqina/pintura-video/pinturavideo.css';
import{createDefaultVideoWriter,createMediaStreamEncoder,plugin_trim,plugin_trim_locale_en_gb,} from '@pqina/pintura-video';
import{getEditorDefaults,setPlugins,createDefaultMediaWriter,createDefaultImageWriter,imageStateToCanvas,} from '@pqina/pintura';
import { PinturaEditor } from '@pqina/react-pintura';
import { useEffect, useState } from 'react';

const editorConfig = getEditorDefaults({
    locale: {
        ...plugin_trim_locale_en_gb,
    },
    imageWriter: createDefaultMediaWriter(
        {
            // Images and videos will be resized down to 200 width,
            // aspect ratio is maintained
            targetSize: {
                width: 200,
            },
        },
        [
            // Used for writing output images
            createDefaultImageWriter({
                // Convert all input images to JPEGs
                mimeType: 'image/jpeg',

                // Compress image
                quality: 0.75,
            }),
            // Used for writing output videos
            createDefaultVideoWriter({
                encoder: createMediaStreamEncoder({
                    // Required for drawing video output
                    imageStateToCanvas,

                    // Compress video
                    videoBitrate: 384 * 1024,
                }),
            }),
        ]
    ),
});

export default function Editor2() {
   const [editorResult, setEditorResult] = useState(undefined);

   useEffect(() => {
      setPlugins(plugin_trim);
   },[]);
   const handleProcessMedia = (res) => {
       // Get a reference to the file object
       const { dest } = res;

       // Set an ObjectURL to the file object
       setEditorResult({
           url: URL.createObjectURL(dest),
           type: /video/.test(dest.type) ? 'video' : 'image',
       });
   };

   return (
       <div  >
           {editorResult &&
               (editorResult.type === 'image' ? (
                   <img src={editorResult.url} alt="" />
               ) : (
                   <video src={editorResult.url} />
               ))}

           <PinturaEditor
               {...editorConfig}
               util="trim"
               src="./my-video.mp4"
               imageCropAspectRatio={1}
               onProcess={handleProcessMedia}
           ></PinturaEditor>
       </div>
   );
}