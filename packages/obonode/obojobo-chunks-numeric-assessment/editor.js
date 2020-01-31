// Main entrypoint for editor
import Common from 'obojobo-document-engine/src/scripts/common'
import EditorNode from './editor-registration'
import NumericFeedback from './NumericFeedback/editor-registration'

// register
Common.Registry.registerEditorModel(EditorNode)
Common.Registry.registerEditorModel(NumericFeedback)
