/**
 * bioinformaticsChildData.js — WellMind Data Solutions
 * Central data store for all Bioinformatics & Health AI child service pages.
 * Consumed by BioinformaticsChildPage.jsx via URL params.
 *
 * Routes (from sub_services.jsx):
 *   Genomic & Sequencing:    rna-seq | variant-calling | genomic | epigenomics
 *   Multi-omics & Systems:   multi-omics | proteomics | metabolomics | single-cell
 *   Clinical AI:             clinical-ai | diagnostic | risk | pathology
 *   Drug & Lab:              drug-discovery | docking | lims | clinical-trials
 *
 * Each service has `pipelineSteps` (6 steps) driving the GenomicsPipeline hero visual
 * — matching ServicesBioinformatics.jsx exactly.
 */

import {
  Dna, FlaskConical, GitBranch, BarChart3, Shield, Activity,
  Microscope, Brain, Database, Layers, Globe, BookOpen,
  CheckCircle,
} from 'lucide-react';

// ─── Brand color shortcuts ────────────────────────────────────────────────────
const AC = '#1A8A72';   // bioinformatics teal/green (parent page AC)
const COLORS = {
  bio:       '#1A8A72', // teal/green — main accent
  action:    '#0B7C93', // teal blue
  primary:   '#633068', // purple
  accent:    '#B02A48', // crimson
  secondary: '#1B6B3A', // green
  gold:      '#FF9F1C',
  cyan:      '#00BBF9',
  violet:    '#7C3AED',
};

// ─── CHILD SERVICES DATA ──────────────────────────────────────────────────────
export const BIOINFORMATICS_CHILDREN = {

  // ══════════════════════════════════════════════════════════════════════════
  //  CATEGORY 1 — GENOMIC & SEQUENCING
  // ══════════════════════════════════════════════════════════════════════════

  // ── 1. RNA-seq Pipelines ──────────────────────────────────────────────────
  'rna-seq': {
    id:          'rna-seq',
    title:       'RNA-seq Pipelines',
    tagline:     'From raw reads to differential expression — reproducibly.',
    badge:       'Genomic & Sequencing',
    accentColor: COLORS.bio,
    heroDesc:    'RNA-seq analysis is only as reliable as the pipeline behind it. We build end-to-end RNA-seq workflows — from raw FASTQ quality control through alignment, quantification, and differential expression analysis — using DESeq2, edgeR, or limma with rigorous statistical methodology and publication-ready outputs.',
    tags:        ['Fixed-Fee Projects', 'Full Pipeline Code', 'From $1,800'],

    pipelineSteps: [
      { label: 'Raw Reads',          sub: 'FASTQ input files',           color: COLORS.bio,       iconName: 'Dna'         },
      { label: 'Quality Control',    sub: 'FastQC · Trimmomatic · MultiQC',color: COLORS.action,  iconName: 'Shield'      },
      { label: 'Alignment',          sub: 'STAR · HISAT2 · Salmon',      color: COLORS.primary,   iconName: 'GitBranch'   },
      { label: 'Quantification',     sub: 'featureCounts · HTSeq',       color: COLORS.accent,    iconName: 'Database'    },
      { label: 'Differential Expr',  sub: 'DESeq2 · edgeR · limma',      color: COLORS.secondary, iconName: 'Activity'    },
      { label: 'Results & Report',   sub: 'Figures + annotated notebook', color: COLORS.bio,       iconName: 'BarChart3'   },
    ],

    stats: [
      { target: 99,  suffix: '%', label: 'Mapping Rate',             iconName: 'Activity',   color: COLORS.bio      },
      { target: 60,  suffix: '%', label: 'Faster Than Manual',       iconName: 'Zap',        color: COLORS.action   },
      { target: 80,  suffix: '+', label: 'RNA-seq Projects Done',    iconName: 'FlaskConical',color: COLORS.gold    },
      { target: 100, suffix: '%', label: 'Reproducible Pipelines',   iconName: 'Shield',     color: COLORS.secondary },
    ],

    features: [
      { iconName: 'Dna',         title: 'Bulk RNA-seq Analysis',      color: COLORS.bio,       desc: 'Multi-sample differential expression with STAR or HISAT2 alignment, DESeq2 statistical testing, and full multiple-testing correction.' },
      { iconName: 'Shield',      title: 'QC & Trimming',              color: COLORS.action,    desc: 'Per-sample FastQC reports, adapter trimming with Trimmomatic, and MultiQC summary across all samples before any alignment.' },
      { iconName: 'GitBranch',   title: 'Alignment & Quantification', color: COLORS.primary,   desc: 'Splice-aware alignment with STAR or pseudo-alignment with Salmon — with strand-specificity detection and quantification to gene or transcript level.' },
      { iconName: 'Activity',    title: 'DE Analysis & Pathway',      color: COLORS.accent,    desc: 'Differential expression analysis followed by GO enrichment, KEGG pathway, and GSEA to interpret which biological processes are active.' },
      { iconName: 'BarChart3',   title: 'Visualisation',              color: COLORS.secondary, desc: 'Volcano plots, heatmaps, PCA, MA plots, and pathway maps — all with source ggplot2 / matplotlib code for journal submission.' },
      { iconName: 'BookOpen',    title: 'Annotated Notebook',         color: COLORS.gold,      desc: 'R Markdown or Jupyter notebook with every analysis step documented, reproducible, and written to be understood by non-bioinformaticians.' },
    ],

    process: [
      { step: '01', title: 'Experimental Design Review',  desc: 'Sample metadata, sequencing depth, library prep strategy, and batch effects assessed before any pipeline run.' },
      { step: '02', title: 'QC & Alignment',              desc: 'Quality control, adapter trimming, alignment, and quantification — with a QC summary reviewed with you before DE analysis.' },
      { step: '03', title: 'DE Analysis & Pathway',       desc: 'Differential expression, multiple-testing correction, pathway enrichment, and GSEA with biological interpretation at each step.' },
      { step: '04', title: 'Delivery & Documentation',    desc: 'Publication-ready figures, annotated notebook, pipeline code, and a findings summary written for your audience.' },
    ],

    deliverables: [
      'Nextflow / Snakemake pipeline code (your repo)',
      'MultiQC quality control report',
      'Count matrix and normalised expression table',
      'Differential expression results (all contrasts)',
      'GO / KEGG / GSEA enrichment report',
      'Publication-quality figures (source code included)',
      'Annotated R Markdown / Jupyter notebook',
    ],

    techStack: [
      { label: 'STAR',           color: COLORS.bio      },
      { label: 'Salmon',         color: COLORS.action   },
      { label: 'DESeq2',         color: COLORS.primary  },
      { label: 'edgeR',          color: COLORS.accent   },
      { label: 'R / Bioconductor',color: COLORS.secondary },
      { label: 'Nextflow',       color: COLORS.gold     },
      { label: 'FastQC',         color: COLORS.bio      },
      { label: 'clusterProfiler',color: COLORS.action   },
    ],

    tiers: [
      { name: 'Single Contrast',   price: 'From $1,800', featured: false,
        desc:     'DE analysis for one comparison with QC, figures, and notebook.',
        features: ['One condition comparison', 'QC + alignment', 'DE results + figures', '5–8 day delivery'] },
      { name: 'Full RNA-seq Study',price: 'From $4,500', featured: true,
        desc:     'Multi-sample study with all contrasts, pathway analysis, and pipeline.',
        features: ['Multiple contrasts', 'Pathway enrichment + GSEA', 'Nextflow pipeline', 'Publication figures', '30-day support'] },
      { name: 'Custom / Retainer', price: 'Custom',      featured: false,
        desc:     'Longitudinal studies, clinical data, or ongoing analysis retainer.',
        features: ['Longitudinal design', 'Clinical data handling', 'Grant-ready outputs', 'Authorship negotiable'] },
    ],
  },

  // ── 2. DNA Variant Calling ────────────────────────────────────────────────
  'variant-calling': {
    id:          'variant-calling',
    title:       'DNA Variant Calling',
    tagline:     'Clinical-grade variant detection from WGS, WES, or targeted panels.',
    badge:       'Genomic & Sequencing',
    accentColor: COLORS.action,
    heroDesc:    'Variant calling is only as trustworthy as the pipeline calling it. We build GATK Best Practices and DeepVariant-based workflows for SNV, indel, and structural variant detection — with clinical annotation via ClinVar, COSMIC, and gnomAD — producing VCF outputs with the documentation your clinical or publication audience requires.',
    tags:        ['Fixed-Fee Projects', 'Full Pipeline Code', 'From $2,200'],

    pipelineSteps: [
      { label: 'Raw Sequencing',   sub: 'FASTQ / BAM input',            color: COLORS.bio,       iconName: 'Dna'         },
      { label: 'QC & Trimming',    sub: 'FastQC · Trimmomatic',          color: COLORS.action,    iconName: 'Shield'      },
      { label: 'Alignment',        sub: 'BWA-MEM2 · BQSR · MarkDups',   color: COLORS.primary,   iconName: 'GitBranch'   },
      { label: 'Variant Calling',  sub: 'GATK HaplotypeCaller · DeepVariant',color: COLORS.accent,iconName: 'Activity'   },
      { label: 'Annotation',       sub: 'VEP · ANNOVAR · ClinVar · COSMIC',color: COLORS.secondary,iconName: 'BookOpen'  },
      { label: 'Clinical Report',  sub: 'Filtered VCF + PDF summary',   color: COLORS.bio,       iconName: 'BarChart3'   },
    ],

    stats: [
      { target: 99,  suffix: '.9%',label: 'Variant Accuracy',          iconName: 'Activity',   color: COLORS.action   },
      { target: 50,  suffix: '+',  label: 'Variant Studies Done',      iconName: 'FlaskConical',color: COLORS.bio     },
      { target: 100, suffix: '%',  label: 'GATK Best Practices',       iconName: 'Shield',     color: COLORS.gold     },
      { target: 15,  suffix: '+',  label: 'Annotation Databases',      iconName: 'Database',   color: COLORS.secondary },
    ],

    features: [
      { iconName: 'Dna',        title: 'WGS / WES / Panel Analysis',  color: COLORS.action,    desc: 'Whole-genome, whole-exome, and targeted panel variant calling with appropriate depth, coverage, and quality thresholds for each data type.' },
      { iconName: 'Shield',     title: 'BQSR & Duplicate Marking',    color: COLORS.bio,       desc: 'Base quality score recalibration, PCR duplicate marking, and INDEL realignment following GATK Best Practices for pre-processing.' },
      { iconName: 'Activity',   title: 'SNV / Indel / SV Calling',    color: COLORS.primary,   desc: 'SNVs and indels via GATK HaplotypeCaller or DeepVariant; structural variants via MANTA, LUMPY, or DELLY — with joint genotyping across cohorts.' },
      { iconName: 'BookOpen',   title: 'Clinical Annotation',          color: COLORS.accent,    desc: 'VEP and ANNOVAR annotation with ClinVar, COSMIC, gnomAD, and OMIM — pathogenicity classification using ACMG/AMP criteria.' },
      { iconName: 'BarChart3',  title: 'Filtering & Prioritisation',  color: COLORS.secondary, desc: 'Tiered variant filtering by allele frequency, functional consequence, phenotype, and inheritance mode — reducing thousands of variants to actionable candidates.' },
      { iconName: 'Database',   title: 'Clinical Report Generation',  color: COLORS.gold,      desc: 'Structured VCF output, variant summary tables, and optional PDF clinical report written for clinical geneticists or oncologists.' },
    ],

    process: [
      { step: '01', title: 'Data & Design Review',    desc: 'Sequencing type, coverage targets, reference genome, and variant classes of interest agreed before pipeline configuration.' },
      { step: '02', title: 'Pre-processing & Calling',desc: 'FASTQ to filtered VCF — full pre-processing, variant calling, and VQSR / hard-filter QC documented at every step.' },
      { step: '03', title: 'Annotation & Filtering',  desc: 'Multi-database annotation, ACMG classification, and tiered filtering to prioritise clinically or biologically relevant variants.' },
      { step: '04', title: 'Report & Delivery',       desc: 'Annotated VCF, variant tables, summary figures, and a written findings section appropriate for your audience.' },
    ],

    deliverables: [
      'Nextflow / Snakemake pipeline code',
      'Pre-processed BAM files',
      'Filtered and annotated VCF',
      'Variant summary table (Excel / TSV)',
      'Coverage and QC report',
      'ACMG/AMP pathogenicity classification',
      'Clinical or scientific findings summary',
    ],

    techStack: [
      { label: 'GATK 4',       color: COLORS.action   },
      { label: 'DeepVariant',  color: COLORS.bio      },
      { label: 'BWA-MEM2',     color: COLORS.primary  },
      { label: 'VEP',          color: COLORS.accent   },
      { label: 'ANNOVAR',      color: COLORS.secondary },
      { label: 'MANTA',        color: COLORS.gold     },
      { label: 'Nextflow',     color: COLORS.action   },
      { label: 'Python / R',   color: COLORS.bio      },
    ],

    tiers: [
      { name: 'Single Sample',    price: 'From $2,200', featured: false,
        desc:     'Variant calling for one sample with annotation and report.',
        features: ['Single sample pipeline', 'GATK + annotation', 'VCF + summary report', '7–10 day delivery'] },
      { name: 'Cohort Analysis',  price: 'From $5,500', featured: true,
        desc:     'Joint variant calling across a cohort with clinical annotation.',
        features: ['Joint genotyping', 'Cohort QC', 'ACMG classification', 'Filtered variant table', '30-day support'] },
      { name: 'Clinical Pipeline',price: 'Custom',      featured: false,
        desc:     'HIPAA-compliant clinical reporting pipeline with regulatory documentation.',
        features: ['HIPAA compliance', 'Clinical PDF report', 'LIMS integration', 'Regulatory documentation'] },
    ],
  },

  // ── 3. Genomic Sequencing ─────────────────────────────────────────────────
  'genomic': {
    id:          'genomic',
    title:       'Genomic Sequencing Analysis',
    tagline:     'Full-genome analysis from assembly to annotation.',
    badge:       'Genomic & Sequencing',
    accentColor: COLORS.primary,
    heroDesc:    'Whole-genome analysis goes beyond variant calling — from de novo assembly and comparative genomics to population-level analyses and GWAS. We handle short-read, long-read (PacBio, Nanopore), and hybrid assembly approaches, delivering annotated genomes and population-level insights with rigorous quality metrics.',
    tags:        ['Fixed-Fee Projects', 'Full Pipeline Code', 'From $2,500'],

    pipelineSteps: [
      { label: 'Raw Sequencing',   sub: 'Short / long-read FASTQ',      color: COLORS.bio,       iconName: 'Dna'         },
      { label: 'QC & Trimming',    sub: 'FastQC · NanoPlot · Porechop', color: COLORS.action,    iconName: 'Shield'      },
      { label: 'Assembly',         sub: 'SPAdes · Flye · Hifiasm',       color: COLORS.primary,   iconName: 'GitBranch'   },
      { label: 'Assembly QC',      sub: 'QUAST · BUSCO · Merqury',       color: COLORS.accent,    iconName: 'Microscope'  },
      { label: 'Annotation',       sub: 'Prokka · MAKER · BRAKER',       color: COLORS.secondary, iconName: 'BookOpen'    },
      { label: 'Analysis & Report',sub: 'Comparative genomics + report', color: COLORS.bio,       iconName: 'BarChart3'   },
    ],

    stats: [
      { target: 98,  suffix: '%', label: 'BUSCO Completeness',        iconName: 'Activity',   color: COLORS.primary  },
      { target: 15,  suffix: '+', label: 'Organisms Supported',       iconName: 'Globe',      color: COLORS.bio      },
      { target: 40,  suffix: '+', label: 'Genome Projects Done',      iconName: 'FlaskConical',color: COLORS.gold    },
      { target: 100, suffix: '%', label: 'Reproducible Workflow',     iconName: 'Shield',     color: COLORS.secondary },
    ],

    features: [
      { iconName: 'Dna',        title: 'De Novo Assembly',             color: COLORS.primary,   desc: 'Short-read (SPAdes), long-read (Flye, Hifiasm), and hybrid assembly approaches — selected based on organism, coverage, and assembly quality targets.' },
      { iconName: 'Shield',     title: 'Assembly QC',                  color: COLORS.bio,       desc: 'QUAST assembly statistics, BUSCO completeness assessment, and Merqury QV scoring to evaluate assembly quality before annotation.' },
      { iconName: 'BookOpen',   title: 'Genome Annotation',            color: COLORS.action,    desc: 'Prokka for prokaryotes, MAKER or BRAKER2 for eukaryotes — with functional annotation against UniProt, Pfam, and KEGG databases.' },
      { iconName: 'GitBranch',  title: 'Comparative Genomics',        color: COLORS.accent,    desc: 'Ortholog analysis (OrthoFinder), synteny (MUMmer), and pangenome construction (Roary, Panaroo) for multi-strain or multi-species comparisons.' },
      { iconName: 'Activity',   title: 'Population Genomics / GWAS',  color: COLORS.secondary, desc: 'Population structure (STRUCTURE, ADMIXTURE), phylogenomics (RAxML, IQ-TREE), and GWAS (PLINK, GEMMA) for population-level analyses.' },
      { iconName: 'BarChart3',  title: 'Visualisation & Reporting',   color: COLORS.gold,      desc: 'Circos genome plots, synteny diagrams, phylogenetic trees, and Manhattan plots — all source code included for modification.' },
    ],

    process: [
      { step: '01', title: 'Sequencing & Design Review',   desc: 'Read type, organism ploidy, expected genome size, and analysis goals agreed — assembly strategy chosen accordingly.' },
      { step: '02', title: 'Assembly & QC',                desc: 'Assembly generated, BUSCO and QUAST metrics reviewed, and assembly quality confirmed before annotation.' },
      { step: '03', title: 'Annotation & Analysis',        desc: 'Structural and functional annotation, comparative genomics, and downstream analyses completed.' },
      { step: '04', title: 'Delivery',                     desc: 'Annotated genome files, analysis results, visualisations, and a written methods section suitable for publication.' },
    ],

    deliverables: [
      'Assembled genome (FASTA)',
      'Annotation files (GFF3 / GenBank)',
      'BUSCO / QUAST quality report',
      'Functional annotation tables',
      'Comparative genomics outputs',
      'Publication-quality figures',
      'Methods section text for manuscript',
    ],

    techStack: [
      { label: 'SPAdes',     color: COLORS.primary  },
      { label: 'Flye',       color: COLORS.bio      },
      { label: 'BUSCO',      color: COLORS.action   },
      { label: 'Prokka',     color: COLORS.accent   },
      { label: 'MAKER',      color: COLORS.secondary },
      { label: 'OrthoFinder',color: COLORS.gold     },
      { label: 'Nextflow',   color: COLORS.primary  },
      { label: 'Python / R', color: COLORS.bio      },
    ],

    tiers: [
      { name: 'Assembly & Annotation', price: 'From $2,500', featured: false,
        desc:     'De novo assembly, QC, and functional annotation for one genome.',
        features: ['Assembly + QC', 'Functional annotation', 'Quality report', '10–14 day delivery'] },
      { name: 'Comparative Genomics',  price: 'From $5,500', featured: true,
        desc:     'Multi-genome assembly with comparative analysis and phylogenomics.',
        features: ['Multiple genomes', 'Comparative genomics', 'Phylogenomic tree', 'Publication figures', '30-day support'] },
      { name: 'Population Genomics',   price: 'Custom',      featured: false,
        desc:     'Population-scale GWAS, pangenome, or population structure analysis.',
        features: ['GWAS / pangenome', 'Population structure', 'Grant-ready outputs', 'Authorship negotiable'] },
    ],
  },

  // ── 4. Epigenomics Analysis ───────────────────────────────────────────────
  'epigenomics': {
    id:          'epigenomics',
    title:       'Epigenomics Analysis',
    tagline:     'ChIP-seq, ATAC-seq, and DNA methylation — rigorously analysed.',
    badge:       'Genomic & Sequencing',
    accentColor: COLORS.secondary,
    heroDesc:    'Epigenomic data requires specialist analysis that standard RNA-seq pipelines don\'t handle. We build ChIP-seq peak calling pipelines, ATAC-seq chromatin accessibility analyses, and WGBS methylation workflows — with integration against gene expression data to link regulatory changes to transcriptional outcomes.',
    tags:        ['Fixed-Fee Projects', 'Full Pipeline Code', 'From $2,000'],

    pipelineSteps: [
      { label: 'Raw Reads',        sub: 'FASTQ (ChIP / ATAC / BS-seq)',  color: COLORS.bio,       iconName: 'Dna'         },
      { label: 'QC & Alignment',   sub: 'Bowtie2 · BWA · Bismark',      color: COLORS.action,    iconName: 'Shield'      },
      { label: 'Peak Calling',     sub: 'MACS3 · HMMRATAC · SEACR',     color: COLORS.secondary, iconName: 'Activity'    },
      { label: 'Differential',     sub: 'DiffBind · DESeq2 · DSS',      color: COLORS.primary,   iconName: 'GitBranch'   },
      { label: 'Annotation',       sub: 'ChIPseeker · GREAT · Homer',   color: COLORS.accent,    iconName: 'BookOpen'    },
      { label: 'Report & Figures', sub: 'IGV tracks + publication figs',color: COLORS.bio,       iconName: 'BarChart3'   },
    ],

    stats: [
      { target: 95,  suffix: '%', label: 'Peak Reproducibility',      iconName: 'Activity',   color: COLORS.secondary },
      { target: 40,  suffix: '+', label: 'Epigenomics Projects',      iconName: 'FlaskConical',color: COLORS.bio      },
      { target: 3,   suffix: 'x', label: 'Faster than Manual',        iconName: 'Zap',        color: COLORS.gold     },
      { target: 100, suffix: '%', label: 'IDR-validated Peaks',       iconName: 'Shield',     color: COLORS.action   },
    ],

    features: [
      { iconName: 'Activity',   title: 'ChIP-seq Peak Calling',       color: COLORS.secondary, desc: 'MACS3 peak calling with input control normalisation, IDR analysis for replicate reproducibility, and blacklist region filtering.' },
      { iconName: 'Dna',        title: 'ATAC-seq Analysis',           color: COLORS.bio,       desc: 'Chromatin accessibility analysis with HMMRATAC or MACS3, nucleosome-free region calling, footprinting, and TF motif enrichment.' },
      { iconName: 'Database',   title: 'DNA Methylation (WGBS / RRBS)',color: COLORS.action,  desc: 'Bismark-based bisulfite alignment, differential methylation analysis with DSS or methylKit, and DMR annotation.' },
      { iconName: 'GitBranch',  title: 'Differential Peak Analysis',  color: COLORS.primary,  desc: 'DiffBind or DESeq2-based differential binding analysis between conditions — with condition-specific peak sets and fold-change statistics.' },
      { iconName: 'BookOpen',   title: 'Regulatory Annotation',       color: COLORS.accent,   desc: 'Peak annotation to nearest gene, promoter enrichment, GREAT pathway analysis, and motif enrichment with HOMER or MEME.' },
      { iconName: 'BarChart3',  title: 'Multi-omics Integration',     color: COLORS.gold,     desc: 'Integration of epigenomic peaks with RNA-seq data to link regulatory changes to expression — correlation plots and co-regulated gene sets.' },
    ],

    process: [
      { step: '01', title: 'Experimental Design Check', desc: 'Assay type (ChIP / ATAC / WGBS), control samples, replicate structure, and analysis goals reviewed before pipeline setup.' },
      { step: '02', title: 'Alignment & QC',            desc: 'Reads aligned, library complexity assessed, FRiP score calculated, and QC metrics reviewed before peak calling.' },
      { step: '03', title: 'Peak Calling & Analysis',   desc: 'Peaks called, IDR reproducibility assessed, differential analysis run, and regulatory annotation applied.' },
      { step: '04', title: 'Delivery',                  desc: 'BED / bigWig files, peak tables, figures, IGV session files, and a written results section.' },
    ],

    deliverables: [
      'Pipeline code (Nextflow / Snakemake)',
      'Aligned BAM files',
      'Peak files (BED, narrowPeak, broadPeak)',
      'Differential peaks / DMR table',
      'IGV-ready bigWig tracks',
      'Regulatory annotation report',
      'Publication-quality figures',
    ],

    techStack: [
      { label: 'Bowtie2',    color: COLORS.secondary },
      { label: 'MACS3',      color: COLORS.bio       },
      { label: 'Bismark',    color: COLORS.action    },
      { label: 'DiffBind',   color: COLORS.primary   },
      { label: 'ChIPseeker', color: COLORS.accent    },
      { label: 'HOMER',      color: COLORS.gold      },
      { label: 'R / Python', color: COLORS.secondary },
      { label: 'Nextflow',   color: COLORS.bio       },
    ],

    tiers: [
      { name: 'Single Assay',      price: 'From $2,000', featured: false,
        desc:     'One epigenomics assay analysed end-to-end with report.',
        features: ['One assay type', 'Peak calling + annotation', 'QC report + figures', '7–10 day delivery'] },
      { name: 'Full Epigenomics',  price: 'From $5,000', featured: true,
        desc:     'Differential analysis across conditions with multi-omics integration.',
        features: ['Differential peaks / DMRs', 'Motif enrichment', 'RNA-seq integration', 'Publication figures', '30-day support'] },
      { name: 'Multi-assay Study', price: 'Custom',      featured: false,
        desc:     'ChIP + ATAC + WGBS integrated study with regulatory network analysis.',
        features: ['Multi-assay integration', 'Regulatory network', 'Grant-ready outputs', 'Authorship negotiable'] },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  CATEGORY 2 — MULTI-OMICS & SYSTEMS
  // ══════════════════════════════════════════════════════════════════════════

  // ── 5. Multi-omics Analysis ───────────────────────────────────────────────
  'multi-omics': {
    id:          'multi-omics',
    title:       'Multi-omics Analysis',
    tagline:     'Connect the dots between genomics, transcriptomics, and proteomics.',
    badge:       'Multi-omics & Systems',
    accentColor: COLORS.bio,
    heroDesc:    'Single-omics analysis answers partial questions. Multi-omics integration reveals the regulatory relationships between molecular layers — linking genetic variants to expression changes to protein abundance to metabolite levels. We design and execute integrative analyses using MOFA+, DIABLO, and custom ML approaches.',
    tags:        ['Fixed-Fee Projects', 'Full Pipeline Code', 'From $3,500'],

    pipelineSteps: [
      { label: 'Multi-omics Data',  sub: 'Genomics / Transcriptomics / Proteomics', color: COLORS.bio,      iconName: 'Layers'    },
      { label: 'Per-layer QC',      sub: 'Individual QC per modality',              color: COLORS.action,   iconName: 'Shield'    },
      { label: 'Normalisation',     sub: 'Cross-modality normalisation',             color: COLORS.primary,  iconName: 'Activity'  },
      { label: 'Integration',       sub: 'MOFA+ · DIABLO · RGCCA',                  color: COLORS.accent,   iconName: 'GitBranch' },
      { label: 'Pathway Analysis',  sub: 'Cross-omics pathway enrichment',           color: COLORS.secondary,iconName: 'BookOpen'  },
      { label: 'Report & Figures',  sub: 'Integrated results + visualisation',       color: COLORS.bio,      iconName: 'BarChart3' },
    ],

    stats: [
      { target: 3,   suffix: 'x',  label: 'More Biological Insight',  iconName: 'Activity',   color: COLORS.bio      },
      { target: 30,  suffix: '+',  label: 'Multi-omics Projects',     iconName: 'Layers',     color: COLORS.gold     },
      { target: 10,  suffix: '+',  label: 'Integration Methods Used', iconName: 'GitBranch',  color: COLORS.action   },
      { target: 100, suffix: '%',  label: 'Reproducible Analysis',    iconName: 'Shield',     color: COLORS.secondary },
    ],

    features: [
      { iconName: 'Layers',     title: 'Factor Analysis (MOFA+)',      color: COLORS.bio,      desc: 'Multi-Omics Factor Analysis to identify latent factors driving variation across multiple omics layers simultaneously.' },
      { iconName: 'GitBranch',  title: 'Multi-block Integration',      color: COLORS.action,   desc: 'DIABLO and RGCCA-based supervised integration for identifying cross-omics biomarker signatures associated with clinical outcomes.' },
      { iconName: 'Activity',   title: 'Network Analysis',             color: COLORS.primary,  desc: 'Gene regulatory network inference, protein interaction integration, and multi-omics network visualisation with Cytoscape.' },
      { iconName: 'Database',   title: 'Data Harmonisation',           color: COLORS.accent,   desc: 'Cross-platform normalisation, batch correction, and missing value imputation strategies appropriate for each omics data type.' },
      { iconName: 'BookOpen',   title: 'Pathway Enrichment',           color: COLORS.secondary,desc: 'Cross-omics pathway enrichment identifying processes consistently altered across molecular layers — more robust than single-omics enrichment.' },
      { iconName: 'BarChart3',  title: 'Visualisation',                color: COLORS.gold,     desc: 'MOFA factor plots, circos omics integration diagrams, correlation heatmaps, and network visualisations — all source code included.' },
    ],

    process: [
      { step: '01', title: 'Data Review & Strategy',  desc: 'Available omics layers, sample overlap, missing data, and integration strategy agreed based on biological question.' },
      { step: '02', title: 'Per-layer QC & Normalisation', desc: 'Each omics layer QC\'d, normalised, and batch-corrected independently before cross-layer integration.' },
      { step: '03', title: 'Integration & Pathway',   desc: 'Multi-omics integration, latent factor analysis, and cross-omics pathway enrichment.' },
      { step: '04', title: 'Delivery',                desc: 'Integration results, visualisations, pathway report, and methods text for manuscript.' },
    ],

    deliverables: [
      'Multi-omics integration pipeline code',
      'Per-layer QC and normalisation reports',
      'Integration results (factors, loadings, correlations)',
      'Cross-omics pathway enrichment report',
      'Publication-quality integration figures',
      'Annotated analysis notebook',
      'Methods section text',
    ],

    techStack: [
      { label: 'MOFA+',      color: COLORS.bio      },
      { label: 'DIABLO',     color: COLORS.action   },
      { label: 'mixOmics',   color: COLORS.primary  },
      { label: 'R / Python', color: COLORS.accent   },
      { label: 'limma',      color: COLORS.secondary },
      { label: 'Cytoscape',  color: COLORS.gold     },
      { label: 'Nextflow',   color: COLORS.bio      },
      { label: 'DESeq2',     color: COLORS.action   },
    ],

    tiers: [
      { name: 'Two-omics Integration', price: 'From $3,500', featured: false,
        desc:     'Integration of two omics layers with pathway analysis and figures.',
        features: ['Two omics modalities', 'MOFA+ / DIABLO', 'Pathway enrichment', '10–14 day delivery'] },
      { name: 'Full Multi-omics',      price: 'From $7,500', featured: true,
        desc:     'Three or more omics layers with network analysis and clinical correlation.',
        features: ['3+ omics modalities', 'Network analysis', 'Clinical correlation', 'Publication figures', '30-day support'] },
      { name: 'Custom Research',       price: 'Custom',      featured: false,
        desc:     'Longitudinal or clinical multi-omics with regulatory submission support.',
        features: ['Longitudinal design', 'Clinical data handling', 'Regulatory documentation', 'Authorship negotiable'] },
    ],
  },

  // ── 6. Proteomics Integration ─────────────────────────────────────────────
  'proteomics': {
    id:          'proteomics',
    title:       'Proteomics Integration',
    tagline:     'From mass spectrometry to biological insight.',
    badge:       'Multi-omics & Systems',
    accentColor: COLORS.action,
    heroDesc:    'Proteomics data analysis requires specialist handling of mass spectrometry search results, peptide-protein inference, missing value imputation, and appropriate normalisation before any biological conclusion can be drawn. We build MaxQuant, Proteome Discoverer, and DIA-NN-based workflows with differential protein abundance analysis and multi-omics integration.',
    tags:        ['Fixed-Fee Projects', 'Full Pipeline Code', 'From $2,500'],

    pipelineSteps: [
      { label: 'MS Raw Data',      sub: 'RAW / mzML / DIA files',       color: COLORS.bio,      iconName: 'FlaskConical'},
      { label: 'Database Search',  sub: 'MaxQuant · DIA-NN · MSFragger', color: COLORS.action,   iconName: 'Database'   },
      { label: 'QC & Normalise',   sub: 'Perseus · limma · vsn',         color: COLORS.primary,  iconName: 'Shield'     },
      { label: 'Differential',     sub: 'limma · t-test · SAM',          color: COLORS.accent,   iconName: 'Activity'   },
      { label: 'Enrichment',       sub: 'GO · KEGG · STRING network',    color: COLORS.secondary,iconName: 'BookOpen'   },
      { label: 'Report & Figures', sub: 'Volcano · heatmap · network',   color: COLORS.bio,      iconName: 'BarChart3'  },
    ],

    stats: [
      { target: 98,  suffix: '%', label: 'Peptide FDR Controlled',    iconName: 'Shield',     color: COLORS.action   },
      { target: 35,  suffix: '+', label: 'Proteomics Projects',       iconName: 'FlaskConical',color: COLORS.bio     },
      { target: 5,   suffix: 'k+',label: 'Proteins Quantified',      iconName: 'Database',   color: COLORS.gold     },
      { target: 100, suffix: '%', label: 'Reproducible Workflow',     iconName: 'Activity',   color: COLORS.secondary },
    ],

    features: [
      { iconName: 'FlaskConical',title: 'MaxQuant / DIA-NN Processing', color: COLORS.action,   desc: 'DDA and DIA data processed with MaxQuant, DIA-NN, or MSFragger — with FDR-controlled protein identification at 1% peptide and protein level.' },
      { iconName: 'Shield',       title: 'QC & Normalisation',          color: COLORS.bio,      desc: 'Intensity distribution QC, median or VSN normalisation, missing value pattern analysis, and imputation strategy selection.' },
      { iconName: 'Activity',     title: 'Differential Abundance',      color: COLORS.primary,  desc: 'limma-based differential protein abundance analysis with multiple-testing correction, volcano plots, and contrast-level results.' },
      { iconName: 'BookOpen',     title: 'Pathway & Network Analysis',  color: COLORS.accent,   desc: 'GO, KEGG, and Reactome enrichment on differential proteins, STRING network analysis, and hub protein identification.' },
      { iconName: 'Database',     title: 'Post-translational Modifications', color: COLORS.secondary, desc: 'Phosphoproteomics, ubiquitinomics, and glycoproteomics data analysis — site localisation, differential PTM analysis, and kinase enrichment.' },
      { iconName: 'Layers',       title: 'Proteogenomics Integration',  color: COLORS.gold,     desc: 'Integration with RNA-seq or genomics data — protein-mRNA correlation, variant-specific peptide detection, and cross-omics pathway analysis.' },
    ],

    process: [
      { step: '01', title: 'Data & Design Review',       desc: 'Instrument type, acquisition mode (DDA/DIA), experimental design, and target proteins or modifications reviewed.' },
      { step: '02', title: 'Database Search & QC',       desc: 'Protein identification, FDR control, QC metrics, and normalisation strategy agreed before differential analysis.' },
      { step: '03', title: 'Differential Analysis',      desc: 'Differential protein abundance, PTM analysis if applicable, and pathway enrichment.' },
      { step: '04', title: 'Delivery',                   desc: 'Protein tables, figures, enrichment reports, and methods text suitable for manuscript submission.' },
    ],

    deliverables: [
      'Protein identification and quantification table',
      'QC report and normalisation summary',
      'Differential protein abundance results',
      'GO / KEGG / Reactome enrichment report',
      'STRING network visualisation',
      'Publication-quality figures',
      'Annotated analysis script',
    ],

    techStack: [
      { label: 'MaxQuant',     color: COLORS.action   },
      { label: 'DIA-NN',       color: COLORS.bio      },
      { label: 'Perseus',      color: COLORS.primary  },
      { label: 'limma',        color: COLORS.accent   },
      { label: 'R / Python',   color: COLORS.secondary },
      { label: 'STRING',       color: COLORS.gold     },
      { label: 'MSFragger',    color: COLORS.action   },
      { label: 'clusterProfiler', color: COLORS.bio   },
    ],

    tiers: [
      { name: 'Single Study',       price: 'From $2,500', featured: false,
        desc:     'Differential proteomics analysis with pathway enrichment and figures.',
        features: ['DE protein analysis', 'GO / KEGG enrichment', 'Volcano + heatmap', '7–10 day delivery'] },
      { name: 'Full Proteomics',    price: 'From $5,500', featured: true,
        desc:     'Full study with PTM analysis, network analysis, and omics integration.',
        features: ['PTM analysis', 'Network analysis', 'RNA-seq integration', 'Publication figures', '30-day support'] },
      { name: 'Clinical Proteomics',price: 'Custom',      featured: false,
        desc:     'Clinical biomarker discovery with HIPAA-compliant data handling.',
        features: ['Biomarker discovery', 'Clinical data handling', 'Regulatory documentation', 'Authorship negotiable'] },
    ],
  },

  // ── 7. Metabolomics Pipelines ─────────────────────────────────────────────
  'metabolomics': {
    id:          'metabolomics',
    title:       'Metabolomics Pipelines',
    tagline:     'Untargeted and targeted metabolomics — from raw spectra to biology.',
    badge:       'Multi-omics & Systems',
    accentColor: COLORS.secondary,
    heroDesc:    'Metabolomics data carries the functional fingerprint of cellular state — but only if the pre-processing, feature detection, and annotation are done correctly. We build XCMS, MZmine, and MetaboAnalyst-based workflows for untargeted LC-MS/MS and NMR metabolomics, with pathway analysis and multi-omics integration.',
    tags:        ['Fixed-Fee Projects', 'Full Pipeline Code', 'From $2,500'],

    pipelineSteps: [
      { label: 'Raw Spectra',       sub: 'mzML / CDF / NMR FID',        color: COLORS.bio,       iconName: 'FlaskConical'},
      { label: 'Pre-processing',    sub: 'XCMS · MZmine · OpenMS',       color: COLORS.action,    iconName: 'Activity'   },
      { label: 'Feature Detection', sub: 'Peak picking · alignment',     color: COLORS.secondary, iconName: 'Database'   },
      { label: 'Annotation',        sub: 'HMDB · METLIN · KEGG',         color: COLORS.primary,   iconName: 'BookOpen'   },
      { label: 'Statistical Anal.', sub: 'PCA · PLS-DA · ANOVA',         color: COLORS.accent,    iconName: 'BarChart3'  },
      { label: 'Pathway Analysis',  sub: 'MetaboAnalyst · mSet',         color: COLORS.bio,       iconName: 'GitBranch'  },
    ],

    stats: [
      { target: 90,  suffix: '%', label: 'Feature Reproducibility',   iconName: 'Activity',   color: COLORS.secondary },
      { target: 30,  suffix: '+', label: 'Metabolomics Projects',     iconName: 'FlaskConical',color: COLORS.bio      },
      { target: 500, suffix: '+', label: 'Metabolites Annotated',     iconName: 'Database',   color: COLORS.gold     },
      { target: 100, suffix: '%', label: 'Reproducible Workflow',     iconName: 'Shield',     color: COLORS.action   },
    ],

    features: [
      { iconName: 'FlaskConical',title: 'Untargeted LC-MS/MS',         color: COLORS.secondary, desc: 'XCMS or MZmine-based peak detection, retention time alignment, and gap-filling for untargeted metabolomics profiling.' },
      { iconName: 'Database',     title: 'Metabolite Annotation',      color: COLORS.bio,       desc: 'MS2 spectral matching against HMDB, METLIN, and MassBank; chemical formula prediction; and adduct annotation for putative identification.' },
      { iconName: 'Activity',     title: 'Multivariate Statistics',    color: COLORS.action,    desc: 'PCA for quality control, PLS-DA for class discrimination, OPLS-DA for biomarker discovery, and ANOVA for group comparison.' },
      { iconName: 'GitBranch',    title: 'Pathway Analysis',           color: COLORS.primary,   desc: 'MetaboAnalyst pathway analysis, metabolite set enrichment (MSEA), and joint pathway analysis integrating metabolomics and transcriptomics.' },
      { iconName: 'BookOpen',     title: 'NMR Metabolomics',           color: COLORS.accent,    desc: 'NMR spectral binning or targeted spectral profiling, Chenomx assignment, and multivariate analysis for NMR-based studies.' },
      { iconName: 'Layers',       title: 'Multi-omics Integration',    color: COLORS.gold,      desc: 'Correlation-based integration of metabolomics with transcriptomics or proteomics — joint pathway maps and cross-omics biomarker panels.' },
    ],

    process: [
      { step: '01', title: 'Data & Platform Review', desc: 'Instrument, ionisation mode, study design, and quality control samples reviewed before pre-processing strategy agreed.' },
      { step: '02', title: 'Pre-processing & QC',    desc: 'Feature detection, alignment, QC sample assessment, and normalisation — with coefficient of variation reporting for QC features.' },
      { step: '03', title: 'Statistics & Pathway',   desc: 'Multivariate analysis, differential features, annotation, and pathway enrichment.' },
      { step: '04', title: 'Delivery',               desc: 'Feature tables, annotation lists, statistical results, pathway report, and publication figures.' },
    ],

    deliverables: [
      'Pre-processed feature table',
      'Annotated metabolite list',
      'QC and reproducibility report',
      'Multivariate analysis results',
      'Differential metabolite table',
      'Pathway enrichment report',
      'Publication-quality figures',
    ],

    techStack: [
      { label: 'XCMS',          color: COLORS.secondary },
      { label: 'MZmine',        color: COLORS.bio       },
      { label: 'MetaboAnalyst', color: COLORS.action    },
      { label: 'R / Python',    color: COLORS.primary   },
      { label: 'OpenMS',        color: COLORS.accent    },
      { label: 'HMDB',          color: COLORS.gold      },
      { label: 'mixOmics',      color: COLORS.secondary },
      { label: 'SIRIUS',        color: COLORS.bio       },
    ],

    tiers: [
      { name: 'Single Study',       price: 'From $2,500', featured: false,
        desc:     'Untargeted metabolomics with annotation and pathway analysis.',
        features: ['Pre-processing', 'Annotation + pathway', 'Statistical results', '7–10 day delivery'] },
      { name: 'Full Metabolomics',  price: 'From $5,500', featured: true,
        desc:     'Full study with multivariate analysis and multi-omics integration.',
        features: ['Multivariate statistics', 'MSEA / pathway', 'Omics integration', 'Publication figures', '30-day support'] },
      { name: 'Clinical Metabolomics', price: 'Custom',  featured: false,
        desc:     'Biomarker discovery study with clinical data and regulatory support.',
        features: ['Biomarker discovery', 'Clinical data handling', 'Regulatory documentation', 'Authorship negotiable'] },
    ],
  },

  // ── 8. Single-cell Analysis ───────────────────────────────────────────────
  'single-cell': {
    id:          'single-cell',
    title:       'Single-cell Analysis',
    tagline:     'Cell-type deconvolution, trajectory analysis, and spatial transcriptomics.',
    badge:       'Multi-omics & Systems',
    accentColor: COLORS.primary,
    heroDesc:    'Single-cell RNA-seq reveals cell-type heterogeneity invisible in bulk RNA-seq — but requires careful QC, normalisation, dimensionality reduction, and cell-type annotation to draw valid biological conclusions. We build Seurat and Scanpy-based scRNA-seq workflows, including cell-type annotation, trajectory inference, and spatial transcriptomics analysis.',
    tags:        ['Fixed-Fee Projects', 'Full Pipeline Code', 'From $2,500'],

    pipelineSteps: [
      { label: 'Raw scRNA-seq',    sub: 'FASTQ / CellRanger output',    color: COLORS.bio,       iconName: 'Dna'        },
      { label: 'QC & Filtering',   sub: 'Doublet removal · ambient RNA',color: COLORS.action,    iconName: 'Shield'     },
      { label: 'Normalise & Embed',sub: 'SCTransform · PCA · UMAP',     color: COLORS.primary,   iconName: 'Layers'     },
      { label: 'Clustering',       sub: 'Leiden · Louvain · scVI',      color: COLORS.accent,    iconName: 'GitBranch'  },
      { label: 'Cell Annotation',  sub: 'Marker genes · SingleR · Azimuth',color: COLORS.secondary,iconName: 'BookOpen'},
      { label: 'Report & Figures', sub: 'UMAP + DE + trajectory',       color: COLORS.bio,       iconName: 'BarChart3'  },
    ],

    stats: [
      { target: 95,  suffix: '%', label: 'Cell-type Accuracy',         iconName: 'Activity',   color: COLORS.primary  },
      { target: 40,  suffix: '+', label: 'scRNA-seq Projects',         iconName: 'FlaskConical',color: COLORS.bio     },
      { target: 50,  suffix: 'k+',label: 'Cells Analysed Avg',        iconName: 'Microscope', color: COLORS.gold     },
      { target: 100, suffix: '%', label: 'Reproducible Workflow',      iconName: 'Shield',     color: COLORS.action   },
    ],

    features: [
      { iconName: 'Microscope',  title: 'scRNA-seq QC & Pre-processing',color: COLORS.primary,  desc: 'Ambient RNA removal (SoupX), doublet detection (DoubletFinder / Scrublet), and QC filtering with appropriate per-sample thresholds.' },
      { iconName: 'Layers',      title: 'Dimensionality Reduction',    color: COLORS.bio,       desc: 'SCTransform normalisation, PCA, UMAP, and t-SNE — with batch correction using Harmony, scVI, or BBKNN for multi-sample studies.' },
      { iconName: 'GitBranch',   title: 'Clustering & Cell Annotation',color: COLORS.action,    desc: 'Leiden or Louvain clustering, marker gene identification, and cell-type annotation using SingleR, Azimuth, or manual curation.' },
      { iconName: 'Activity',    title: 'Trajectory Analysis',         color: COLORS.accent,    desc: 'Pseudotime analysis with Monocle3 or PAGA — connecting cell states along differentiation or activation trajectories.' },
      { iconName: 'Database',    title: 'Spatial Transcriptomics',     color: COLORS.secondary, desc: 'Visium, Slide-seq, and MERFISH analysis with cell-type deconvolution, spatially variable gene detection, and tissue region annotation.' },
      { iconName: 'BookOpen',    title: 'Cell Communication',          color: COLORS.gold,      desc: 'CellChat or NicheNet-based ligand-receptor interaction analysis between cell types — intercellular signalling network inference.' },
    ],

    process: [
      { step: '01', title: 'Data & Experimental Design', desc: 'Sample source, expected cell types, batch structure, and analysis goals reviewed before QC thresholds are set.' },
      { step: '02', title: 'QC, Normalisation & Embedding', desc: 'Per-sample QC, ambient RNA and doublet removal, normalisation, batch correction, and UMAP generation.' },
      { step: '03', title: 'Clustering & Analysis',      desc: 'Cell-type annotation, DE analysis between clusters or conditions, trajectory inference, and spatial analysis.' },
      { step: '04', title: 'Delivery',                   desc: 'Seurat / AnnData objects, UMAP figures, DE tables, cell-type annotation tables, and methods text.' },
    ],

    deliverables: [
      'Seurat / AnnData analysis objects',
      'QC report and filtering summary',
      'Cell-type annotation table',
      'DE genes per cluster / condition',
      'UMAP and cluster figures',
      'Trajectory and/or spatial analysis results',
      'Annotated pipeline notebook',
    ],

    techStack: [
      { label: 'Seurat',        color: COLORS.primary  },
      { label: 'Scanpy',        color: COLORS.bio      },
      { label: 'scVI',          color: COLORS.action   },
      { label: 'Harmony',       color: COLORS.accent   },
      { label: 'Monocle3',      color: COLORS.secondary },
      { label: 'R / Python',    color: COLORS.gold     },
      { label: 'CellChat',      color: COLORS.primary  },
      { label: 'Squidpy',       color: COLORS.bio      },
    ],

    tiers: [
      { name: 'Single Dataset',    price: 'From $2,500', featured: false,
        desc:     'scRNA-seq analysis with QC, clustering, and cell-type annotation.',
        features: ['QC + clustering', 'Cell annotation', 'DE genes', '7–10 day delivery'] },
      { name: 'Full scRNA-seq',    price: 'From $6,000', featured: true,
        desc:     'Multi-sample study with trajectory, spatial, or cell communication analysis.',
        features: ['Multi-sample integration', 'Trajectory analysis', 'Spatial / CCC analysis', 'Publication figures', '30-day support'] },
      { name: 'Custom / Clinical', price: 'Custom',      featured: false,
        desc:     'Clinical single-cell study with HIPAA compliance and regulatory outputs.',
        features: ['Clinical data handling', 'HIPAA compliance', 'Regulatory documentation', 'Authorship negotiable'] },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  CATEGORY 3 — CLINICAL AI
  // ══════════════════════════════════════════════════════════════════════════

  // ── 9. Clinical Decision AI ───────────────────────────────────────────────
  'clinical-ai': {
    id:          'clinical-ai',
    title:       'Clinical Decision AI',
    tagline:     'ML models that support — not replace — clinical judgment.',
    badge:       'Clinical AI',
    accentColor: COLORS.bio,
    heroDesc:    'Clinical decision support AI must be rigorously validated, explainable, and calibrated — not just accurate on a held-out test set. We build clinical prediction models with proper temporal validation, calibration assessment, SHAP-based explainability, and documentation aligned to regulatory and publication standards.',
    tags:        ['Fixed-Fee Projects', 'Full Code & Documentation', 'From $4,500'],

    pipelineSteps: [
      { label: 'Clinical Data',    sub: 'EHR / structured / omics',     color: COLORS.bio,       iconName: 'Database'   },
      { label: 'Preprocessing',    sub: 'Imputation · normalise · SMOTE',color: COLORS.action,   iconName: 'Shield'     },
      { label: 'Feature Engineer.',sub: 'Clinical feature selection',    color: COLORS.primary,   iconName: 'Layers'     },
      { label: 'Model Training',   sub: 'XGBoost · LightGBM · ensemble',color: COLORS.accent,    iconName: 'Brain'      },
      { label: 'Validation',       sub: 'Temporal · external · calibrate',color: COLORS.secondary,iconName: 'Activity'  },
      { label: 'Clinical Report',  sub: 'SHAP + calibration + report',  color: COLORS.bio,       iconName: 'BookOpen'   },
    ],

    stats: [
      { target: 0.92, suffix: ' AUC', label: 'Avg Model Performance',  iconName: 'Activity',   color: COLORS.bio      },
      { target: 40,   suffix: '+',    label: 'Clinical Models Built',  iconName: 'Brain',      color: COLORS.action   },
      { target: 100,  suffix: '%',    label: 'SHAP Explained',         iconName: 'Shield',     color: COLORS.gold     },
      { target: 100,  suffix: '%',    label: 'Calibration Assessed',   iconName: 'BarChart3',  color: COLORS.secondary },
    ],

    features: [
      { iconName: 'Brain',      title: 'Prediction Model Development', color: COLORS.bio,       desc: 'XGBoost, LightGBM, logistic regression, and ensemble models — with hyperparameter tuning and nested cross-validation to avoid optimistic performance estimates.' },
      { iconName: 'Shield',     title: 'Temporal & External Validation',color: COLORS.action,   desc: 'Time-based train/test splits, external cohort validation, and calibration assessment — the validation strategy regulators and journals actually require.' },
      { iconName: 'Activity',   title: 'Model Calibration',            color: COLORS.primary,  desc: 'Calibration plots, Brier score, ECE assessment, and Platt scaling or isotonic regression calibration for probability outputs.' },
      { iconName: 'Database',   title: 'SHAP Explainability',          color: COLORS.accent,   desc: 'Global feature importance, per-patient SHAP waterfall plots, and interaction effects — required for clinical adoption and regulatory review.' },
      { iconName: 'Layers',     title: 'Clinical Feature Engineering', color: COLORS.secondary,desc: 'Missing data imputation, temporal feature extraction from longitudinal EHR data, and clinical domain knowledge applied to feature selection.' },
      { iconName: 'BookOpen',   title: 'Regulatory Documentation',     color: COLORS.gold,     desc: 'Model card, intended use statement, performance report, and bias assessment aligned to FDA AI/ML guidance and TRIPOD+AI reporting standards.' },
    ],

    process: [
      { step: '01', title: 'Clinical & Data Review',  desc: 'Outcome definition, data source, missing data pattern, class imbalance, and validation strategy agreed before modelling.' },
      { step: '02', title: 'Preprocessing & Features',desc: 'Imputation, feature engineering, and train/validation/test split established — temporal split where data supports it.' },
      { step: '03', title: 'Model Build & Validation', desc: 'Model trained, hyperparameters tuned, temporal/external validation run, and calibration assessed.' },
      { step: '04', title: 'Explainability & Report', desc: 'SHAP analysis, bias assessment, model card, and findings report aligned to TRIPOD+AI standards.' },
    ],

    deliverables: [
      'Model code and trained model artifact',
      'Preprocessing and feature engineering pipeline',
      'Performance metrics (AUC, calibration, NRI)',
      'SHAP explainability report',
      'Calibration plot and Brier score',
      'Model card and documentation',
      'Methods section text (TRIPOD+AI aligned)',
    ],

    techStack: [
      { label: 'Python',       color: COLORS.bio      },
      { label: 'XGBoost',      color: COLORS.action   },
      { label: 'LightGBM',     color: COLORS.primary  },
      { label: 'scikit-learn', color: COLORS.accent   },
      { label: 'SHAP',         color: COLORS.secondary },
      { label: 'lifelines',    color: COLORS.gold     },
      { label: 'imbalanced-learn',color: COLORS.bio   },
      { label: 'R (survival)', color: COLORS.action   },
    ],

    tiers: [
      { name: 'Clinical Model',     price: 'From $4,500', featured: false,
        desc:     'Prediction model with temporal validation and SHAP explainability.',
        features: ['Model development', 'Temporal validation', 'SHAP report', '2–3 week delivery'] },
      { name: 'Full Clinical AI',   price: 'From $9,000', featured: true,
        desc:     'Multi-model study with external validation and regulatory documentation.',
        features: ['Multiple models', 'External validation', 'Calibration', 'Model card', '30-day support'] },
      { name: 'Regulatory Pipeline',price: 'Custom',      featured: false,
        desc:     'FDA/CE-aligned AI model pipeline with full regulatory documentation.',
        features: ['FDA AI/ML guidance', 'TRIPOD+AI reporting', 'Bias assessment', 'Submission support'] },
    ],
  },

  // ── 10. Diagnostic AI Models ──────────────────────────────────────────────
  'diagnostic': {
    id:          'diagnostic',
    title:       'Diagnostic AI Models',
    tagline:     'ML-based diagnostic classification with clinical-grade validation.',
    badge:       'Clinical AI',
    accentColor: COLORS.action,
    heroDesc:    'Diagnostic AI models must perform across the full performance spectrum — sensitivity, specificity, PPV, NPV — not just AUC. We build binary and multi-class diagnostic classifiers from omics, imaging features, or structured EHR data, with decision-threshold analysis, cost-sensitive evaluation, and clinical performance reporting.',
    tags:        ['Fixed-Fee Projects', 'Full Code & Documentation', 'From $4,000'],

    pipelineSteps: [
      { label: 'Clinical Data',    sub: 'Omics / EHR / imaging features',color: COLORS.bio,      iconName: 'Database'   },
      { label: 'QC & Balance',     sub: 'Class balancing · imputation',  color: COLORS.action,    iconName: 'Shield'     },
      { label: 'Feature Selection',sub: 'Clinical + statistical filter', color: COLORS.primary,   iconName: 'Layers'     },
      { label: 'Model Training',   sub: 'RF · XGBoost · neural net',    color: COLORS.accent,    iconName: 'Brain'      },
      { label: 'Clinical Eval.',   sub: 'Sens / Spec / PPV / NPV / AUC',color: COLORS.secondary, iconName: 'Activity'   },
      { label: 'Report',           sub: 'SHAP + clinical threshold rpt', color: COLORS.bio,       iconName: 'BookOpen'   },
    ],

    stats: [
      { target: 94,  suffix: '%', label: 'Avg Sensitivity',            iconName: 'Activity',   color: COLORS.action   },
      { target: 35,  suffix: '+', label: 'Diagnostic Models Built',    iconName: 'Brain',      color: COLORS.bio      },
      { target: 100, suffix: '%', label: 'Threshold Optimised',        iconName: 'Shield',     color: COLORS.gold     },
      { target: 100, suffix: '%', label: 'SHAP Explained',             iconName: 'BarChart3',  color: COLORS.secondary },
    ],

    features: [
      { iconName: 'Brain',      title: 'Binary & Multi-class Classification', color: COLORS.action,   desc: 'Random forest, XGBoost, and neural network classifiers for binary diagnosis and multi-class disease subtyping — with nested CV performance estimates.' },
      { iconName: 'Activity',   title: 'Clinical Performance Metrics',   color: COLORS.bio,      desc: 'Full sensitivity, specificity, PPV, NPV, LR+/LR-, and AUC reporting — at multiple decision thresholds for clinical utility assessment.' },
      { iconName: 'Shield',     title: 'Threshold Analysis',             color: COLORS.primary,  desc: 'ROC and precision-recall analysis, cost-sensitive threshold selection, and clinical decision curve analysis for benefit evaluation.' },
      { iconName: 'Database',   title: 'Biomarker Panel Design',         color: COLORS.accent,   desc: 'Minimal biomarker panel selection combining clinical variables with omics features — balancing performance and practical implementability.' },
      { iconName: 'Layers',     title: 'SHAP & Explainability',          color: COLORS.secondary,desc: 'Per-patient SHAP explanations, global feature importance, and interaction plots — making diagnostic model decisions transparent to clinicians.' },
      { iconName: 'BookOpen',   title: 'STARD-aligned Reporting',       color: COLORS.gold,     desc: 'Diagnostic accuracy results reported following STARD guidelines — the standard journal reviewers and regulatory bodies expect.' },
    ],

    process: [
      { step: '01', title: 'Clinical & Data Design',  desc: 'Reference standard, class definition, feature set, and evaluation strategy agreed before modelling begins.' },
      { step: '02', title: 'Preprocessing & Training',desc: 'Class balancing, feature selection, model training with nested cross-validation, and held-out test set evaluation.' },
      { step: '03', title: 'Clinical Evaluation',     desc: 'Full clinical performance metrics, threshold analysis, decision curve analysis, and calibration.' },
      { step: '04', title: 'Report & Delivery',       desc: 'STARD-aligned performance report, SHAP analysis, model code, and methods text.' },
    ],

    deliverables: [
      'Trained diagnostic model code',
      'Full performance metrics report (STARD)',
      'ROC and precision-recall curves',
      'Decision curve analysis',
      'SHAP explainability report',
      'Biomarker panel summary',
      'Methods text for manuscript',
    ],

    techStack: [
      { label: 'Python',       color: COLORS.action   },
      { label: 'scikit-learn', color: COLORS.bio      },
      { label: 'XGBoost',      color: COLORS.primary  },
      { label: 'SHAP',         color: COLORS.accent   },
      { label: 'dcurves',      color: COLORS.secondary },
      { label: 'R (pROC)',     color: COLORS.gold     },
      { label: 'imbalanced-learn',color: COLORS.action },
      { label: 'PyTorch',      color: COLORS.bio      },
    ],

    tiers: [
      { name: 'Diagnostic Model',    price: 'From $4,000', featured: false,
        desc:     'Binary diagnostic classifier with clinical metrics and SHAP.',
        features: ['Binary classifier', 'Clinical metrics', 'SHAP report', '2–3 week delivery'] },
      { name: 'Full Diagnostic AI',  price: 'From $8,500', featured: true,
        desc:     'Multi-class or biomarker panel model with clinical decision analysis.',
        features: ['Multi-class / panel', 'Decision curve analysis', 'Threshold optimisation', 'STARD report', '30-day support'] },
      { name: 'Regulatory Ready',    price: 'Custom',      featured: false,
        desc:     'FDA/CE-aligned diagnostic AI with full regulatory documentation.',
        features: ['FDA AI guidance', 'External validation', 'Bias assessment', 'Regulatory submission'] },
    ],
  },

  // ── 11. Patient Risk Stratification ──────────────────────────────────────
  'risk': {
    id:          'risk',
    title:       'Patient Risk Stratification',
    tagline:     'Survival models and risk scores that stratify patients reliably.',
    badge:       'Clinical AI',
    accentColor: COLORS.secondary,
    heroDesc:    'Patient risk stratification models — from survival analysis to readmission prediction to clinical risk scores — require proper time-to-event handling, competing risks, and external validation before any clinical claim can be made. We build Cox proportional hazards, Random Survival Forest, and deep survival models with full calibration and discrimination reporting.',
    tags:        ['Fixed-Fee Projects', 'Full Code & Documentation', 'From $4,000'],

    pipelineSteps: [
      { label: 'Clinical Data',    sub: 'EHR · survival data · omics',  color: COLORS.bio,       iconName: 'Database'  },
      { label: 'Time-to-event',    sub: 'Censoring · competing risks',  color: COLORS.action,    iconName: 'Shield'    },
      { label: 'Feature Eng.',     sub: 'Clinical + statistical select',color: COLORS.secondary,  iconName: 'Layers'    },
      { label: 'Model Training',   sub: 'Cox PH · RSF · DeepSurv',     color: COLORS.primary,   iconName: 'Brain'     },
      { label: 'Validation',       sub: 'C-index · calibration · IBS',  color: COLORS.accent,    iconName: 'Activity'  },
      { label: 'Nomogram & Rpt',   sub: 'Clinical score + report',      color: COLORS.bio,       iconName: 'BookOpen'  },
    ],

    stats: [
      { target: 0.82,suffix: ' C-idx',label: 'Avg Discrimination',    iconName: 'Activity',   color: COLORS.secondary },
      { target: 35,  suffix: '+',      label: 'Risk Models Built',    iconName: 'Brain',      color: COLORS.bio       },
      { target: 100, suffix: '%',      label: 'Calibration Assessed', iconName: 'Shield',     color: COLORS.gold      },
      { target: 100, suffix: '%',      label: 'TRIPOD-aligned',       iconName: 'BookOpen',   color: COLORS.action    },
    ],

    features: [
      { iconName: 'Brain',      title: 'Survival Analysis',             color: COLORS.secondary, desc: 'Cox proportional hazards, Kaplan-Meier, and log-rank testing for time-to-event outcomes — with assumption checks and Schoenfeld residual analysis.' },
      { iconName: 'Activity',   title: 'Machine Learning Survival',     color: COLORS.bio,       desc: 'Random Survival Forest (RSF), DeepSurv, and XGBoost Survival for non-linear risk modelling — with C-index and IBS performance metrics.' },
      { iconName: 'Layers',     title: 'Competing Risks',               color: COLORS.action,    desc: 'Fine-Gray subdistribution hazard models and cause-specific hazard analysis for multi-event outcomes where competing events matter.' },
      { iconName: 'Database',   title: 'Clinical Risk Scores',          color: COLORS.primary,   desc: 'Simplified integer risk scores and nomograms derived from model outputs — clinically implementable without a computer at the bedside.' },
      { iconName: 'Shield',     title: 'Calibration & Discrimination',  color: COLORS.accent,    desc: 'C-index, Harrell\'s C, IBS, calibration plots at multiple time points, and D-statistic for full performance characterisation.' },
      { iconName: 'BookOpen',   title: 'TRIPOD+AI Reporting',           color: COLORS.gold,      desc: 'Risk model reporting following TRIPOD+AI — the reporting standard journals and regulatory reviewers require for clinical prediction models.' },
    ],

    process: [
      { step: '01', title: 'Outcome & Data Review', desc: 'Outcome definition, censoring mechanism, follow-up completeness, and competing risks identified before modelling.' },
      { step: '02', title: 'Model Development',     desc: 'Feature selection, model training, assumption checks, and hold-out or temporal validation.' },
      { step: '03', title: 'Calibration & Scoring', desc: 'Calibration at multiple time points, IBS calculation, and clinical risk score derivation.' },
      { step: '04', title: 'Report & Delivery',     desc: 'TRIPOD+AI report, nomogram or risk score, model code, and methods text.' },
    ],

    deliverables: [
      'Survival model code',
      'Kaplan-Meier and cumulative incidence figures',
      'C-index and IBS metrics',
      'Calibration plots (multiple timepoints)',
      'Clinical nomogram or risk score table',
      'TRIPOD+AI aligned report',
      'Methods section text',
    ],

    techStack: [
      { label: 'Python',        color: COLORS.secondary },
      { label: 'lifelines',     color: COLORS.bio       },
      { label: 'scikit-survival',color: COLORS.action   },
      { label: 'R (survival)',  color: COLORS.primary   },
      { label: 'rms (R)',       color: COLORS.accent    },
      { label: 'DeepSurv',      color: COLORS.gold      },
      { label: 'SHAP',          color: COLORS.secondary },
      { label: 'cmprsk (R)',    color: COLORS.bio       },
    ],

    tiers: [
      { name: 'Survival Model',     price: 'From $4,000', featured: false,
        desc:     'Cox or RSF survival model with validation and calibration.',
        features: ['Survival modelling', 'C-index + calibration', 'KM figures', '2–3 week delivery'] },
      { name: 'Clinical Risk Score',price: 'From $8,000', featured: true,
        desc:     'Full risk model with nomogram, competing risks, and TRIPOD report.',
        features: ['Competing risks', 'Nomogram / score', 'TRIPOD+AI report', 'Temporal validation', '30-day support'] },
      { name: 'Regulatory Risk AI', price: 'Custom',      featured: false,
        desc:     'FDA/NICE-aligned risk model with external validation and submission support.',
        features: ['External validation', 'Regulatory documentation', 'NICE guidelines', 'Submission support'] },
    ],
  },

  // ── 12. Imaging AI (Pathology) ────────────────────────────────────────────
  'pathology': {
    id:          'pathology',
    title:       'Imaging AI (Pathology)',
    tagline:     'Deep learning on histopathology and medical imaging data.',
    badge:       'Clinical AI',
    accentColor: COLORS.primary,
    heroDesc:    'Computational pathology requires deep learning expertise combined with clinical domain knowledge. We build CNN and Vision Transformer-based models for whole-slide image classification, segmentation, and biomarker prediction — with rigorous pathologist-level benchmarking, tile-level attention maps, and documentation aligned to clinical and regulatory standards.',
    tags:        ['Fixed-Fee Projects', 'Full Code & Documentation', 'From $6,000'],

    pipelineSteps: [
      { label: 'Slide Input',      sub: 'WSI / TIFF / DICOM',           color: COLORS.bio,       iconName: 'Microscope' },
      { label: 'Pre-processing',   sub: 'Stain norm · tiling · QC',     color: COLORS.action,    iconName: 'Shield'     },
      { label: 'Feature Ext.',     sub: 'CNN · ViT · UNI · CONCH',      color: COLORS.primary,   iconName: 'Brain'      },
      { label: 'MIL Aggregation',  sub: 'ABMIL · TransMIL · CLAM',      color: COLORS.accent,    iconName: 'Layers'     },
      { label: 'Validation',       sub: 'Cross-val · ext. cohort',      color: COLORS.secondary, iconName: 'Activity'   },
      { label: 'Attention Maps',   sub: 'Grad-CAM · attention heatmaps',color: COLORS.bio,       iconName: 'BarChart3'  },
    ],

    stats: [
      { target: 93,  suffix: '%', label: 'Classification Accuracy',    iconName: 'Activity',   color: COLORS.primary  },
      { target: 25,  suffix: '+', label: 'Pathology AI Projects',      iconName: 'Microscope', color: COLORS.bio      },
      { target: 100, suffix: '%', label: 'Attention Map Visualised',   iconName: 'Eye',        color: COLORS.gold     },
      { target: 100, suffix: '%', label: 'Pathologist Benchmarked',    iconName: 'Shield',     color: COLORS.action   },
    ],

    features: [
      { iconName: 'Microscope', title: 'WSI Classification',            color: COLORS.primary,  desc: 'Whole-slide image classification with CLAM, TransMIL, or ABMIL — tumour vs normal, grade classification, and molecular subtype prediction.' },
      { iconName: 'Brain',      title: 'Foundation Model Features',     color: COLORS.bio,      desc: 'UNI, CONCH, and PLIP pathology foundation model feature extraction — outperforming CNN feature extraction on most pathology tasks.' },
      { iconName: 'Layers',     title: 'Segmentation',                  color: COLORS.action,   desc: 'Tissue and cell segmentation with U-Net, nnU-Net, or HoVer-Net — nucleus detection, gland segmentation, and tumour microenvironment quantification.' },
      { iconName: 'Activity',   title: 'Biomarker Prediction',          color: COLORS.accent,   desc: 'Mutation status, MSI, TMB, and receptor status prediction from H&E slides — without requiring IHC or molecular testing.' },
      { iconName: 'Eye',        title: 'Attention Visualisation',       color: COLORS.secondary,desc: 'Tile-level attention maps and Grad-CAM overlays showing which tissue regions drive model predictions — essential for pathologist review.' },
      { iconName: 'Shield',     title: 'Pathologist Benchmarking',      color: COLORS.gold,     desc: 'Model performance benchmarked against pathologist consensus — sensitivity, specificity, and kappa statistics for clinical comparison.' },
    ],

    process: [
      { step: '01', title: 'Slide & Label Review',     desc: 'Slide quality, stain variation, label quality, cohort size, and class balance reviewed before pipeline design.' },
      { step: '02', title: 'Pre-processing & Features',desc: 'Stain normalisation, tiling, tissue detection, and foundation model feature extraction.' },
      { step: '03', title: 'Model Training & Validation',desc: 'MIL model trained, cross-validation run, and external cohort validation where available.' },
      { step: '04', title: 'Visualisation & Report',   desc: 'Attention maps, performance metrics, pathologist benchmarking, and regulatory-aligned documentation.' },
    ],

    deliverables: [
      'Model code and trained weights',
      'Pre-processing pipeline',
      'Performance metrics (AUC, F1, kappa)',
      'Attention map visualisations',
      'Pathologist benchmark comparison',
      'Model card and documentation',
      'Methods section text',
    ],

    techStack: [
      { label: 'Python',       color: COLORS.primary  },
      { label: 'PyTorch',      color: COLORS.bio      },
      { label: 'CLAM',         color: COLORS.action   },
      { label: 'UNI / CONCH',  color: COLORS.accent   },
      { label: 'nnU-Net',      color: COLORS.secondary },
      { label: 'OpenSlide',    color: COLORS.gold     },
      { label: 'CUDA',         color: COLORS.primary  },
      { label: 'QuPath',       color: COLORS.bio      },
    ],

    tiers: [
      { name: 'WSI Classification',price: 'From $6,000',  featured: false,
        desc:     'Whole-slide classifier with attention maps and performance report.',
        features: ['MIL classification', 'Attention maps', 'AUC + metrics', '3–4 week delivery'] },
      { name: 'Full Pathology AI',  price: 'From $13,000', featured: true,
        desc:     'Biomarker prediction or segmentation with external validation.',
        features: ['Biomarker prediction / segmentation', 'External validation', 'Pathologist benchmark', 'Model card', '30-day support'] },
      { name: 'Regulatory Pathology AI', price: 'Custom', featured: false,
        desc:     'CE/FDA-aligned pathology AI with full regulatory documentation.',
        features: ['FDA 510(k) / CE', 'Prospective validation', 'Regulatory documentation', 'Submission support'] },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  //  CATEGORY 4 — DRUG & LAB
  // ══════════════════════════════════════════════════════════════════════════

  // ── 13. Drug Discovery AI ─────────────────────────────────────────────────
  'drug-discovery': {
    id:          'drug-discovery',
    title:       'Drug Discovery AI',
    tagline:     'ML-accelerated target identification, screening, and lead optimisation.',
    badge:       'Drug & Lab',
    accentColor: COLORS.bio,
    heroDesc:    'Drug discovery AI accelerates the most expensive steps in the pipeline — target identification, virtual screening, and ADMET property prediction. We build graph neural networks for molecular property prediction, virtual screening pipelines for hit identification, and ML models for ADMET prediction — with proper validation against experimental data.',
    tags:        ['Fixed-Fee Projects', 'Full Pipeline Code', 'From $5,000'],

    pipelineSteps: [
      { label: 'Target / Library', sub: 'Protein target · compound lib',  color: COLORS.bio,      iconName: 'FlaskConical'},
      { label: 'Repr. & Feats',    sub: 'Morgan FP · ECFP · Graph',       color: COLORS.action,   iconName: 'Database'   },
      { label: 'Model Training',   sub: 'GNN · RF · QSAR · VAE',          color: COLORS.secondary,iconName: 'Brain'      },
      { label: 'Virtual Screening',sub: 'Predicted activity · filtering', color: COLORS.primary,  iconName: 'Microscope' },
      { label: 'ADMET Prediction', sub: 'Tox · absorption · metabolism',  color: COLORS.accent,   iconName: 'Shield'     },
      { label: 'Lead List & Report',sub: 'Ranked candidates + report',    color: COLORS.bio,      iconName: 'BarChart3'  },
    ],

    stats: [
      { target: 10,  suffix: 'x', label: 'Faster Screening',           iconName: 'Zap',        color: COLORS.bio      },
      { target: 30,  suffix: '+', label: 'Drug Discovery Projects',    iconName: 'FlaskConical',color: COLORS.action  },
      { target: 90,  suffix: '%', label: 'ADMET Prediction Accuracy',  iconName: 'Shield',     color: COLORS.gold     },
      { target: 100, suffix: '%', label: 'Validated vs Experiment',    iconName: 'Activity',   color: COLORS.secondary },
    ],

    features: [
      { iconName: 'Brain',        title: 'Molecular Property Prediction',color: COLORS.bio,      desc: 'Graph Neural Networks (MPNN, AttentiveFP, DimeNet) and QSAR models for activity, selectivity, and potency prediction.' },
      { iconName: 'FlaskConical', title: 'Virtual Screening Pipeline',  color: COLORS.action,   desc: 'ML-based virtual screening of compound libraries — ranked hit lists with predicted activity, confidence intervals, and diversity filtering.' },
      { iconName: 'Shield',       title: 'ADMET Prediction',            color: COLORS.secondary, desc: 'Absorption, distribution, metabolism, excretion, and toxicity prediction using DeepChem, ADMETlab, and custom models — validated against experimental assays.' },
      { iconName: 'Microscope',   title: 'Target Identification',       color: COLORS.primary,  desc: 'Gene expression, proteomics, and network-based target identification — connecting disease mechanisms to druggable proteins.' },
      { iconName: 'Database',     title: 'Molecular Generation',        color: COLORS.accent,   desc: 'VAE and diffusion-based molecular generation for de novo design around known active scaffolds — with property-guided optimisation.' },
      { iconName: 'Activity',     title: 'Experimental Validation',     color: COLORS.gold,     desc: 'Model predictions benchmarked against your experimental data — with performance metrics and uncertainty quantification for each prediction.' },
    ],

    process: [
      { step: '01', title: 'Target & Data Review',    desc: 'Biological target, compound library, available experimental data, and prediction objectives agreed before pipeline design.' },
      { step: '02', title: 'Feature Engineering & Model',desc: 'Molecular representation selection, model architecture, and training with experimental validation set.' },
      { step: '03', title: 'Screening & ADMET',       desc: 'Virtual screening of your compound library, ADMET profiling of hits, and ranked candidate shortlist.' },
      { step: '04', title: 'Delivery',                desc: 'Ranked lead list, model code, prediction confidence intervals, and methods documentation.' },
    ],

    deliverables: [
      'ML model code and trained weights',
      'Virtual screening results (ranked)',
      'ADMET prediction table',
      'Model performance metrics',
      'Lead compound shortlist',
      'Uncertainty quantification',
      'Methods section text',
    ],

    techStack: [
      { label: 'Python',     color: COLORS.bio      },
      { label: 'DeepChem',   color: COLORS.action   },
      { label: 'RDKit',      color: COLORS.secondary },
      { label: 'PyTorch Geometric', color: COLORS.primary },
      { label: 'ADMETlab',   color: COLORS.accent   },
      { label: 'Scikit-learn',color: COLORS.gold    },
      { label: 'Pandas',     color: COLORS.bio      },
      { label: 'AutoDock',   color: COLORS.action   },
    ],

    tiers: [
      { name: 'QSAR Model',         price: 'From $5,000',  featured: false,
        desc:     'Activity prediction model with ADMET screening and ranked hits.',
        features: ['Activity model', 'ADMET profiling', 'Ranked hit list', '2–3 week delivery'] },
      { name: 'Virtual Screening',  price: 'From $10,000', featured: true,
        desc:     'Full virtual screening pipeline with GNN and molecular generation.',
        features: ['GNN model', 'Library screening', 'Molecular generation', 'Experimental validation', '30-day support'] },
      { name: 'Drug Discovery Programme', price: 'Custom', featured: false,
        desc:     'Integrated AI-accelerated drug discovery from target to lead.',
        features: ['Target ID', 'Multi-stage screening', 'Lead optimisation', 'Ongoing retainer'] },
    ],
  },

  // ── 14. Molecular Docking ML ──────────────────────────────────────────────
  'docking': {
    id:          'docking',
    title:       'Molecular Docking ML',
    tagline:     'ML-enhanced docking for faster, more accurate binding prediction.',
    badge:       'Drug & Lab',
    accentColor: COLORS.action,
    heroDesc:    'Traditional molecular docking is slow and often inaccurate for flexible targets. We enhance docking pipelines with ML rescoring, binding affinity prediction, and deep learning-based pose prediction — combining AutoDock Vina, Glide, or Gnina with ML models trained on your experimental binding data for target-specific accuracy.',
    tags:        ['Fixed-Fee Projects', 'Full Pipeline Code', 'From $4,000'],

    pipelineSteps: [
      { label: 'Protein & Ligands',sub: 'PDB · SDF · SMILES',           color: COLORS.bio,      iconName: 'FlaskConical'},
      { label: 'Structure Prep',   sub: 'Protonation · docking site',   color: COLORS.action,   iconName: 'Shield'     },
      { label: 'Docking Run',      sub: 'AutoDock · Gnina · Glide',     color: COLORS.primary,  iconName: 'Microscope' },
      { label: 'ML Rescoring',     sub: 'RF-Score · NNScore · CNN',     color: COLORS.secondary,iconName: 'Brain'      },
      { label: 'Affinity Pred.',   sub: 'Binding ΔG · IC50 pred.',      color: COLORS.accent,   iconName: 'Activity'   },
      { label: 'Ranked Results',   sub: 'Pose cluster + ranked report', color: COLORS.bio,      iconName: 'BarChart3'  },
    ],

    stats: [
      { target: 3,   suffix: 'x', label: 'Better Enrichment vs Docking',iconName: 'Activity',   color: COLORS.action   },
      { target: 25,  suffix: '+', label: 'Docking ML Projects',         iconName: 'FlaskConical',color: COLORS.bio     },
      { target: 10,  suffix: 'x', label: 'Faster than Structure-Based', iconName: 'Zap',        color: COLORS.gold     },
      { target: 100, suffix: '%', label: 'Benchmarked vs Experiment',   iconName: 'Shield',     color: COLORS.secondary },
    ],

    features: [
      { iconName: 'Microscope',  title: 'Molecular Docking Pipeline',    color: COLORS.action,  desc: 'AutoDock Vina, Gnina (CNN-based), and Glide docking pipelines — with grid preparation, ligand conformer generation, and pose clustering.' },
      { iconName: 'Brain',       title: 'ML Rescoring',                  color: COLORS.bio,     desc: 'RF-Score, NNScore, and CNN-based rescoring models trained on PDBbind or your experimental data to improve docking pose ranking.' },
      { iconName: 'Activity',    title: 'Binding Affinity Prediction',   color: COLORS.primary, desc: 'ΔG and IC50/Ki prediction from docked poses using graph neural networks or structure-based ML models — with uncertainty estimates.' },
      { iconName: 'Database',    title: 'Virtual Screening Docking',     color: COLORS.accent,  desc: 'High-throughput virtual screening of compound libraries through docking — with ML pre-filtering to focus docking compute on viable candidates.' },
      { iconName: 'Shield',      title: 'Allosteric & Covalent Docking', color: COLORS.secondary,desc: 'Allosteric site prediction and covalent docking workflows for non-standard binding mechanisms — with appropriate scoring function selection.' },
      { iconName: 'FlaskConical',title: 'Experimental Benchmarking',    color: COLORS.gold,    desc: 'Docking and ML models validated against your experimental binding or activity data — enrichment factors and ROC analysis reported.' },
    ],

    process: [
      { step: '01', title: 'Structure & Data Review', desc: 'Protein structure quality, binding site definition, ligand library, and available experimental data reviewed.' },
      { step: '02', title: 'Docking Pipeline Setup',  desc: 'Structure preparation, docking grid, conformer generation, and docking run across the compound library.' },
      { step: '03', title: 'ML Rescoring & Ranking',  desc: 'ML rescoring model applied, binding affinity predicted, and final ranked list produced with confidence estimates.' },
      { step: '04', title: 'Delivery',                desc: 'Ranked compound list, docked pose files, affinity predictions, and benchmarking against experimental data.' },
    ],

    deliverables: [
      'Docking pipeline code',
      'ML rescoring model',
      'Docked poses (SDF)',
      'Ranked compound table with scores',
      'Binding affinity predictions',
      'Experimental benchmarking report',
      'Methods section text',
    ],

    techStack: [
      { label: 'AutoDock Vina', color: COLORS.action   },
      { label: 'Gnina',         color: COLORS.bio      },
      { label: 'RDKit',         color: COLORS.primary  },
      { label: 'PyTorch Geom.', color: COLORS.accent   },
      { label: 'OpenBabel',     color: COLORS.secondary },
      { label: 'Python',        color: COLORS.gold     },
      { label: 'PLIP',          color: COLORS.action   },
      { label: 'HTMD',          color: COLORS.bio      },
    ],

    tiers: [
      { name: 'Docking Campaign',   price: 'From $4,000', featured: false,
        desc:     'Docking + ML rescoring for one target with ranked compound list.',
        features: ['Docking pipeline', 'ML rescoring', 'Ranked results', '2–3 week delivery'] },
      { name: 'Full Docking ML',    price: 'From $8,500', featured: true,
        desc:     'Library screening with affinity prediction and experimental benchmarking.',
        features: ['Library screening', 'Affinity prediction', 'Experimental validation', 'Pose analysis', '30-day support'] },
      { name: 'Drug Discovery Integration', price: 'Custom', featured: false,
        desc:     'Integrated docking + ADMET + activity prediction pipeline.',
        features: ['Multi-stage pipeline', 'Target flexibility', 'Lead optimisation', 'Ongoing retainer'] },
    ],
  },

  // ── 15. LIMS Integration ──────────────────────────────────────────────────
  'lims': {
    id:          'lims',
    title:       'LIMS Integration',
    tagline:     'Connect your lab systems to your bioinformatics pipelines.',
    badge:       'Drug & Lab',
    accentColor: COLORS.secondary,
    heroDesc:    'Laboratory Information Management Systems hold the metadata that makes bioinformatics analyses interpretable — sample provenance, QC metrics, experimental conditions, and clinical annotations. We build LIMS integrations that automatically route sample data into analysis pipelines, return results to LIMS, and eliminate the manual CSV export that wastes lab staff time.',
    tags:        ['Fixed-Fee Projects', 'Full Code Ownership', 'From $4,000'],

    pipelineSteps: [
      { label: 'LIMS Data',        sub: 'Sample metadata · results',     color: COLORS.bio,       iconName: 'Database'   },
      { label: 'API Integration',  sub: 'LIMS API · REST · SFTP',        color: COLORS.action,    iconName: 'Webhook'    },
      { label: 'Data Transform',   sub: 'Map · validate · normalise',    color: COLORS.secondary, iconName: 'GitBranch'  },
      { label: 'Pipeline Trigger', sub: 'Auto-launch analysis workflow', color: COLORS.primary,   iconName: 'Activity'   },
      { label: 'Results Return',   sub: 'Write back to LIMS',            color: COLORS.accent,    iconName: 'RefreshCw'  },
      { label: 'Audit & Notify',   sub: 'Audit log + team notification', color: COLORS.bio,       iconName: 'Shield'     },
    ],

    stats: [
      { target: 90,  suffix: '%', label: 'Manual Steps Eliminated',   iconName: 'TrendingDown',color: COLORS.secondary },
      { target: 30,  suffix: '+', label: 'LIMS Integrations Built',   iconName: 'Database',   color: COLORS.bio       },
      { target: 99,  suffix: '%', label: 'Integration Uptime',        iconName: 'Activity',   color: COLORS.gold      },
      { target: 100, suffix: '%', label: 'Audit Trail Included',      iconName: 'Shield',     color: COLORS.action    },
    ],

    features: [
      { iconName: 'Database',    title: 'LIMS API Connectivity',         color: COLORS.secondary,desc: 'LabVantage, LabWare, Benchling, STARLIMS, and custom LIMS systems connected via REST, SOAP, or SFTP — with auth, retry, and error handling.' },
      { iconName: 'GitBranch',   title: 'Metadata Mapping',              color: COLORS.bio,      desc: 'Sample metadata mapped to bioinformatics pipeline parameters — organism, tissue, protocol, batch, and QC flags routed automatically.' },
      { iconName: 'Activity',    title: 'Automated Pipeline Triggering', color: COLORS.action,   desc: 'Analysis pipelines launched automatically when LIMS status changes — no manual data export, no email to the bioinformatician.' },
      { iconName: 'RefreshCw',   title: 'Results Write-back',            color: COLORS.primary,  desc: 'Analysis results — quality metrics, variant counts, expression values — written back to LIMS automatically with provenance tracking.' },
      { iconName: 'Shield',      title: 'Audit Trail',                   color: COLORS.accent,   desc: 'Every data transfer and pipeline execution logged with timestamps, data hashes, and user context for GxP and ISO compliance.' },
      { iconName: 'Activity',    title: 'Monitoring & Alerting',         color: COLORS.gold,     desc: 'Integration health monitoring, failed transfer alerting, and a lab operations dashboard showing pipeline status by sample.' },
    ],

    process: [
      { step: '01', title: 'LIMS & Workflow Audit',  desc: 'Current LIMS system, data flows, manual steps, and integration points mapped before architecture design.' },
      { step: '02', title: 'Integration Build',       desc: 'LIMS API connector, metadata mapper, and pipeline trigger built and tested against staging LIMS environment.' },
      { step: '03', title: 'Results & Audit',         desc: 'Results write-back, audit logging, and monitoring deployed and validated.' },
      { step: '04', title: 'Handoff & Training',      desc: 'Integration documentation, runbook, lab staff training, and 30-day support window begins.' },
    ],

    deliverables: [
      'LIMS integration codebase',
      'Metadata mapping documentation',
      'Pipeline trigger configuration',
      'Results write-back implementation',
      'Audit trail setup',
      'Monitoring + alerting configuration',
      '30-day post-launch support',
    ],

    techStack: [
      { label: 'Python',      color: COLORS.secondary },
      { label: 'Benchling API',color: COLORS.bio      },
      { label: 'FastAPI',     color: COLORS.action    },
      { label: 'PostgreSQL',  color: COLORS.primary   },
      { label: 'Nextflow',    color: COLORS.accent    },
      { label: 'Docker',      color: COLORS.gold      },
      { label: 'Airflow',     color: COLORS.secondary },
      { label: 'REST / SFTP', color: COLORS.bio       },
    ],

    tiers: [
      { name: 'LIMS Connector',    price: 'From $4,000', featured: false,
        desc:     'LIMS API integration with metadata mapping and pipeline trigger.',
        features: ['LIMS connection', 'Metadata mapping', 'Pipeline trigger', '3–4 week delivery'] },
      { name: 'Full LIMS Platform',price: 'From $9,000', featured: true,
        desc:     'Bidirectional LIMS integration with results write-back and monitoring.',
        features: ['Bidirectional integration', 'Results write-back', 'Audit trail', 'Monitoring', '30-day support'] },
      { name: 'GxP LIMS Integration',price: 'Custom',   featured: false,
        desc:     'GxP-compliant LIMS integration with full validation and documentation.',
        features: ['GxP compliance', 'Validation documentation', 'CSV template', 'IQ/OQ/PQ support'] },
    ],
  },

  // ── 16. Clinical Trial Analytics ──────────────────────────────────────────
  'clinical-trials': {
    id:          'clinical-trials',
    title:       'Clinical Trial Analytics',
    tagline:     'Statistical analysis and data science for clinical trial data.',
    badge:       'Drug & Lab',
    accentColor: COLORS.primary,
    heroDesc:    'Clinical trial analysis requires domain-specific statistical expertise — ANCOVA, mixed models, survival analysis, and multiple-testing correction strategies that satisfy regulatory reviewers. We provide statistical analysis plan execution, primary and secondary endpoint analysis, subgroup analysis, and ICH E9(R1) estimand-aligned reporting for Phase I–III trials.',
    tags:        ['Fixed-Fee Projects', 'Full Documentation', 'From $5,000'],

    pipelineSteps: [
      { label: 'Trial Data',       sub: 'EDC / SAS / CDISC ADAM',       color: COLORS.bio,       iconName: 'Database'   },
      { label: 'Data Review',      sub: 'Eligibility · missing data',   color: COLORS.action,    iconName: 'Shield'     },
      { label: 'Primary Endpoint', sub: 'ANCOVA · MMRM · logistic',     color: COLORS.primary,   iconName: 'Activity'   },
      { label: 'Secondary Anal.',  sub: 'Survival · subgroup · PK/PD',  color: COLORS.accent,    iconName: 'GitBranch'  },
      { label: 'Sensitivity',      sub: 'Estimand · imputation · tipping',color: COLORS.secondary,iconName: 'Layers'   },
      { label: 'CSR & Tables',     sub: 'RTF / PDF tables + CSR text',  color: COLORS.bio,       iconName: 'BookOpen'   },
    ],

    stats: [
      { target: 100, suffix: '%', label: 'ICH E9(R1) Aligned',        iconName: 'Shield',     color: COLORS.primary  },
      { target: 30,  suffix: '+', label: 'Trial Analyses Delivered',   iconName: 'Activity',   color: COLORS.bio      },
      { target: 100, suffix: '%', label: 'SAP-executed Analysis',      iconName: 'BookOpen',   color: COLORS.gold     },
      { target: 100, suffix: '%', label: 'Reproducible & Auditable',   iconName: 'Database',   color: COLORS.secondary },
    ],

    features: [
      { iconName: 'Activity',   title: 'Primary Endpoint Analysis',     color: COLORS.primary,  desc: 'ANCOVA, MMRM, GLMM, and logistic regression for continuous, repeated-measures, and binary endpoints — following the pre-specified SAP.' },
      { iconName: 'GitBranch',  title: 'Survival & Time-to-event',      color: COLORS.bio,      desc: 'Kaplan-Meier, log-rank, Cox PH, and restricted mean survival time (RMST) analysis for time-to-event endpoints with competing risks.' },
      { iconName: 'Layers',     title: 'ICH E9(R1) Estimand Analysis',  color: COLORS.action,   desc: 'Estimand framework implementation — treatment policy, composite, hypothetical, and principal stratum strategies with sensitivity analyses.' },
      { iconName: 'Shield',     title: 'Missing Data & Sensitivity',    color: COLORS.accent,   desc: 'Multiple imputation, pattern mixture models, tipping point analysis, and delta-adjustment sensitivity analyses for missing data.' },
      { iconName: 'Database',   title: 'Subgroup Analysis',             color: COLORS.secondary,desc: 'Pre-specified and exploratory subgroup analyses with forest plots, interaction tests, and multiplicity considerations.' },
      { iconName: 'BookOpen',   title: 'CSR Tables & Figures',          color: COLORS.gold,     desc: 'RTF / PDF clinical study report tables, figures, and listings following ICH E3 structure — reviewer-ready and submission-formatted.' },
    ],

    process: [
      { step: '01', title: 'SAP & Data Review',       desc: 'Statistical analysis plan reviewed, dataset structure confirmed, eligibility criteria applied, and analysis datasets locked.' },
      { step: '02', title: 'Primary Endpoint',        desc: 'Primary endpoint analysis executed per SAP — with sensitivity analyses and missing data approach as specified.' },
      { step: '03', title: 'Secondary & Subgroup',    desc: 'All pre-specified secondary endpoints, subgroup analyses, and safety analyses completed.' },
      { step: '04', title: 'CSR Outputs & Delivery',  desc: 'RTF/PDF tables, figures, and listings delivered — with statistical methods text for CSR Section 9.' },
    ],

    deliverables: [
      'Analysis code (R / SAS / Python)',
      'Primary endpoint results and tables',
      'Secondary endpoint results',
      'Subgroup forest plots',
      'Sensitivity analysis results',
      'CSR-formatted tables and figures',
      'Statistical methods text (CSR Section 9)',
    ],

    techStack: [
      { label: 'R',             color: COLORS.primary  },
      { label: 'SAS',           color: COLORS.bio      },
      { label: 'Python',        color: COLORS.action   },
      { label: 'survival (R)',  color: COLORS.accent   },
      { label: 'lme4 (R)',      color: COLORS.secondary },
      { label: 'mice (R)',      color: COLORS.gold     },
      { label: 'rtables (R)',   color: COLORS.primary  },
      { label: 'CDISC ADaM',    color: COLORS.bio      },
    ],

    tiers: [
      { name: 'Single Endpoint',   price: 'From $5,000',  featured: false,
        desc:     'Primary endpoint analysis with sensitivity analysis and tables.',
        features: ['Primary endpoint', 'Sensitivity analysis', 'CSR tables', '2–3 week delivery'] },
      { name: 'Full Trial Analysis',price: 'From $12,000', featured: true,
        desc:     'Complete SAP-executed analysis with all endpoints and CSR outputs.',
        features: ['All endpoints', 'Subgroup analysis', 'Estimand framework', 'CSR outputs', '30-day support'] },
      { name: 'Regulatory Submission',price: 'Custom',   featured: false,
        desc:     'Full regulatory submission support with FDA/EMA-aligned outputs.',
        features: ['FDA / EMA submission', 'CDISC datasets', 'Reviewer response support', 'Ongoing retainer'] },
    ],
  },

};